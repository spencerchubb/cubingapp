package db

import (
	"context"
	"fmt"
	"server/src/types"
)

func (db DB) CreateSolve(solve types.Solve) (int, error) {
	sql := "INSERT INTO solves (uid, time, scramble, moves, puzzle, session_id) VALUES ($1, $2, $3, $4) RETURNING id;"
	row := db.Conn.QueryRow(context.Background(), sql, solve.Uid, solve.Time, solve.Scramble, solve.Moves, solve.Puzzle, solve.SessionId)
	var id int
	err := row.Scan(&id)
	if err != nil {
		return -1, fmt.Errorf("CreateSolve Scan failed: %w", err)
	}
	return id, nil
}

func (db DB) ReadSolve(id int) (types.Solve, error) {
	sql := "SELECT id, uid, time, scramble, moves, puzzle FROM solves WHERE id = $1;"
	row := db.Conn.QueryRow(context.Background(), sql, id)
	var solve types.Solve
	err := row.Scan(&solve.Id, &solve.Uid, &solve.Time, &solve.Scramble, &solve.Moves, &solve.Puzzle)
	if err != nil {
		return solve, fmt.Errorf("ReadSolve Scan failed: %w", err)
	}
	return solve, nil
}

func (db DB) ReadSolves(sessionId int) ([]types.Solve, error) {
	sql := `
	SELECT id, time
	FROM solves 
	WHERE session_id = $1
	ORDER BY timestamp ASC;`
	rows, err := db.Conn.Query(context.Background(), sql, sessionId)
	if err != nil {
		return nil, fmt.Errorf("ReadSolves Query failed: %w", err)
	}
	defer rows.Close()

	var solves []types.Solve
	for rows.Next() {
		var solve types.Solve
		err := rows.Scan(&solve.Id, &solve.Time)
		if err != nil {
			return nil, fmt.Errorf("GetSolves Scan failed: %w", err)
		}
		solves = append(solves, solve)
	}
	return solves, nil
}

func (db DB) DeleteSolve(uid int) error {
	sql := "DELETE FROM solves WHERE id = $1;"
	_, err := db.Conn.Exec(context.Background(), sql, uid)
	if err != nil {
		return fmt.Errorf("DeleteSolve Exec failed: %w", err)
	}
	return nil
}
