package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

var conn *pgxpool.Pool

var pgUrl = getEnv("PG_URL")
var serverPort = getEnv("SERVER_PORT")

func writeJson(w http.ResponseWriter, v any) error {
	out, err := json.Marshal(v)
	if err != nil {
		return err
	}
	w.Write(out)
	return nil
}

func exec(sql string, arguments ...any) error {
	_, err := conn.Exec(context.Background(), sql, arguments...)
	if err != nil {
		fmt.Println("Exec failed:", err, sql)
		return err
	}
	return nil
}

func query(sql string, arguments ...any) (pgx.Rows, error) {
	rows, err := conn.Query(context.Background(), sql, arguments...)
	if err != nil {
		fmt.Println("Query failed:", err, sql)
		return nil, err
	}
	return rows, nil
}

func queryRow(sql string, arguments ...any) pgx.Row {
	return conn.QueryRow(context.Background(), sql, arguments...)
}

func scan(row pgx.Row, dest ...any) error {
	err := row.Scan(dest...)
	if err != nil {
		fmt.Println("Scan failed:", err)
		return err
	}
	return nil
}

func hello(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Hello world!\n")
}

func addSolve(w http.ResponseWriter, r *http.Request) {
	var solve Solve
	err := unmarshal(r.Body, &solve)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	sql := `
	insert into solves (uid, time, initial_cube_state, moves)
	values ($1, $2, $3, $4)
	returning id;
	`
	row := queryRow(sql, solve.Uid, solve.Time, solve.InitialCubeState, solve.Moves)
	if row == nil {
		writeJson(w, GenericResponse{false})
		return
	}

	var id int
	err = scan(row, &id)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	writeJson(w, AddSolveResponse{true, id})
}

func getSolve(w http.ResponseWriter, r *http.Request) {
	var req GetSolveRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("getSolve:", err)
		return
	}

	sql := `
	select * from solves 
	where id = $1;
	`
	row := queryRow(sql, req.Id)
	if row == nil {
		fmt.Println("getSolve row not found:", err)
		writeJson(w, GenericResponse{false})
		return
	}

	var response GetSolveResponse
	var solve Solve
	var timestamp any
	err = scan(row, &response.SolveRecord.Id, &solve.Uid, &timestamp, &solve.Time, &solve.InitialCubeState, &solve.Moves)
	if err != nil {
		writeJson(w, GenericResponse{false})
	}

	response.Success = true
	response.SolveRecord.Solve = solve
	writeJson(w, response)
}

func getSolves(w http.ResponseWriter, r *http.Request) {
	var req GetSolvesRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("getSolves:", err)
		writeJson(w, GetSolvesResponse{false, []SolveRecord{}})
		return
	}

	sql := `
	select * from solves 
	where uid = $1
	order by timestamp asc;
	`
	rows, err := query(sql, req.Uid)
	if err != nil {
		writeJson(w, GetSolvesResponse{false, []SolveRecord{}})
		return
	}

	var arr []SolveRecord
	for rows.Next() {
		var solveRecord SolveRecord
		var solve Solve
		var timestamp any
		err := scan(rows, &solveRecord.Id, &solve.Uid, &timestamp, &solve.Time, &solve.InitialCubeState, &solve.Moves)
		if err != nil {
			writeJson(w, GetSolvesResponse{false, []SolveRecord{}})
			return
		}

		solveRecord.Solve = solve
		arr = append(arr, solveRecord)
	}

	writeJson(w, GetSolvesResponse{true, arr})
}

func solve(w http.ResponseWriter, r *http.Request) {
	var req SolveRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	httpRes, err := http.Get("http://localhost:4000/solve/" + req.Cube)
	if err != nil {
		fmt.Println("solve http.Get:", err)
		writeJson(w, GenericResponse{false})
		return
	}
	defer httpRes.Body.Close()
	bodyBytes, err := ioutil.ReadAll(httpRes.Body)
	if err != nil {
		fmt.Println("solve ioutil.ReadAll:", err)
		writeJson(w, GenericResponse{false})
		return
	}
	bodyString := string(bodyBytes)

	writeJson(w, SolveResponse{true, bodyString})
}

func createTrainingAlgs(w http.ResponseWriter, r *http.Request) {
	var req CreateTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	sql := `
	insert into training_algs (uid, "set", training_algs, cube, inactive_stickers)
	values ($1, $2, $3, $4, $5)
	returning id;
	`
	row := queryRow(sql, req.Uid, req.Set, req.TrainingAlgs, req.Cube, req.InactiveStickers)
	var id int
	err = scan(row, &id)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	writeJson(w, CreateTrainingAlgsResponse{true, id})
}

