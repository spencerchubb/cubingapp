package types

type TrainingAlg struct {
	Score int
	Alg   string
}

type AlgSet struct {
	Id              int           `json:"id"`
	Uid             int           `json:"uid"`
	Name            string        `json:"name"`
	TrainingAlgs    []TrainingAlg `json:"trainingAlgs"`
	Cube            string        `json:"cube"`
	Inactive        []int         `json:"inactive"`
	Moves           string        `json:"moves"`
	Disregard       []int         `json:"disregard"`
	OnlyOrientation []int         `json:"onlyOrientation"`

	// This is not a database column, but is used for the algs from algs.json
	Algs []string `json:"algs"`
}
