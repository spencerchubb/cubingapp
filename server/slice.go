package main

import (
	"math/rand"
)

func randElement[T any](slice []T) T {
	i := rand.Intn(len(slice))
	return slice[i]
}
