package endpoints

import (
	"net/http"
	"server/src/db"
	types "server/src/types"
	util "server/src/util"
)

func CreateSession(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Name string `json:"name"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	return db.CreateSession(uid, req.Name)
}

func ReadSessions(r *http.Request, uid int) (interface{}, error) {
	db := db.GetDB()
	return db.ReadSessions(uid)
}

func UpdateSession(r *http.Request, uid int) (interface{}, error) {
	var session types.Session
	err := util.Unmarshal(r.Body, &session)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.UpdateSession(uid, session)
	return nil, err
}

func DeleteSession(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.DeleteSession(uid, req.Id)
	return nil, err
}
