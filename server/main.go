package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

var conn *pgxpool.Pool

func writeJson(w http.ResponseWriter, v any) error {
	out, err := json.Marshal(v)
	if err != nil {
		return err
	}
	w.Write(out)
	return nil
}

func hello(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Hello world!\n")
}

func addSolve(w http.ResponseWriter, r *http.Request) {
	var solve Solve
	err := unmarshal(r.Body, &solve)
	if err != nil {
		fmt.Println("addSolve:", err)
		writeJson(w, GenericResponse{false})
		return
	}

	sql := `
	insert into solves (uid, time, initial_cube_state, moves)
	values ($1, $2, $3, $4);
	`
	_, err = conn.Exec(context.Background(), sql, solve.Uid, solve.Time, solve.InitialCubeState, solve.Moves)
	if err != nil {
		fmt.Println("conn.Exec:", err)
		writeJson(w, GenericResponse{false})
		return
	}

	writeJson(w, GenericResponse{true})
}

func getSolve(w http.ResponseWriter, r *http.Request) {
	var req GetSolveRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("getSolve:", err)
		writeJson(w, GetSolveResponse{false, SolveRecord{}})
		return
	}

	sql := `
	select * from solves 
	where id = $1;
	`
	rows, err := conn.Query(context.Background(), sql, req.Id)
	if err != nil {
		fmt.Printf("Query failed: %v\n", err)
		writeJson(w, GetSolveResponse{false, SolveRecord{}})
		return
	}

	if rows.Next() {
		var response GetSolveResponse
		var solve Solve
		var timestamp any
		err := rows.Scan(&response.SolveRecord.Id, &solve.Uid, &timestamp, &solve.Time, &solve.InitialCubeState, &solve.Moves)
		if err != nil {
			fmt.Printf("Scan failed: %v\n", err)
			writeJson(w, GetSolveResponse{false, SolveRecord{}})
			return
		}

		response.Success = true
		response.SolveRecord.Solve = solve
		writeJson(w, response)
		return
	}

	writeJson(w, GetSolveResponse{false, SolveRecord{}})
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
	rows, err := conn.Query(context.Background(), sql, req.Uid)
	if err != nil {
		fmt.Printf("Query failed: %v\n", err)
		writeJson(w, GetSolvesResponse{false, []SolveRecord{}})
		return
	}

	var arr []SolveRecord
	for rows.Next() {
		var solveRecord SolveRecord
		var solve Solve
		var timestamp any
		err := rows.Scan(&solveRecord.Id, &solve.Uid, &timestamp, &solve.Time, &solve.InitialCubeState, &solve.Moves)
		if err != nil {
			fmt.Printf("Scan failed: %v\n", err)
			writeJson(w, GetSolvesResponse{false, []SolveRecord{}})
			return
		}

		solveRecord.Solve = solve
		arr = append(arr, solveRecord)
	}

	writeJson(w, GetSolvesResponse{true, arr})
}

func writeTrainingAlgs(w http.ResponseWriter, r *http.Request) {
	var req TrainingAlgsRecord
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("writeTrainingAlgs:", err)
		writeJson(w, GenericResponse{false})
		return
	}

	sql := `
	insert into training_algs (uid, set, training_algs)
	values ($1, $2, $3)
	on conflict (uid, set) do update
	set training_algs = $3;
	`
	_, err = conn.Query(context.Background(), sql, req.Uid, req.Set, req.TrainingAlgs)
	if err != nil {
		fmt.Printf("Query failed: %v\n", err)
		writeJson(w, GenericResponse{false})
		return
	}

	writeJson(w, GenericResponse{true})
}

func getTrainingAlgs(w http.ResponseWriter, r *http.Request) {
	var req GetTrainingAlgsRequest
	err := unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println("getTrainingAlgs:", err)
		writeJson(w, GetTrainingAlgsResponse{false, 0, TrainingAlgsRecord{}})
		return
	}

	sql := "select * from training_algs where uid = $1 and set = $2"
	rows, err := conn.Query(context.Background(), sql, req.Uid, req.Set)
	if err != nil {
		fmt.Printf("Query failed: %v\n", err)
		writeJson(w, GetTrainingAlgsResponse{false, 0, TrainingAlgsRecord{}})
		return
	}

	if rows.Next() {
		var res GetTrainingAlgsResponse
		err := rows.Scan(&res.Id, &res.TrainingAlgsRecord.Uid, &res.TrainingAlgsRecord.Set, &res.TrainingAlgsRecord.TrainingAlgs)
		if err != nil {
			fmt.Printf("Scan failed: %v\n", err)
			writeJson(w, GetTrainingAlgsResponse{false, 0, TrainingAlgsRecord{}})
			return
		}
		res.Success = true
		writeJson(w, res)
		return
	}

	writeJson(w, GetTrainingAlgsResponse{false, 0, TrainingAlgsRecord{}})
}

func main() {
	fmt.Printf("Attempting to connect to postgres...\n")
	var err error
	conn, err = pgxpool.New(context.Background(), pgUrl())
	if err != nil {
		fmt.Printf("Unable to connect to database: %v\n", err)
		os.Exit(1)
		return
	}
	defer conn.Close()

	fmt.Printf("Starting server\n")
	http.HandleFunc("/", hello)
	http.HandleFunc("/addSolve", addSolve)
	http.HandleFunc("/getSolve", getSolve)
	http.HandleFunc("/getSolves", getSolves)
	http.HandleFunc("/writeTrainingAlgs", writeTrainingAlgs)
	http.HandleFunc("/getTrainingAlgs", getTrainingAlgs)

	err = http.ListenAndServe(":3000", nil)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("Server closed\n")
	} else if err != nil {
		fmt.Printf("Error starting server: %s\n", err)
		os.Exit(1)
	}
}