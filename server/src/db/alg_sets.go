package db

import (
	"context"
	"fmt"
	"server/src/types"
	"time"
)

func (db DB) CreateAlgSet(algSet types.AlgSet) (int, error) {
	sql := `
	insert into alg_sets (uid, set, training_algs, cube, inactive_stickers, moves, disregard, only_orientation) 
	values ($1, $2, $3, $4, $5, $6, $7, $8) 
	returning id;`
	row := db.Conn.QueryRow(context.Background(), sql, algSet.Uid, algSet.Name, algSet.TrainingAlgs, algSet.Cube, algSet.Inactive, algSet.Moves, algSet.Disregard, algSet.OnlyOrientation)
	var id int
	err := row.Scan(&id)
	if err != nil {
		fmt.Println("CreateAlgSet Scan failed:", err)
		return -1, err
	}
	return id, nil
}

func (db DB) ReadAlgSet(uid int, set string) (types.AlgSet, error) {
	sql := `
	select * from alg_sets 
	where uid = $1 and "set" = $2;`
	row := db.Conn.QueryRow(context.Background(), sql, uid, set)
	var algSet types.AlgSet
	err := row.Scan(&algSet.Id, &algSet.Uid, &algSet.Name, &algSet.TrainingAlgs, &algSet.Cube, &algSet.Inactive, &algSet.Moves, &algSet.Disregard, &algSet.OnlyOrientation)
	if err != nil {
		fmt.Println(err)
		return types.AlgSet{}, err
	}
	return algSet, nil
}

func (db DB) ReadAlgSets(uid int) ([]types.AlgSet, error) {
	sql := `
	select id, uid, "set", training_algs, cube, inactive_stickers, moves, disregard, only_orientation from alg_sets
	where uid = $1 and deleted is null;`
	rows, err := db.Conn.Query(context.Background(), sql, uid)
	if err != nil {
		fmt.Println(err)
		return []types.AlgSet{}, err
	}
	defer rows.Close()

	var algSets []types.AlgSet
	for rows.Next() {
		var algSet types.AlgSet
		err := rows.Scan(&algSet.Id, &algSet.Uid, &algSet.Name, &algSet.TrainingAlgs, &algSet.Cube, &algSet.Inactive, &algSet.Moves, &algSet.Disregard, &algSet.OnlyOrientation)
		if err != nil {
			fmt.Println(err)
			return []types.AlgSet{}, err
		}
		algSets = append(algSets, algSet)
	}
	return algSets, nil
}

func (db DB) UpdateAlgSet(id int, set string, trainingAlgs []types.TrainingAlg) error {
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
