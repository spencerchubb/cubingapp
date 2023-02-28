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

	"github.com/jackc/pgx/v5/pgxpool"

	server "server/src/db"
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
	defer file.Close()
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []server.AlgSetsRow{}
	}

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

func updateAlgSet(w http.ResponseWriter, r *http.Request) {
	var req UpdateTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, nil)
		return
	}

	err = db.UpdateAlgSet(req.Id, req.TrainingAlgs)
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
	addr := fmt.Sprintf(":%s", serverPort)
	fmt.Println("Listening on", addr)

	if mode == "dev" {
		return http.ListenAndServe(addr, nil)
	}

	fullchain := "/etc/letsencrypt/live/cubingapp.com/fullchain.pem"
	privkey := "/etc/letsencrypt/live/cubingapp.com/privkey.pem"
	return http.ListenAndServeTLS(addr, fullchain, privkey, nil)
}

func main() {
	fmt.Println(time.Now().String())
	var err error
	conn, err := pgxpool.New(context.Background(), pgUrl)
	defer conn.Close()
	db = server.DB{Conn: conn}
	if err != nil {
		fmt.Printf("Unable to connect to database: %v\n", err)
		os.Exit(1)
		return
	}

	handleFunc("/", root)
	handleFunc("/hello", hello)
	handleFunc("/createAlgSet", createAlgSet)
	handleFunc("/getAlgSet", getAlgSet)
	handleFunc("/updateAlgSet", updateAlgSet)
	handleFunc("/addSolve", addSolve)
	handleFunc("/getSolve", getSolve)
	handleFunc("/getSolves", getSolves)
	handleFunc("/user", user)

	err = listenAndServe()
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("Server closed\n")
	} else if err != nil {
		fmt.Printf("Error starting server: %s\n", err)
		os.Exit(1)
	}
}
