package main

import (
	"bytes"
	"context"
	"encoding/json"
	"net/http"
	"testing"

	"github.com/jackc/pgx/v5"
	"github.com/stretchr/testify/assert"
)

func connect(t *testing.T) (*pgx.Conn, error) {
	conn, err := pgx.Connect(context.Background(), pgUrl())
	if err != nil {
		t.Errorf("Unable to connect to database: %v\n", err)
	}
	return conn, err
}

func readJson(v any) (*bytes.Reader, error) {
	byteSlice, err := json.Marshal(v)
	if err != nil {
		return nil, err
	}
	return bytes.NewReader(byteSlice), nil
}

func post(t *testing.T, url string, v any) (*http.Response, error) {
	reader, err := readJson(v)
	if err != nil {
		t.Errorf("Unable to read json: %v\n", err)
		return nil, err
	}
	res, err := http.Post(url, "", reader)
	if err != nil {
		t.Errorf("POST failed\n")
	}
	return res, err
}

func TestGetSolve(t *testing.T) {
	conn, err := connect(t)
	if err != nil {
		return
	}
	defer conn.Close(context.Background())

	conn.Exec(context.Background(), "delete from solves;")

	id := 0
	mockSolve := Solve{
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
	_, err = conn.Exec(context.Background(), sql, id, mockSolve.Uid, mockSolve.Time, mockSolve.InitialCubeState, mockSolve.Moves)
	if err != nil {
		return
	}

	res, err := post(t, "http://127.0.0.1:3000/getSolve", GetSolveRequest{id})
	if err != nil {
		return
	}

	var getSolveResponse GetSolveResponse
	unmarshal(res.Body, &getSolveResponse)
	assert.Equal(t, mockSolve, getSolveResponse.SolveRecord.Solve)
}

func TestAddAndGetSolves(t *testing.T) {
	conn, err := connect(t)
	if err != nil {
		return
	}
	defer conn.Close(context.Background())

	conn.Exec(context.Background(), "delete from solves;")

	mockSolve := Solve{
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
		res, err := post(t, "http://127.0.0.1:3000/addSolve", mockSolve)
		if err != nil {
			return
		}

		var response GenericResponse
		unmarshal(res.Body, &response)
		assert.True(t, response.Success)
	}

	res, err := post(t, "http://127.0.0.1:3000/getSolves", GetSolvesRequest{2})
	if err != nil {
		return
	}
	var getSolvesResponse GetSolvesResponse
	unmarshal(res.Body, &getSolvesResponse)
	assert.True(t, getSolvesResponse.Success) 

	for i := 0; i < 3; i++ {
		assert.Equal(t, mockSolve, getSolvesResponse.SolveRecords[i].Solve)
	}
}

func TestTrainingAlgs(t *testing.T) {
	conn, err := connect(t)
	if err != nil {
		return
	}
	defer conn.Close(context.Background())

	conn.Exec(context.Background(), "delete from training_algs;")

	mockTrainingAlgsRecord := TrainingAlgsRecord{
		2,
		"CMLL",
		[]TrainingAlg{
			{3, "R U R' U R U2 R'"},
			{2, "F R U R' U' F'"},
		},
	}

	res, err := post(t, "http://127.0.0.1:3000/writeTrainingAlgs", mockTrainingAlgsRecord)
	if err != nil {
		return 
	}

	var response GenericResponse
	unmarshal(res.Body, &response)
	assert.True(t, response.Success)

	res, err = post(t, "http://127.0.0.1:3000/getTrainingAlgs", GetTrainingAlgsRequest{2, "CMLL"})
	if err != nil {
		return
	}

	var getTrainingAlgsResponse GetTrainingAlgsResponse
	unmarshal(res.Body, &getTrainingAlgsResponse)
	assert.True(t, getTrainingAlgsResponse.Success)
	assert.Equal(t, mockTrainingAlgsRecord, getTrainingAlgsResponse.TrainingAlgsRecord)
}

func TestUser(t *testing.T) {
	conn, err := connect(t)
	if err != nil {
		return
	}
	defer conn.Close(context.Background())

	conn.Exec(context.Background(), "delete from users;")

	res, err := post(t, "http://127.0.0.1:3000/user", UserRequest{"example@gmail.com"})
	if err != nil {
		return 
	}

	var response UserResponse
	unmarshal(res.Body, &response)
	assert.True(t, response.Success)

	res, err = post(t, "http://127.0.0.1:3000/user", UserRequest{"example@gmail.com"})
	if err != nil {
		return
	}

	var response1 UserResponse
	unmarshal(res.Body, &response1)
	assert.True(t, response1.Success)
	assert.Equal(t, response.Uid, response1.Uid)
}