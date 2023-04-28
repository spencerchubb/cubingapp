package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"

	server "server/src/db"

	"github.com/jackc/pgx/v5/pgxpool"
)

var db server.DB

var pgUrl = getEnv("PG_URL")
var serverPort = getEnv("SERVER_PORT")
var mode = getEnv("MODE")

func writeJson(w http.ResponseWriter, v any) error {
	out, err := json.Marshal(v)
	if err != nil {
		return err
	}
	w.Write(out)
	return nil
}

func root(w http.ResponseWriter, r *http.Request) {
	msg := fmt.Sprintf("Invalid endpoint hit: %s", r.URL)
	fmt.Println(msg)
	io.WriteString(w, msg)
}

func hello(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Hello world!\n")
}

func createAlgSet(w http.ResponseWriter, r *http.Request) {
	var req CreateTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	id, err := db.CreateAlgSet(req.Uid, req.Set, req.TrainingAlgs, req.Cube, req.InactiveStickers, req.Moves, req.Disregard, req.OnlyOrientation)
	if err != nil {
		writeJson(w, nil)
		return
	}

	writeJson(w, map[string]interface{}{"id": id})
}

func readAlgsFromJson(fileName string) []server.AlgSetsRow {
	file, err := os.Open(fileName)
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []server.AlgSetsRow{}
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	var algSets []server.AlgSetsRow
	err = decoder.Decode(&algSets)
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []server.AlgSetsRow{}
	}

	return algSets
}

func findAlgSet(algSets []server.AlgSetsRow, setName string) server.AlgSetsRow {
	for _, algSet := range algSets {
		if algSet.Name == setName {
			return algSet
		}
	}
	return server.AlgSetsRow{}
}

func initZeroScores(algs []string) []server.TrainingAlg {
	out := make([]server.TrainingAlg, len(algs))
	for i, alg := range algs {
		out[i] = server.TrainingAlg{Score: 0, Alg: alg}
	}
	return out
}

func createPrebuiltAlgSet(w http.ResponseWriter, r *http.Request) {
	var req CreatePrebuiltTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	algs := readAlgsFromJson("../algs/algs.json")
	algSet := findAlgSet(algs, req.Set)
	trainingAlgs := initZeroScores(algSet.Algs)

	id, err := db.CreateAlgSet(req.Uid, req.Set, trainingAlgs, algSet.Cube, algSet.Inactive, algSet.Moves, algSet.Disregard, algSet.OnlyOrientation)
	if err != nil {
		writeJson(w, nil)
		return
	}

	algSet.TrainingAlgs = trainingAlgs
	algSet.Id = id
	writeJson(w, algSet)
}

func deleteAlgSet(w http.ResponseWriter, r *http.Request) {
	var req DeleteTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	err = db.DeleteAlgSet(req.Id)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	writeJson(w, GenericResponse{true})
}

func getAlgSet(w http.ResponseWriter, r *http.Request) {
	var req GetTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, nil)
		return
	}

	row, err := db.GetAlgSet(req.Uid, req.Set)
	if err != nil {
		algs := readAlgsFromJson("../algs/algs.json")
		algSet := findAlgSet(algs, req.Set)
		trainingAlgs := initZeroScores(algSet.Algs)
		algSet.Id = -1
		algSet.TrainingAlgs = trainingAlgs

		// Not needed on the frontend, so remove for efficiency.
		algSet.Algs = nil

		writeJson(w, algSet)
		return
	}

	writeJson(w, row)
}

func getAlgSets(w http.ResponseWriter, r *http.Request) {
	var req GetTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, nil)
		return
	}

	rows, err := db.GetAlgSets(req.Uid)
	if err != nil {
		writeJson(w, nil)
		return
	}

	writeJson(w, rows)
}

func updateAlgSet(w http.ResponseWriter, r *http.Request) {
	var req UpdateTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, nil)
		return
	}

	err = db.UpdateAlgSet(req.Id, req.Set, req.TrainingAlgs)
	if err != nil {
		writeJson(w, nil)
		return
	}

	writeJson(w, nil)
}

