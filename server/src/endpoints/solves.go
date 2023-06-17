package endpoints

import (
	"net/http"

	"server/src/db"

	types "server/src/types"
	util "server/src/util"
)

func CreateSolve(r *http.Request) interface{} {
	var solve types.Solve
	err := util.Unmarshal(r.Body, &solve)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	id, err := db.CreateSolve(solve)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true, "id": id}
}

func ReadSolve(r *http.Request) interface{} {
	type Request struct {
		SolveId int `json:"solveId"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	solve, err := db.ReadSolve(req.SolveId)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return solve
}

func ReadSolves(r *http.Request) interface{} {
	type Request struct {
		Uid       int `json:"uid"`
		SessionId int `json:"sessionId"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	solves, err := db.ReadSolves(req.Uid)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return solves
}

func UpdateSolve(r *http.Request) interface{} {
	var solve types.Solve
	err := util.Unmarshal(r.Body, &solve)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	err = db.UpdateSolve(solve)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true}
}

func DeleteSolve(r *http.Request) interface{} {
	type Request struct {
		SolveId int `json:"solveId"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	err = db.DeleteSolve(req.SolveId)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true}
}
