package server

import (
	"context"
	"fmt"
	"time"
)

type TrainingAlg struct {
	Score int
	Alg   string
}

type AlgSetsRow struct {
	Id              int           `json:"id"`
	Uid             int           `json:"uid"`
	Name            string        `json:"name"`
	TrainingAlgs    []TrainingAlg `json:"trainingAlgs"`
	Cube            string        `json:"cube"`
	Inactive        []int         `json:"inactive"`
	Moves           string        `json:"moves"`
	Disregard       []int         `json:"disregard"`
	OnlyOrientation []int         `json:"onlyOrientation"`

	// This is not a database column, but is used for the algs from algs.json
	Algs []string `json:"algs"`
}

func (db DB) CreateAlgSet(uid int, set string, trainingAlgs []TrainingAlg, cube string, inactive []int, moves string, disregard []int, onlyOrientation []int) (int, error) {
	sql := `
	insert into alg_sets (uid, set, training_algs, cube, inactive_stickers, moves, disregard, only_orientation) 
	values ($1, $2, $3, $4, $5, $6, $7, $8) 
	returning id;`
	row := db.Conn.QueryRow(context.Background(), sql, uid, set, trainingAlgs, cube, inactive, moves, disregard, onlyOrientation)
	var id int
	err := row.Scan(&id)
	if err != nil {
		fmt.Println("CreateAlgSet Scan failed:", err)
		return -1, err
	}
	return id, nil
}

func (db DB) DeleteAlgSet(id int) error {
	sql := `
	update alg_sets
	set "deleted" = $2
	where id = $1;
	`
	_, err := db.Conn.Exec(context.Background(), sql, id, time.Now())
	if err != nil {
		fmt.Println(err)
		return err
	}
	return nil
}

func (db DB) GetAlgSet(uid int, set string) (AlgSetsRow, error) {
	sql := `
	select * from alg_sets 
	where uid = $1 and "set" = $2;`
	row := db.Conn.QueryRow(context.Background(), sql, uid, set)
	var algSet AlgSetsRow
	err := row.Scan(&algSet.Id, &algSet.Uid, &algSet.Name, &algSet.TrainingAlgs, &algSet.Cube, &algSet.Inactive, &algSet.Moves, &algSet.Disregard, &algSet.OnlyOrientation)
	if err != nil {
		fmt.Println(err)
		return AlgSetsRow{}, err
	}
	return algSet, nil
}

func (db DB) GetAlgSets(uid int) ([]AlgSetsRow, error) {
	sql := `
	select id, uid, "set", training_algs, cube, inactive_stickers, moves, disregard, only_orientation from alg_sets
	where uid = $1 and deleted is null;`
	rows, err := db.Conn.Query(context.Background(), sql, uid)
	defer rows.Close()
	if err != nil {
		fmt.Println(err)
		return []AlgSetsRow{}, err
	}

	var algSets []AlgSetsRow
	for rows.Next() {
		var algSet AlgSetsRow
		err := rows.Scan(&algSet.Id, &algSet.Uid, &algSet.Name, &algSet.TrainingAlgs, &algSet.Cube, &algSet.Inactive, &algSet.Moves, &algSet.Disregard, &algSet.OnlyOrientation)
		if err != nil {
			fmt.Println(err)
			return []AlgSetsRow{}, err
		}
		algSets = append(algSets, algSet)
	}
	return algSets, nil
}

func (db DB) UpdateAlgSet(id int, set string, trainingAlgs []TrainingAlg) error {
	sql := `
	update alg_sets
	set "set" = $2, training_algs = $3
	where id = $1;
	`
	_, err := db.Conn.Exec(context.Background(), sql, id, set, trainingAlgs)
	if err != nil {
		fmt.Println(err)
		return err
	}
	return nil
}
