package endpoints

import (
	"net/http"
	"server/src/db"
	util "server/src/util"
)

func User(r *http.Request) (interface{}, error) {
	type Request struct {
		Email string `json:"email"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	return db.GetAndSaveUser(req.Email)
}
