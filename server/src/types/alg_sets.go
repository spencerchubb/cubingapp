package types

type AlgSet struct {
	Id           int    `json:"id"`
	Set          string `json:"set"`
	Name         string `json:"name"`
	TrainingAlgs []any  `json:"trainingAlgs"`
	Puzzle       string `json:"puzzle"`

	// Not database columns, but used for loading from algs.json
	Algs     []string `json:"algs"`
	Inactive []int    `json:"inactive"`
	Pre      []string `json:"pre"`
	Post     []string `json:"post"`
}
