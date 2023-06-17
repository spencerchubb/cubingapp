package db

import (
	"context"
	"server/src/types"
	"time"
)

func (db DB) CreateAlgSet(algSet types.AlgSet) (int, error) {
	sql := `
	insert into alg_sets (uid, set, training_algs, puzzle, inactive_stickers, disregard, only_orientation, updated) 
	values ($1, $2, $3, $4, $5, $6, $7, now()) 
	returning id;`
	row := db.Conn.QueryRow(context.Background(), sql, algSet.Uid, algSet.Name, algSet.TrainingAlgs, algSet.Puzzle, algSet.Inactive, algSet.Disregard, algSet.OnlyOrientation)
	var id int
	err := row.Scan(&id)
	return id, err
}

func (db DB) ReadAlgSet(uid int, set string) (types.AlgSet, error) {
	sql := `
	select id, uid, set, training_algs, puzzle, inactive_stickers, disregard, only_orientation from alg_sets 
	where uid = $1 and set = $2;`
	row := db.Conn.QueryRow(context.Background(), sql, uid, set)
	var algSet types.AlgSet
	err := row.Scan(&algSet.Id, &algSet.Uid, &algSet.Name, &algSet.TrainingAlgs, &algSet.Puzzle, &algSet.Inactive, &algSet.Disregard, &algSet.OnlyOrientation)
	return algSet, err
}

func (db DB) ReadRecentAlgSet(uid int) (types.AlgSet, error) {
	sql := `
	select id, uid, set, training_algs, puzzle, inactive_stickers, disregard, only_orientation from alg_sets 
	where uid = $1 and deleted is null
	order by updated desc
	limit 1;`
	row := db.Conn.QueryRow(context.Background(), sql, uid)
	var algSet types.AlgSet
	err := row.Scan(&algSet.Id, &algSet.Uid, &algSet.Name, &algSet.TrainingAlgs, &algSet.Puzzle, &algSet.Inactive, &algSet.Disregard, &algSet.OnlyOrientation)
	return algSet, err
}

func (db DB) ReadAlgSets(uid int) ([]types.AlgSet, error) {
	sql := `
	select id, "set" from alg_sets
	where uid = $1 and deleted is null;`
	rows, err := db.Conn.Query(context.Background(), sql, uid)
	if err != nil {
		return []types.AlgSet{}, err
	}
	defer rows.Close()

	var algSets []types.AlgSet
	for rows.Next() {
		var algSet types.AlgSet
		err := rows.Scan(&algSet.Id, &algSet.Name)
		if err != nil {
			return []types.AlgSet{}, err
		}
		algSets = append(algSets, algSet)
	}
	return algSets, nil
}

func (db DB) UpdateAlgSet(id int, set string, trainingAlgs []types.TrainingAlg) error {
	sql := `
	update alg_sets
	set "set" = $2, training_algs = $3, updated = now()
	where id = $1;
	`
	_, err := db.Conn.Exec(context.Background(), sql, id, set, trainingAlgs)
	return err
}

func (db DB) DeleteAlgSet(id int) error {
	sql := `
	update alg_sets
	set "deleted" = $2
	where id = $1;
	`
	_, err := db.Conn.Exec(context.Background(), sql, id, time.Now())
	return err
}
