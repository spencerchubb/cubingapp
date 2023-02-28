package server

import (
	"context"
	"fmt"
	"time"
)

type Move struct {
	Move string  `json:"move"`
	Time float32 `json:"time"`
}

type SolvesRow struct {
	Id               int       `json:"id"`
	Uid              int       `json:"uid"`
	Timestamp        time.Time `json:"timestamp"`
	Time             float32   `json:"time"`
	InitialCubeState []int     `json:"initialCubeState"`
	Moves            []Move    `json:"moves"`
}

func (db DB) AddSolve(uid int, time float32, initialCubeState []int, moves []Move) (int, error) {
	sql := "INSERT INTO solves (uid, time, initialCubeState, moves) VALUES ($1, $2, $3, $4) RETURNING id"
	row := db.Conn.QueryRow(context.Background(), sql, uid, time, initialCubeState, moves)
	var id int
	err := row.Scan(&id)
	if err != nil {
		return -1, fmt.Errorf("AddSolve Scan failed: %w", err)
	}
	return id, nil
}

func (db DB) GetSolve(id int) (SolvesRow, error) {
	sql := "SELECT * FROM solves WHERE id = $1"
	row := db.Conn.QueryRow(context.Background(), sql, id)
	var solve SolvesRow
	err := row.Scan(&solve.Id, &solve.Uid, &solve.Timestamp, &solve.Time, &solve.InitialCubeState, &solve.Moves)
	if err != nil {
		return solve, fmt.Errorf("GetSolve Scan failed: %w", err)
	}
	return solve, nil
}

func (db DB) GetSolves(uid int) ([]SolvesRow, error) {
	sql := "SELECT * FROM solves WHERE uid = $1 ORDER BY timestamp ASC"
	rows, err := db.Conn.Query(context.Background(), sql, uid)
	defer rows.Close()
	if err != nil {
		return nil, fmt.Errorf("GetSolves Query failed: %w", err)
	}

	var solves []SolvesRow
	for rows.Next() {
		var solve SolvesRow
		err := rows.Scan(&solve.Id, &solve.Uid, &solve.Timestamp, &solve.Time, &solve.InitialCubeState, &solve.Moves)
		if err != nil {
			return nil, fmt.Errorf("GetSolves Scan failed: %w", err)
		}
		solves = append(solves, solve)
	}
	return solves, nil
}
