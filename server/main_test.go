package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"testing"

	"github.com/jackc/pgx/v5"
	"github.com/stretchr/testify/assert"
)

func readJson(v any) (*bytes.Reader, error) {
	byteSlice, err := json.Marshal(v)
	if err != nil {
		return nil, err
	}
	return bytes.NewReader(byteSlice), nil
}

func TestAddSolve(t *testing.T) {
	conn, err := pgx.Connect(context.Background(), pgUrl())
	if err != nil {
		t.Errorf("Unable to connect to database: %v\n", err)
		return
	}
	defer conn.Close(context.Background())

	conn.Exec(context.Background(), "delete from solves;")

	mockSolve := Solve{
		0, // id doesn't matter, but this is needed to compile
		2,
		2.0,
		[]int{0, 0, 1, 1, 2, 2, 3, 3, 4, 4},
		[]Move{
			{"R", 0.5},
			{"U", 1.0},
			{"R'", 1.5},
			{"U'", 2.0},
		},
	}
	reader, err := readJson(mockSolve)
	res, err := http.Post("http://127.0.0.1:3000/addSolve", "", reader)
	if err != nil {
		t.Errorf("POST failed\n")
		return
	}

	var response GenericResponse
	unmarshal(res.Body, &response)
	assert.True(t, response.Success)

	rows, err := conn.Query(context.Background(), "select * from solves;")
	if rows.Next() {
		var solve Solve
		var timestamp any
		err := rows.Scan(&solve.Id, &solve.Uid, &timestamp, &solve.Time, &solve.InitialCubeState, &solve.Moves)
		if err != nil {
			fmt.Printf("Scan failed: %v\n", err)
			return
		}

		solve.Id = 0

		assert.Equal(t, solve, mockSolve)
	}
}

func TestGetSolve(t *testing.T) {
	conn, err := pgx.Connect(context.Background(), pgUrl())
	if err != nil {
		t.Errorf("Unable to connect to database: %v\n", err)
		return
	}
	defer conn.Close(context.Background())

	conn.Exec(context.Background(), "delete from solves;")

	mockSolve := Solve{
		0,
		2,
		2.0,
		[]int{0, 0, 1, 1, 2, 2, 3, 3, 4, 4},
		[]Move{
			{"R", 0.5},
			{"U", 1.0},
			{"R'", 1.5},
			{"U'", 2.0},
		},
	}

	sql := `
	insert into solves (id, uid, time, initial_cube_state, moves)
	values ($1, $2, $3, $4, $5);
	`
	_, err = conn.Exec(context.Background(), sql, mockSolve.Id, mockSolve.Uid, mockSolve.Time, mockSolve.InitialCubeState, mockSolve.Moves)
	if err != nil {
		return
	}

	reader, err := readJson(GetSolveRequest{0})
	res, err := http.Post("http://127.0.0.1:3000/getSolve", "", reader)
	if err != nil {
		t.Errorf("POST failed\n")
		return
	}

	var solve Solve
	unmarshal(res.Body, &solve)
	assert.Equal(t, solve, mockSolve)
}

func TestGetSolves(t *testing.T) {
	conn, err := pgx.Connect(context.Background(), pgUrl())
	if err != nil {
		t.Errorf("Unable to connect to database: %v\n", err)
		return
	}
	defer conn.Close(context.Background())

	conn.Exec(context.Background(), "delete from solves;")

	mockSolve := Solve{
		0, // id doesn't matter, but this is needed to compile
		2,
		2.0,
		[]int{0, 0, 1, 1, 2, 2, 3, 3, 4, 4},
		[]Move{
			{"R", 0.5},
			{"U", 1.0},
			{"R'", 1.5},
			{"U'", 2.0},
		},
	}

	for i := 0; i < 3; i++ {
		reader, err := readJson(mockSolve)
		res, err := http.Post("http://127.0.0.1:3000/addSolve", "", reader)
		if err != nil {
			t.Errorf("POST failed\n")
			return
		}

		var response GenericResponse
		unmarshal(res.Body, &response)
		assert.True(t, response.Success)
	}

	reader, err := readJson(GetSolvesRequest{2})
	res, err := http.Post("http://127.0.0.1:3000/getSolves", "", reader)
	var getSolvesResponse GetSolvesResponse
	unmarshal(res.Body, &getSolvesResponse)

	// Set the ids to 0 so we can compare the rest of the solves
	getSolvesResponse.Solves[0].Id = 0
	getSolvesResponse.Solves[1].Id = 0
	getSolvesResponse.Solves[2].Id = 0

	solves := []Solve{mockSolve, mockSolve, mockSolve}
	assert.True(t, getSolvesResponse.Success)
	assert.Equal(t, solves, getSolvesResponse.Solves)
}

// func TestWriteAndGetTrainingAlgs(t *testing.T) {
// 	mockTrainingAlgs := []TrainingAlg{
// 		{0, "F R U R' U' F'"},
// 		{1, "R U R' U R U2 R'"},
// 		{2, "R U' L' U R' U' L"},
// 	}

// 	reader, err := readJson(WriteTrainingAlgsRequest{0, "CMLL", mockTrainingAlgs})
// 	_, err = http.Post("http://localhost:3000/writeTrainingAlgs", "", reader)
// 	if err != nil {
// 		t.Errorf("POST failed\n")
// 		return
// 	}

// 	reader, err = readJson(GetTrainingAlgsRequest{0, "CMLL"})
// 	res, err := http.Post("http://localhost:3000/getTrainingAlgs", "", reader)
// 	if err != nil {
// 		t.Errorf("POST failed\n")
// 		return
// 	}

// 	var getTrainingAlgsResponse GetTrainingAlgsResponse
// 	unmarshal(res.Body, &getTrainingAlgsResponse)
// 	assert.Equal(t, mockTrainingAlgs, getTrainingAlgsResponse.TrainingAlgs)
// }
