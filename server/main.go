package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
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

func root(r *http.Request) interface{} {
	msg := fmt.Sprintf("Invalid endpoint hit: %s", r.URL)
	fmt.Println(msg)
	return msg
}

func hello(r *http.Request) interface{} {
	return "Hello world!\n"
}

func createAlgSet(r *http.Request) interface{} {
	var req CreateTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	id, err := db.CreateAlgSet(req.Uid, req.Set, req.TrainingAlgs, req.Cube, req.InactiveStickers, req.Moves, req.Disregard, req.OnlyOrientation)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"id": id}
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

func createPrebuiltAlgSet(r *http.Request) interface{} {
	var req CreatePrebuiltTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	algs := readAlgsFromJson("../algs/algs.json")
	algSet := findAlgSet(algs, req.Set)
	trainingAlgs := initZeroScores(algSet.Algs)

	id, err := db.CreateAlgSet(req.Uid, req.Set, trainingAlgs, algSet.Cube, algSet.Inactive, algSet.Moves, algSet.Disregard, algSet.OnlyOrientation)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	algSet.TrainingAlgs = trainingAlgs
	algSet.Id = id
	return algSet
}

func deleteAlgSet(r *http.Request) interface{} {
	var req DeleteTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	err = db.DeleteAlgSet(req.Id)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true}
}

func getAlgSet(r *http.Request) interface{} {
	var req GetTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
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

		return algSet
	}

	return row
}

func getAlgSets(r *http.Request) interface{} {
	var req GetAlgSetsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	rows, err := db.GetAlgSets(req.Uid)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return rows
}

func updateAlgSet(r *http.Request) interface{} {
	var req UpdateTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	err = db.UpdateAlgSet(req.Id, req.Set, req.TrainingAlgs)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true}
}

func addSolve(r *http.Request) interface{} {
	var solve Solve
	err := unmarshal(r.Body, &solve)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	id, err := db.AddSolve(solve.Uid, solve.Time, solve.InitialCubeState, solve.Moves)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true, "id": id}
}

func getSolve(r *http.Request) interface{} {
	var req GetSolveRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	solve, err := db.GetSolve(req.Id)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return solve
}

func getSolves(r *http.Request) interface{} {
	var req GetSolvesRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	solves, err := db.GetSolves(req.Uid)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return solves
}

func user(r *http.Request) interface{} {
	var req UserRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	uid, err := db.GetAndSaveUser(req.Email)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true, "uid": uid}
}

// Set up endpoint and enable CORS
func handleFunc(pattern string, handler func(*http.Request) interface{}) {
	http.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Endpoint hit: %s\n", pattern)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		result := handler(r)

		if str, ok := result.(string); ok {
			// If the result is a string, write it directly to the response
			w.Write([]byte(str))
			return
		}

		json, err := json.Marshal(result)
		if err != nil {
			fmt.Printf("Error while marshaling: %s\n", err)
		}
		w.Write(json)
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
