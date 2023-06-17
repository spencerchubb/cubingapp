package db

import (
	"github.com/jackc/pgx/v5/pgxpool"
)

type DB struct {
	Conn *pgxpool.Pool
}

var db DB

func GetDB() DB {
	return db
}

func SetupDB(conn *pgxpool.Pool) {
	db = DB{conn}
}
