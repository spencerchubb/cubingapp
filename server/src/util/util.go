package util

import (
	"encoding/json"
	"io"
	"os"
)

func Unmarshal(r io.Reader, v any) error {
	body, err := io.ReadAll(r)
	if err != nil {
		return err
	}

	return json.Unmarshal(body, v)
}

func ReadJsonFile[T any](path string) (*T, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	var v T
	err = decoder.Decode(&v)
	if err != nil {
		return nil, err
	}

	return &v, nil
}

func Find[T any](arr []T, f func(T) bool) T {
	for _, v := range arr {
		if f(v) {
			return v
		}
	}
	var zeroValue T
	return zeroValue
}

func Map[T any, U any](arr []T, f func(T) U) []U {
	result := make([]U, len(arr))
	for i, v := range arr {
		result[i] = f(v)
	}
	return result
}

type OnceFunc[T any] func() (T, error)

func Once[T any](f OnceFunc[T]) OnceFunc[T] {
	var inited bool
	var result T
	var err error
	return func() (T, error) {
		if !inited {
			inited = true
			result, err = f()
		}
		return result, err
	}
}
