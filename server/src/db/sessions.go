package db

import (
	"context"
	"fmt"
	"server/src/types"
)

func (db DB) CreateSession(session types.Session) (int, error) {
	sql := "insert into sessions (uid, name, updated) values ($1, $2, now()) returning id;"
	row := db.Conn.QueryRow(context.Background(), sql, session.Uid, session.Name)
	var id int
	err := row.Scan(&id)
	if err != nil {
		return -1, fmt.Errorf("CreateSession Scan failed: %w", err)
	}
	return id, nil
}

func (db DB) ReadSessions(uid int) ([]types.Session, error) {
	sql := "select id, uid, name from sessions where uid = $1 and deleted is null order by updated desc;"
	rows, err := db.Conn.Query(context.Background(), sql, uid)
	if err != nil {
		return []types.Session{}, fmt.Errorf("ReadSessions Query failed: %w", err)
	}
	defer rows.Close()

	var sessions []types.Session
	for rows.Next() {
		var session types.Session
		err := rows.Scan(&session.Id, &session.Uid, &session.Name)
		if err != nil {
			return []types.Session{}, fmt.Errorf("ReadSessions Scan failed: %w", err)
		}
		sessions = append(sessions, session)
	}
	return sessions, nil
}

func (db DB) UpdateSession(session types.Session) error {
	sql := "update sessions set name = $1, updated = now() where uid = $2 and id = $3;"
	_, err := db.Conn.Exec(context.Background(), sql, session.Name, session.Uid, session.Id)
	if err != nil {
		return fmt.Errorf("UpdateSession Exec failed: %w", err)
	}
	return nil
}

func (db DB) DeleteSession(id int) error {
	sql := "update sessions set deleted = now() where id = $1;"
	_, err := db.Conn.Exec(context.Background(), sql, id)
	if err != nil {
		return fmt.Errorf("DeleteSession Exec failed: %w", err)
	}
	return nil
}
