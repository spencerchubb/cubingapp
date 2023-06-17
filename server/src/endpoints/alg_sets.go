package endpoints

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"server/src/db"
	types "server/src/types"
	util "server/src/util"
)

func CreateAlgSet(r *http.Request) interface{} {
	var algSet types.AlgSet
	err := util.Unmarshal(r.Body, &algSet)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	id, err := db.CreateAlgSet(algSet)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"id": id}
}

func CreatePrebuiltAlgSet(r *http.Request) interface{} {
	type Request struct {
		Uid int    `json:"uid"`
		Set string `json:"set"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	algs := readAlgsFromJson("../algs/algs.json")
	algSet := findAlgSet(algs, req.Set)
	trainingAlgs := initZeroScores(algSet.Algs)

	db := db.GetDB()
	id, err := db.CreateAlgSet(algSet)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	algSet.TrainingAlgs = trainingAlgs
	algSet.Id = id
	return algSet
}

// If Set="", return the most recent alg set.
func ReadAlgSet(r *http.Request) interface{} {
	type Request struct {
		Uid int    `json:"uid"`
		Set string `json:"set"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	var row types.AlgSet
	if req.Set == "" {
		row, err = db.ReadRecentAlgSet(req.Uid)
	} else {
		row, err = db.ReadAlgSet(req.Uid, req.Set)
	}
	if err != nil {
		return map[string]interface{}{"success": false}
	}
	return row
}

func ReadAlgSets(r *http.Request) interface{} {
	type Request struct {
		Uid int `json:"uid"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	rows, err := db.ReadAlgSets(req.Uid)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return rows
}

func UpdateAlgSet(r *http.Request) interface{} {
	type Request struct {
		Id           int                 `json:"id"`
		Set          string              `json:"set"`
		TrainingAlgs []types.TrainingAlg `json:"trainingAlgs"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	err = db.UpdateAlgSet(req.Id, req.Set, req.TrainingAlgs)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true}
}

func DeleteAlgSet(r *http.Request) interface{} {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	db := db.GetDB()
	err = db.DeleteAlgSet(req.Id)
	if err != nil {
		return map[string]interface{}{"success": false}
	}

	return map[string]interface{}{"success": true}
}

// Helper functions for CreatePrebuiltAlgSet

func readAlgsFromJson(fileName string) []types.AlgSet {
	file, err := os.Open(fileName)
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []types.AlgSet{}
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	var algSets []types.AlgSet
	err = decoder.Decode(&algSets)
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []types.AlgSet{}
	}

	return algSets
}

func findAlgSet(algSets []types.AlgSet, setName string) types.AlgSet {
	for _, algSet := range algSets {
		if algSet.Name == setName {
			return algSet
		}
	}
	return types.AlgSet{}
}

func initZeroScores(algs []string) []types.TrainingAlg {
	out := make([]types.TrainingAlg, len(algs))
	for i, alg := range algs {
		out[i] = types.TrainingAlg{Score: 0, Alg: alg}
	}
	return out
}
