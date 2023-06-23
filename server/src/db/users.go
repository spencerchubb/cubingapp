package db

import (
	"context"
)

func (db DB) GetUID(email string) (int, error) {
	// Check if user exists
	sql := "SELECT uid FROM users WHERE email = $1"
	row := db.Conn.QueryRow(context.Background(), sql, email)

	var uid int
	err := row.Scan(&uid)
	if err != nil {
		// User doesn't exist, so create it
		sql = "INSERT INTO users (email) VALUES ($1) RETURNING uid"
		row = db.Conn.QueryRow(context.Background(), sql, email)
		err := row.Scan(&uid)
		if err != nil {
			return -1, err
		}
	}
	return uid, nil
}
