package server

import (
	"context"
	"fmt"
)

type usersRecord struct {
	Uid   int    `json:"uid"`
	Email string `json:"email"`
}

func (db DB) GetAndSaveUser(email string) (int, error) {
	// Check if user exists
	sql := "SELECT * FROM users WHERE email = $1"
	row := db.Conn.QueryRow(context.Background(), sql, email)
	var user usersRecord
	err := row.Scan(&user.Uid, &user.Email)
	if err != nil {
		// User doesn't exist, so create it
		sql = "INSERT INTO users (email) VALUES ($1) RETURNING uid"
		row = db.Conn.QueryRow(context.Background(), sql, email)
		err := row.Scan(&user.Uid)
		if err != nil {
			return -1, fmt.Errorf("GetAndSaveUser Scan failed: %w", err)
		}
	}
	return user.Uid, nil
}
