package db

import (
	"context"
	"server/src/types"
)

func (db DB) CreateAlgSet(uid int, algSet types.AlgSet) (int, error) {
	sql := `
	insert into alg_sets (uid, set, training_algs, puzzle, inactive_stickers, disregard, only_orientation, updated) 
	values ($1, $2, $3, $4, $5, $6, $7, now()) 
	returning id;`
	row := db.Conn.QueryRow(context.Background(), sql, uid, algSet.Name, algSet.TrainingAlgs, algSet.Puzzle, algSet.Inactive, algSet.Disregard, algSet.OnlyOrientation)
	var id int
	err := row.Scan(&id)
	return id, err
}

func (db DB) ReadAlgSet(uid int, id int) (types.AlgSet, error) {
	sql := `
	select id, set, training_algs, puzzle, inactive_stickers, disregard, only_orientation from alg_sets 
	where uid = $1 and id = $2;`
	row := db.Conn.QueryRow(context.Background(), sql, uid, id)
	var algSet types.AlgSet
	err := row.Scan(&algSet.Id, &algSet.Name, &algSet.TrainingAlgs, &algSet.Puzzle, &algSet.Inactive, &algSet.Disregard, &algSet.OnlyOrientation)
	return algSet, err
}

func (db DB) ReadRecentAlgSet(uid int) (types.AlgSet, error) {
	sql := `
	select id, set, training_algs, puzzle, inactive_stickers, disregard, only_orientation from alg_sets 
	where uid = $1 and deleted is null
	order by updated
	limit 1;`
	row := db.Conn.QueryRow(context.Background(), sql, uid)
	var algSet types.AlgSet
	err := row.Scan(&algSet.Id, &algSet.Name, &algSet.TrainingAlgs, &algSet.Puzzle, &algSet.Inactive, &algSet.Disregard, &algSet.OnlyOrientation)
	if err != nil {
		return types.AlgSet{}, err
	}

	// Set 'updated' to now() so it will be sorted to top of list.
	sql = `
	update alg_sets
	set updated = now()
	where id = $1;`
	_, err = db.Conn.Exec(context.Background(), sql, algSet.Id)
	if err != nil {
		return types.AlgSet{}, err
	}

	return algSet, err
}

func (db DB) ReadAlgSets(uid int) ([]types.AlgSet, error) {
	sql := `
	select id, "set" from alg_sets
	where uid = $1 and deleted is null
	order by updated;`
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

func (db DB) UpdateAlgSet(uid int, id int, set string, trainingAlgs []types.TrainingAlg) error {
	sql := `
	update alg_sets
	set "set" = $3, training_algs = $4, updated = now()
	where uid = $1 and id = $2;
	`
	_, err := db.Conn.Exec(context.Background(), sql, uid, id, set, trainingAlgs)
	return err
}

func (db DB) DeleteAlgSet(uid int, id int) error {
	sql := `
	update alg_sets
	set "deleted" = now()
	where uid = $1 and id = $2;
	`
	_, err := db.Conn.Exec(context.Background(), sql, uid, id)
	return err
}
