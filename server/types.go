package main

type Move struct {
	Move string
	Time float32
}

type Solve struct {
	Uid              int
	Time             float32
	InitialCubeState []int
	Moves            []Move
}

type AlgSet struct {
	Cube            string   `json:"cube"`
	Name            string   `json:"name"`
	Inactive        []int    `json:"inactive"`
	OnlyOrientation []int    `json:"onlyOrientation"`
	Disregard       []int    `json:"disregard"`
	Algs            []string `json:"algs"`
}

type Scrambles struct {
	Alg       string   `json:"alg"`
	Scrambles []string `json:"scrambles"`
}

type SetScrambles struct {
	SetName   string      `json:"setName"`
	Scrambles []Scrambles `json:"scrambles"`
}

type GenericResponse struct {
	Success bool `json:"success"`
}

type SolveRecord struct {
	Id    int
	Solve Solve
}

type GetScrambleRequest struct {
	SetName string
	Alg     string
}

type GetScrambleResponse struct {
	Success  bool
	Scramble string
}

type AddSolveResponse struct {
	Success bool
	Id      int
}

type GetSolveRequest struct {
	Id int
}

type GetSolveResponse struct {
	Success     bool
	SolveRecord SolveRecord
}

type GetSolvesRequest struct {
	Uid int
}

type GetSolvesResponse struct {
	Success      bool
	SolveRecords []SolveRecord
}

type TrainingAlg struct {
	Score int
	Alg   string
}

type TrainingAlgsRecord struct {
	Uid          int
	Set          string
	TrainingAlgs []TrainingAlg
}

type CreateTrainingAlgsRequest struct {
	Uid              int           `json:"uid"`
	Set              string        `json:"set"`
	TrainingAlgs     []TrainingAlg `json:"trainingAlgs"`
	Cube             string        `json:"cube"`
	InactiveStickers []int         `json:"inactiveStickers"`
}

type CreateTrainingAlgsResponse struct {
	Success bool `json:"success"`
	Id      int  `json:"id"`
}

type UpdateTrainingAlgsRequest struct {
	Id           int           `json:"id"`
	TrainingAlgs []TrainingAlg `json:"trainingAlgs"`
}

type GetTrainingAlgsRequest struct {
	Uid int    `json:"uid"`
	Set string `json:"set"`
}

// Return id if it existed in database, and set id to -1 if it didn't
type GetTrainingAlgsResponse struct {
	Success          bool          `json:"success"`
	Id               int           `json:"id"`
	TrainingAlgs     []TrainingAlg `json:"trainingAlgs"`
	Cube             string        `json:"cube"`
	InactiveStickers []int         `json:"inactiveStickers"`
}

type UserRequest struct {
	Email string
}

type UserResponse struct {
	Success bool
	Uid     int
}
