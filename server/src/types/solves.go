package types

type Move struct {
	Move string  `json:"move"`
	Time float32 `json:"time"`
}

type Solve struct {
	Id               int     `json:"id"`
	Uid              int     `json:"uid"`
	Time             float32 `json:"time"`
	InitialCubeState []int   `json:"initialCubeState"`
	Moves            []Move  `json:"moves"`
}
