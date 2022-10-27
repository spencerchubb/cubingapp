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

type GenericResponse struct {
	Success bool
}

type SolveRecord struct {
	Id    int
	Solve Solve
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

type GetTrainingAlgsRequest struct {
	Uid int
	Set string
}

type GetTrainingAlgsResponse struct {
	Success            bool
	Id                 int
	TrainingAlgsRecord TrainingAlgsRecord
}
