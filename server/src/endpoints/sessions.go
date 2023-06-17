package endpoints

import (
	"fmt"
	"net/http"
	"server/src/db"
	types "server/src/types"
	util "server/src/util"
)

func CreateSession(r *http.Request) interface{} {
	var session types.Session
	err := util.Unmarshal(r.Body, &session)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	id, err := db.CreateSession(session)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"id": id}
}

func ReadSessions(r *http.Request) interface{} {
	type Request struct {
		Uid int `json:"uid"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		fmt.Println(err)
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	sessions, err := db.ReadSessions(req.Uid)
	if err != nil {
		fmt.Println(err)
		return map[string]interface{}{"success": false}
	}

	return sessions
}

func UpdateSession(r *http.Request) interface{} {
	var session types.Session
	err := util.Unmarshal(r.Body, &session)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	err = db.UpdateSession(session)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true}
}

func DeleteSession(r *http.Request) interface{} {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	err = db.DeleteSession(req.Id)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true}
}
