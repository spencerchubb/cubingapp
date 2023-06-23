package db

import (
	"context"
	"server/src/types"
)

func (db DB) CreateSession(uid int, name string) (int, error) {
	sql := "insert into sessions (uid, name, updated) values ($1, $2, now()) returning id;"
	row := db.Conn.QueryRow(context.Background(), sql, uid, name)
	var id int
	err := row.Scan(&id)
	return id, err
}

func (db DB) ReadSessions(uid int) ([]types.Session, error) {
	sql := "select id, name from sessions where uid = $1 and deleted is null order by updated desc;"
	rows, err := db.Conn.Query(context.Background(), sql, uid)
	if err != nil {
		return []types.Session{}, err
	}
	defer rows.Close()

	var sessions []types.Session
	for rows.Next() {
		var session types.Session
		err := rows.Scan(&session.Id, &session.Name)
		if err != nil {
			return []types.Session{}, err
		}
		sessions = append(sessions, session)
	}
	return sessions, nil
}

func (db DB) UpdateSession(uid int, session types.Session) error {
	sql := "update sessions set name = $1, updated = now() where id = $2 and uid = $3;"
	_, err := db.Conn.Exec(context.Background(), sql, session.Name, session.Id, uid)
	return err
}

func (db DB) DeleteSession(uid int, id int) error {
	sql := "update sessions set deleted = now() where uid = $1 and id = $2;"
	_, err := db.Conn.Exec(context.Background(), sql, uid, id)
	return err
}
