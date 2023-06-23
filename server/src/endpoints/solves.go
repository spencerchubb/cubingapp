package endpoints

import (
	"net/http"

	"server/src/db"

	types "server/src/types"
	util "server/src/util"
)

func CreateSolve(r *http.Request, uid int) (interface{}, error) {
	var solve types.Solve
	err := util.Unmarshal(r.Body, &solve)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	return db.CreateSolve(uid, solve)
}

func ReadSolve(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	return db.ReadSolve(uid, req.Id)
}

func ReadSolves(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		SessionId int `json:"sessionId"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	return db.ReadSolves(uid, req.SessionId)
}

func DeleteSolve(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.DeleteSolve(uid, req.Id)
	return nil, err
}
