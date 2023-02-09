package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/spencerchubb/solver"
)

var algSetsToGen = []string{"PLL"}

func main() {
	algSets := readAlgsFromJson("./algs.json")
	for _, algSet := range algSets {
		if !contains(algSetsToGen, algSet.Name) {
			continue
		}
		generateScramblesForAlgSet(algSet)
	}
}

func contains[T comparable](s []T, e T) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}

func generateScramblesForAlgSet(algSet AlgSet) {
	allScrambles := SetScrambles{SetName: algSet.Name}
	for i, algStr := range algSet.Algs {
		fmt.Printf("%d/%d: %s\n", i+1, len(algSet.Algs), algStr)
		start := solver.NewCube()
		end := solver.NewCube()

		if algSet.OnlyOrientation != nil {
			start.SetOnlyOrientation(algSet.OnlyOrientation)
			end.SetOnlyOrientation(algSet.OnlyOrientation)
		}
		if algSet.Disregard != nil {
			start.SetDisregard(algSet.Disregard)
			end.SetDisregard(algSet.Disregard)
		}

		alg := solver.StringToAlg(algStr)
		alg = solver.InvertAlgorithm(alg)
		solver.PerformAlgorithm(&start, alg)
		scramblesForAlg := solver.Solve(end, start, []byte{0, 1, 2, 3, 4, 5, 15, 16, 17}, 10, 10_000, false)
		allScrambles.Scrambles = append(allScrambles.Scrambles, Scrambles{algStr, scramblesForAlg})
	}
	fileName := fmt.Sprintf("./scrambles/%s.json", algSet.Name)
	writeScramblesToJson(fileName, allScrambles)
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

// TODO replace with readJsonFile due to redundancy
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
