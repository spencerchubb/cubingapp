package endpoints

import (
	"net/http"
	"server/src/db"
	util "server/src/util"
)

func User(r *http.Request) interface{} {
	type Request struct {
		Email string `json:"email"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	uid, err := db.GetAndSaveUser(req.Email)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true, "uid": uid}
}
