package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/spencerchubb/solver"
)

func main() {
	algSets := readAlgsFromJson("./algs.json")
	algSet := findAlgSet(algSets, "PLL")
	allScrambles := SetScrambles{SetName: algSet.Name}
	for i, alg := range algSet.Algs {
		fmt.Printf("%d/%d: %s\n", i+1, len(algSet.Algs), alg)
		cube := solver.NewCube()
		solver.PerformAlgorithm(&cube, alg)
		scramblesForAlg := solver.Solve(cube, []int{0, 1, 2, 3, 4, 5, 15, 16, 17}, 10, 10_000, false)
		allScrambles.Scrambles = append(allScrambles.Scrambles, Scrambles{alg, scramblesForAlg})
	}
	writeScramblesToJson("./scrambles/PLL.json", allScrambles)
}

type AlgSet struct {
	Cube     string   `json:"cube"`
	Name     string   `json:"name"`
	Inactive []int    `json:"inactive"`
	Algs     []string `json:"algs"`
}

type Scrambles struct {
	Alg       string   `json:"alg"`
	Scrambles []string `json:"scrambles"`
}

type SetScrambles struct {
	SetName   string      `json:"setName"`
	Scrambles []Scrambles `json:"scrambles"`
}

func readAlgsFromJson(fileName string) []AlgSet {
	file, err := os.Open(fileName)
	defer file.Close()
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []AlgSet{}
	}

	decoder := json.NewDecoder(file)
	var algSets []AlgSet
	err = decoder.Decode(&algSets)
	if err != nil {
		fmt.Println("readJsonFile:", err)
		return []AlgSet{}
	}

	return algSets
}

func writeScramblesToJson(fileName string, scrambles SetScrambles) {
	file, err := os.Create(fileName)
	defer file.Close()
	if err != nil {
		fmt.Println("writeJsonFile:", err)
		return
	}

	encoder := json.NewEncoder(file)
	err = encoder.Encode(scrambles)
	if err != nil {
		fmt.Println("writeJsonFile:", err)
		return
	}
}

func findAlgSet(algSets []AlgSet, setName string) AlgSet {
	for _, algSet := range algSets {
		if algSet.Name == setName {
			return algSet
		}
	}
	return AlgSet{}
}
