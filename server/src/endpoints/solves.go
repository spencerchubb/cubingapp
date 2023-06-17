package endpoints

import (
	"net/http"

	"server/src/db"

	types "server/src/types"
	util "server/src/util"
)

func CreateSolve(r *http.Request) (interface{}, error) {
	var solve types.Solve
	err := util.Unmarshal(r.Body, &solve)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	id, err := db.CreateSolve(solve)
	return map[string]interface{}{"id": id}, err
}

func ReadSolve(r *http.Request) (interface{}, error) {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	return db.ReadSolve(req.Id)
}

func ReadSolves(r *http.Request) (interface{}, error) {
	type Request struct {
		SessionId int `json:"sessionId"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	return db.ReadSolves(req.SessionId)
}

func DeleteSolve(r *http.Request) (interface{}, error) {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.DeleteSolve(req.Id)
	return nil, err
}
