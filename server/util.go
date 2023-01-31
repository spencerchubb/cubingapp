package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"

	"github.com/pkg/errors"
)

func unmarshal(r io.Reader, v any) error {
	body, err := io.ReadAll(r)
	if err != nil {
		return errors.Wrap(err, "unmarshal")
	}

	err = json.Unmarshal(body, v)
	if err != nil {
		return errors.Wrap(err, "unmarshal")
	}

	return nil
}

func getEnv(key string) string {
	env := os.Getenv(key)
	if env == "" {
		fmt.Printf("Env variable not set correctly: %s\n", key)
	}
	return env
}

func readJsonFile(fileName string, v any) error {
	file, err := os.Open(fileName)
	defer file.Close()
	if err != nil {
		return fmt.Errorf("readJsonFile Open: %v", err)
	}

	decoder := json.NewDecoder(file)
	err = decoder.Decode(v)
	if err != nil {
		return fmt.Errorf("readJsonFile Decode: %v", err)
	}
	return nil
}
