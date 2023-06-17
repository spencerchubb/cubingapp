package types

type Session struct {
	Id      int    `json:"id"`
	Uid     int    `json:"uid"`
	Name    string `json:"name"`
	Updated string `json:"updated"`
}
