package endpoints

import (
	"fmt"
	"net/http"
	"server/src/db"
	types "server/src/types"
	util "server/src/util"
)

func CreateSession(r *http.Request) (interface{}, error) {
	var session types.Session
	err := util.Unmarshal(r.Body, &session)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	return db.CreateSession(session)
}

func ReadSessions(r *http.Request) (interface{}, error) {
	type Request struct {
		Uid int `json:"uid"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	db := db.GetDB()
	return db.ReadSessions(req.Uid)
}

func UpdateSession(r *http.Request) (interface{}, error) {
	var session types.Session
	err := util.Unmarshal(r.Body, &session)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.UpdateSession(session)
	return nil, err
}

func DeleteSession(r *http.Request) (interface{}, error) {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.DeleteSession(req.Id)
	return nil, err
}
