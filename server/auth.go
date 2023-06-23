package main

import (
	"context"
	"os"

	firebase "firebase.google.com/go/v4"
)

// Returns email of user if token is valid, otherwise returns error.
func verifyToken(idToken string) (string, error) {
	ctx := context.Background()

	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		return "", err
	}

	client, err := app.Auth(ctx)
	if err != nil {
		return "", err
	}

	if mode == "dev" {
		os.Setenv("FIREBASE_AUTH_EMULATOR_HOST", "localhost:9099")
	}

	token, err := client.VerifyIDToken(ctx, idToken)
	if err != nil {
		return "", err
	}
	return token.Claims["email"].(string), nil
}
