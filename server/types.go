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
	Moves           []int    `json:"moves"`
	Disregard       []int    `json:"disregard"`
	OnlyOrientation []int    `json:"onlyOrientation"`
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
	SetName string `json:"setName"`
	Alg     string `json:"alg"`
}

type GetScrambleResponse struct {
	Err      string `json:"err"`
	Scramble string `json:"scramble"`
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
	AlgSet           AlgSet        `json:"algSet"`
}

type UserRequest struct {
	Email string `json:"email"`
}

type UserResponse struct {
	Success bool `json:"success"`
	Uid     int  `json:"uid"`
}
