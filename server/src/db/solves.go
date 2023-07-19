package db

import (
	"context"
	"server/src/types"
)

func (db DB) CreateSolve(uid int, solve types.Solve) (int, error) {
	sql := "INSERT INTO solves (uid, time, scramble, moves, puzzle, session_id, penalty) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;"
	row := db.Conn.QueryRow(context.Background(), sql, uid, solve.Time, solve.Scramble, solve.Moves, solve.Puzzle, solve.SessionId, solve.Penalty)
	var id int
	err := row.Scan(&id)
	return id, err
}

func (db DB) ReadSolve(uid int, id int) (types.Solve, error) {
	sql := "SELECT id, time, scramble, moves, puzzle FROM solves WHERE uid = $1 and id = $2;"
	row := db.Conn.QueryRow(context.Background(), sql, id)
	var solve types.Solve
	err := row.Scan(&solve.Id, &solve.Time, &solve.Scramble, &solve.Moves, &solve.Puzzle)
	return solve, err
}

func (db DB) ReadSolves(uid int, sessionId int) ([]types.Solve, error) {
	sql := `
	SELECT id, time, penalty
	FROM solves 
	WHERE session_id = $1
	ORDER BY timestamp DESC;`
	rows, err := db.Conn.Query(context.Background(), sql, sessionId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var solves []types.Solve
	for rows.Next() {
		var solve types.Solve
		err := rows.Scan(&solve.Id, &solve.Time, &solve.Penalty)
		if err != nil {
			return nil, err
		}
		solves = append(solves, solve)
	}
	return solves, nil
}

func (db DB) DeleteSolve(uid int, id int) error {
	sql := "DELETE FROM solves WHERE uid = $1 and id = $1;"
	_, err := db.Conn.Exec(context.Background(), sql, uid, id)
	return err
}
