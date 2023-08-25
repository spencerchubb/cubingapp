package db

import (
	"context"
	"server/src/types"
)

func (db DB) CreateAlgSet(uid int, algSet types.AlgSet) (int, error) {
	sql := `
	insert into alg_sets (uid, set, name, training_algs, updated) 
	values ($1, $2, $3, $4, now()) 
	returning id;`
	row := db.Conn.QueryRow(context.Background(), sql, uid, algSet.Set, algSet.Set, algSet.TrainingAlgs)
	var id int
	err := row.Scan(&id)
	return id, err
}

func (db DB) ReadAlgSet(uid int, id int) (types.AlgSet, error) {
	sql := `
	select id, set, training_algs, name from alg_sets 
	where uid = $1 and id = $2;`
	row := db.Conn.QueryRow(context.Background(), sql, uid, id)
	var algSet types.AlgSet
	err := row.Scan(&algSet.Id, &algSet.Set, &algSet.TrainingAlgs, &algSet.Name)
	return algSet, err
}

func (db DB) ReadAlgSets(uid int) ([]types.AlgSet, error) {
	sql := `
	select id, name from alg_sets
	where uid = $1 and deleted is null
	order by updated desc;`
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

func (db DB) ReadDeletedAlgSets(uid int) ([]types.AlgSet, error) {
	sql := `
	select id, name from alg_sets
	where uid = $1 and deleted is not null
	order by deleted desc;`
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

func (db DB) UpdateAlgSet(uid int, id int, name string, trainingAlgs []any) error {
	sql := `
	update alg_sets
	set
		name = coalesce($3, name),
		training_algs = coalesce($4, training_algs),
		updated = now()
	where uid = $1 and id = $2;`
	_, err := db.Conn.Exec(context.Background(), sql, uid, id, name, trainingAlgs)
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

func (db DB) DeleteAlgSetPermanently(uid int, id int) error {
	sql := `
	delete from alg_sets
	where uid = $1 and id = $2;
	`
	_, err := db.Conn.Exec(context.Background(), sql, uid, id)
	return err
}

func (db DB) RestoreAlgSet(uid int, id int) error {
	sql := `
	update alg_sets
	set "deleted" = null
	where uid = $1 and id = $2;
	`
	_, err := db.Conn.Exec(context.Background(), sql, uid, id)
	return err
}
