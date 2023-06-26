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

func CreateAlgSet(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Set string `json:"set"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	algs := readAlgsFromJson("../algs/algs.json")
	algSet := findAlgSet(algs, req.Set)
	trainingAlgs := initZeroScores(algSet.Algs)
	algSet.Name = req.Set
	algSet.TrainingAlgs = trainingAlgs

	db := db.GetDB()
	id, err := db.CreateAlgSet(uid, algSet)
	algSet.Id = id
	return algSet, err
}

// If Id=0, return the most recent alg set.
func ReadAlgSet(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	if req.Id == 0 {
		return db.ReadRecentAlgSet(uid)
	}
	return db.ReadAlgSet(uid, req.Id)
}

func ReadAlgSets(r *http.Request, uid int) (interface{}, error) {
	db := db.GetDB()
	return db.ReadAlgSets(uid)
}

func UpdateAlgSet(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Id           int                 `json:"id"`
		Set          string              `json:"set"`
		TrainingAlgs []types.TrainingAlg `json:"trainingAlgs"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.UpdateAlgSet(uid, req.Id, req.Set, req.TrainingAlgs)
	return nil, err
}

func DeleteAlgSet(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Id int `json:"id"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.DeleteAlgSet(uid, req.Id)
	return nil, err
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
