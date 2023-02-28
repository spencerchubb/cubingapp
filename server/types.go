package main

import (
	server "server/src/db"
)

type Solve struct {
	Uid              int
	Time             float32
	InitialCubeState []int
	Moves            []server.Move
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

type GetScrambleRequest struct {
	SetName string `json:"setName"`
	Alg     string `json:"alg"`
}

type GetScrambleResponse struct {
	Err      string `json:"err"`
	Scramble string `json:"scramble"`
}

type GetSolveRequest struct {
	Id int
}

type GetSolvesRequest struct {
	Uid int
}

type TrainingAlgsRecord struct {
	Uid          int
	Set          string
	TrainingAlgs []server.TrainingAlg
}

type CreateTrainingAlgsRequest struct {
	Uid              int                  `json:"uid"`
	Set              string               `json:"set"`
	TrainingAlgs     []server.TrainingAlg `json:"trainingAlgs"`
	Cube             string               `json:"cube"`
	InactiveStickers []int                `json:"inactiveStickers"`
	Moves            string               `json:"moves"`
	Disregard        []int                `json:"disregard"`
	OnlyOrientation  []int                `json:"onlyOrientation"`
}

type CreateTrainingAlgsResponse struct {
	Success bool `json:"success"`
	Id      int  `json:"id"`
}

type UpdateTrainingAlgsRequest struct {
	Id           int                  `json:"id"`
	TrainingAlgs []server.TrainingAlg `json:"trainingAlgs"`
}

type GetTrainingAlgsRequest struct {
	Uid int    `json:"uid"`
	Set string `json:"set"`
}

// Return id if it existed in database, and set id to -1 if it didn't
type GetTrainingAlgsResponse struct {
	Success bool              `json:"success"`
	Id      int               `json:"id"`
	AlgSet  server.AlgSetsRow `json:"algSet"`
}

type UserRequest struct {
	Email string `json:"email"`
}

type UserResponse struct {
	Success bool `json:"success"`
	Uid     int  `json:"uid"`
}
