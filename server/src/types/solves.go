package types

type Move struct {
	Move string  `json:"move"`
	Time float32 `json:"time"`
}

type Solve struct {
	Id        int     `json:"id"`
	Time      float32 `json:"time"`
	Scramble  string  `json:"scramble"`
	Moves     string  `json:"moves"`
	Puzzle    string  `json:"puzzle"`
	SessionId int     `json:"sessionId"`
}