func addSolve(w http.ResponseWriter, r *http.Request) {
	var solve Solve
	err := unmarshal(r.Body, &solve)
	if err != nil {
		fmt.Println("addSolve unmarshal:", err)
		writeJson(w, -1)
		return
	}

	id, err := db.AddSolve(solve.Uid, solve.Time, solve.InitialCubeState, solve.Moves)
	if err != nil {
		fmt.Println("addSolve:", err)
		writeJson(w, -1)
		return
	}

	writeJson(w, id)
}

func getSolve(w http.ResponseWriter, r *http.Request) {
	var req GetSolveRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("getSolve unmarshal:", err)
		return
	}

	solve, err := db.GetSolve(req.Id)
	if err != nil {
		fmt.Println("getSolve:", err)
		writeJson(w, nil)
		return
	}

	writeJson(w, solve)
}

func getSolves(w http.ResponseWriter, r *http.Request) {
	var req GetSolvesRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("getSolves:", err)
		writeJson(w, nil)
		return
	}

	solves, err := db.GetSolves(req.Uid)
	if err != nil {
		fmt.Println("getSolves:", err)
		writeJson(w, nil)
		return
	}

	writeJson(w, solves)
}

func user(w http.ResponseWriter, r *http.Request) {
	var req UserRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("user:", err)
		writeJson(w, UserResponse{false, 0})
		return
	}

	uid, err := db.GetAndSaveUser(req.Email)
	if err != nil {
		fmt.Println("user:", err)
		writeJson(w, nil)
	}

	writeJson(w, map[string]interface{}{"uid": uid})
}

// Set up endpoint and enable CORS
func handleFunc(pattern string, handler func(http.ResponseWriter, *http.Request)) {
	http.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Endpoint hit: %s\n", pattern)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		handler(w, r)
	})
}

func listenAndServe() error {
	killPort(serverPort)

	var addr string
	if mode == "dev" {
		addr = fmt.Sprintf("127.0.0.1:%s", serverPort)
		fmt.Printf("Starting server on port %s\n", serverPort)
		return http.ListenAndServe(addr, nil)
	}

	addr = fmt.Sprintf(":%s", serverPort)
	fullchain := "/etc/letsencrypt/live/cubingapp.com/fullchain.pem"
	privkey := "/etc/letsencrypt/live/cubingapp.com/privkey.pem"
	fmt.Printf("Starting server on port %s\n", serverPort)
	return http.ListenAndServeTLS(addr, fullchain, privkey, nil)
}

func main() {
	fmt.Println(time.Now().String())
	var err error

	handleFunc("/", root)
	handleFunc("/hello", hello)
	handleFunc("/createAlgSet", createAlgSet)
	handleFunc("/createPrebuiltAlgSet", createPrebuiltAlgSet)
	handleFunc("/deleteAlgSet", deleteAlgSet)
	handleFunc("/getAlgSet", getAlgSet)
	handleFunc("/getAlgSets", getAlgSets)
	handleFunc("/updateAlgSet", updateAlgSet)
	handleFunc("/addSolve", addSolve)
	handleFunc("/getSolve", getSolve)
	handleFunc("/getSolves", getSolves)
	handleFunc("/user", user)

	go func() {
		err = listenAndServe()
		if errors.Is(err, http.ErrServerClosed) {
			fmt.Printf("Server closed\n")
			os.Exit(1)
		} else if err != nil {
			fmt.Printf("Error starting server: %s\n", err)
			os.Exit(1)
		}
	}()

	// Setup database connection after server is started because this is slow.
	conn, err := pgxpool.New(context.Background(), pgUrl)
	db = server.DB{Conn: conn}
	if err != nil {
		fmt.Printf("Unable to connect to database: %v\n", err)
		os.Exit(1)
		return
	}
	defer conn.Close()

	fmt.Println("Connected to database")

	// Wait for server to close.
	<-make(chan struct{})
}
