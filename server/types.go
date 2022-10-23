package main

type GenericResponse struct {
	Success bool
}

type AddSolveResponse struct {
	Success bool
	Id      int
}

type GetSolveRequest struct {
	Id int
}

type GetSolveResponse struct {
	Success bool
	Solve   Solve
}

type GetSolvesRequest struct {
	Uid int
}

type GetSolvesResponse struct {
	Success bool
	Solves  []Solve
}

type TrainingAlg struct {
	Score int
	Alg   string
}

type WriteTrainingAlgsRequest struct {
	Uid          int
	Set          string
	TrainingAlgs []TrainingAlg
}

type WriteTrainingAlgsResponse struct {
	Success bool
	Id      int
}

type GetTrainingAlgsRequest struct {
	Uid int
	Set string
}

type GetTrainingAlgsResponse struct {
	Success      bool
	Id           int
	Uid          int
	Set          string
	TrainingAlgs []TrainingAlg
}