func updateTrainingAlgs(w http.ResponseWriter, r *http.Request) {
	var req UpdateTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	sql := `update training_algs set training_algs = $2 where id = $1;`
	err = exec(sql, req.Id, req.TrainingAlgs)
	if err != nil {
		writeJson(w, GenericResponse{false})
		return
	}

	writeJson(w, GenericResponse{true})
}

func readAlgsFromJson(fileName string) []AlgSet {
	file, err := os.Open(fileName)
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []AlgSet{}
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	var algSets []AlgSet
	err = decoder.Decode(&algSets)
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []AlgSet{}
	}

	return algSets
}

func findAlgSet(algSets []AlgSet, setName string) AlgSet {
	for _, algSet := range algSets {
		if algSet.Name == setName {
			return algSet
		}
	}
	return AlgSet{}
}

func initZeroScores(algSet AlgSet) []TrainingAlg {
	out := make([]TrainingAlg, len(algSet.Algs))
	for i, alg := range algSet.Algs {
		out[i] = TrainingAlg{0, alg}
	}
	return out
}

func getTrainingAlgs(w http.ResponseWriter, r *http.Request) {
	var req GetTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	errorRes := GetTrainingAlgsResponse{false, -1, []TrainingAlg{}, "", []int{}}
	if err != nil {
		writeJson(w, errorRes)
		return
	}

	sql := "select id, training_algs, cube, inactive_stickers from training_algs where uid = $1 and set = $2;"
	var res GetTrainingAlgsResponse
	row := queryRow(sql, req.Uid, req.Set)
	err = scan(row, &res.Id, &res.TrainingAlgs, &res.Cube, &res.InactiveStickers)
	if err == pgx.ErrNoRows {
		algs := readAlgsFromJson("../algs/algs.json")
		algSet := findAlgSet(algs, req.Set)
		trainingAlgs := initZeroScores(algSet)
		res = GetTrainingAlgsResponse{true, -1, trainingAlgs, algSet.Cube, algSet.Inactive}
		writeJson(w, res)
		return
	}
	if err != nil {
		writeJson(w, errorRes)
		return
	}

	res.Success = true
	writeJson(w, res)
}

func user(w http.ResponseWriter, r *http.Request) {
	var req UserRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("user:", err)
		writeJson(w, UserResponse{false, 0})
		return
	}

	sql := "select * from users where email = $1;"
	var uid int
	var email string
	err = queryRow(sql, req.Email).Scan(&uid, &email)
	if err == pgx.ErrNoRows {
		sql = "insert into users (email) values ($1) returning uid;"
		err = queryRow(sql, req.Email).Scan(&uid)
		if err != nil {
			writeJson(w, UserResponse{false, 0})
			return
		}
		writeJson(w, UserResponse{true, uid})
		return
	}
	if err != nil {
		fmt.Println("Scan failed:", err)
		writeJson(w, UserResponse{false, 0})
		return
	}

	writeJson(w, UserResponse{true, uid})
}

// Set up endpoint and enable CORS
func handleFunc(pattern string, handler func(http.ResponseWriter, *http.Request)) {
	http.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		handler(w, r)
	})
}

func main() {
	fmt.Println(time.Now().String())
	var err error
	conn, err = pgxpool.New(context.Background(), pgUrl)
	if err != nil {
		fmt.Printf("Unable to connect to database: %v\n", err)
		os.Exit(1)
		return
	}
	defer conn.Close()

	fmt.Printf("Starting server\n")
	handleFunc("/", hello)
	handleFunc("/addSolve", addSolve)
	handleFunc("/getSolve", getSolve)
	handleFunc("/getSolves", getSolves)
	handleFunc("/solve", solve)
	handleFunc("/createTrainingAlgs", createTrainingAlgs)
	handleFunc("/updateTrainingAlgs", updateTrainingAlgs)
	handleFunc("/getTrainingAlgs", getTrainingAlgs)
	handleFunc("/user", user)

	addr := fmt.Sprintf(":%s", serverPort)
	fullchain := "/etc/letsencrypt/live/cubingapp.com/fullchain.pem"
	privkey := "/etc/letsencrypt/live/cubingapp.com/privkey.pem"
	err = http.ListenAndServeTLS(addr, fullchain, privkey, nil)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("Server closed\n")
	} else if err != nil {
		fmt.Printf("Error starting server: %s\n", err)
		os.Exit(1)
	}
}
