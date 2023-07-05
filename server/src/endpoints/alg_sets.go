package endpoints

import (
	"net/http"
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

	algSet, err := getAlgSet(req.Set)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	id, err := db.CreateAlgSet(uid, *algSet)
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

	algSet, err := db.ReadAlgSet(uid, req.Id)
	if err != nil {
		return nil, err
	}

	algSetMetadata, err := getAlgSet(algSet.Set)
	if err != nil {
		return nil, err
	}

	algSet.Inactive = algSetMetadata.Inactive
	algSet.Pre = algSetMetadata.Pre
	algSet.Post = algSetMetadata.Post
	return algSet, err

}

func ReadAlgSets(r *http.Request, uid int) (interface{}, error) {
	db := db.GetDB()
	return db.ReadAlgSets(uid)
}

func UpdateAlgSet(r *http.Request, uid int) (interface{}, error) {
	type Request struct {
		Id           int                 `json:"id"`
		Name         string              `json:"name"`
		TrainingAlgs []types.TrainingAlg `json:"trainingAlgs"`
	}
	var req Request
	err := util.Unmarshal(r.Body, &req)
	if err != nil {
		return nil, err
	}

	db := db.GetDB()
	err = db.UpdateAlgSet(uid, req.Id, req.Name, req.TrainingAlgs)
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

// Helper function for CreatePrebuiltAlgSet
func getAlgSet(setName string) (*types.AlgSet, error) {
	algSets, err := util.Once(func() (*[]types.AlgSet, error) {
		return util.ReadJsonFile[[]types.AlgSet]("../algs/algs.json")
	})()
	if err != nil || algSets == nil {
		return nil, err
	}
	algSet := util.Find(*algSets, func(v types.AlgSet) bool {
		return v.Set == setName
	})
	algSet.TrainingAlgs = util.Map(algSet.Algs, func(alg string) types.TrainingAlg {
		return types.TrainingAlg{Score: 0, Alg: alg}
	})
	algSet.Set = setName
	algSet.Name = setName
	return &algSet, err
}
