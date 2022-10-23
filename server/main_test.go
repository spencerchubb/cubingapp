package main

import (
	"bytes"
	"context"
	"encoding/json"
	"net/http"
	"os"
	"testing"

	"github.com/jackc/pgx/v5"
	"github.com/stretchr/testify/assert"
)

func arrayEq[T comparable](arr1 []T, arr2 []T) bool {
	if len(arr1) != len(arr2) {
		return false
	}
	for i := 0; i < len(arr1); i++ {
		if arr1[i] != arr2[i] {
			return false
		}
	}
	return true
}

func readJson(v any) (*bytes.Reader, error) {
	byteSlice, err := json.Marshal(v)
	if err != nil {
		return nil, err
	}
	return bytes.NewReader(byteSlice), nil
}

type Response struct {
	Success bool
}

func TestAddAndGetSolve(t *testing.T) {
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

	var response AddSolveResponse
	unmarshal(res.Body, &response)
	if err != nil {
		t.Errorf("Decode failed\n")
		return
	}

	assert.True(t, response.Success)

	reader, err = readJson(GetSolveRequest{response.Id})
	res, err = http.Post("http://127.0.0.1:3000/getSolve", "", reader)
	if err != nil {
		t.Errorf("POST failed\n")
		return
	}

	var solve Solve
	unmarshal(res.Body, &solve)

	// Set the id to 0 so we can compare the rest of the solve
	solve.Id = 0

	assert.Equal(t, mockSolve, solve)
}

func TestGetSolves(t *testing.T) {
	conn, err := pgx.Connect(context.Background(), pgUrl())
	if err != nil {
		t.Errorf("Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer conn.Close(context.Background())

	conn.Query(context.Background(), "delete from solves;")

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
		_, err = http.Post("http://127.0.0.1:3000/addSolve", "", reader)
		if err != nil {
			t.Errorf("POST failed\n")
			return
		}
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

func TestWriteAndGetTrainingAlgs(t *testing.T) {
	mockTrainingAlgs := []TrainingAlg{
		{0, "F R U R' U' F'"},
		{1, "R U R' U R U2 R'"},
		{2, "R U' L' U R' U' L"},
	}

	reader, err := readJson(WriteTrainingAlgsRequest{0, "CMLL", mockTrainingAlgs})
	_, err = http.Post("http://localhost:3000/writeTrainingAlgs", "", reader)
	if err != nil {
		t.Errorf("POST failed\n")
		return
	}

	reader, err = readJson(GetTrainingAlgsRequest{0, "CMLL"})
	res, err := http.Post("http://localhost:3000/getTrainingAlgs", "", reader)
	if err != nil {
		t.Errorf("POST failed\n")
		return
	}

	var getTrainingAlgsResponse GetTrainingAlgsResponse
	unmarshal(res.Body, &getTrainingAlgsResponse)
	assert.Equal(t, mockTrainingAlgs, getTrainingAlgsResponse.TrainingAlgs)
}
