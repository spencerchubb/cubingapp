package db

import (
	"context"
	"fmt"
)

func (db DB) GetAndSaveUser(email string) (int, error) {
	// Check if user exists
	sql := "SELECT * FROM users WHERE email = $1"
	row := db.Conn.QueryRow(context.Background(), sql, email)

	type User struct {
		Uid   int    `json:"uid"`
		Email string `json:"email"`
	}
	var user User
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
