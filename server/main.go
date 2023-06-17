package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"os"
	"time"

	"server/src/db"
	"server/src/endpoints"

	"github.com/jackc/pgx/v5/pgxpool"
)

var pgUrl = getEnv("PG_URL")
var serverPort = getEnv("SERVER_PORT")
var mode = getEnv("MODE")

func root(r *http.Request) (interface{}, error) {
	msg := fmt.Sprintf("Invalid endpoint hit: %s", r.URL)
	fmt.Println(msg)
	return msg, nil
}

func hello(r *http.Request) (interface{}, error) {
	return "Hello world!\n", nil
}

type Handler func(*http.Request) (interface{}, error)

// Set up endpoint and enable CORS
func handleFunc(pattern string, handler Handler) {
	http.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Endpoint hit: %s\n", pattern)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		result, err := handler(r)
		if err != nil {
			fmt.Printf("Error in %s: %v\n", pattern, err)
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("500 - Internal server error"))
			return
		}

		if str, ok := result.(string); ok {
			// If the result is a string, write it directly to the response
			w.Write([]byte(str))
			return
		}

		json, err := json.Marshal(result)
		if err != nil {
			fmt.Printf("Error while marshaling: %s\n", err)
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("500 - Internal server error"))
			return
		}
		w.Write(json)
	})
}

func listenAndServe() error {
	killPort(serverPort)

	var addr string
	if mode == "dev" {
		addr = fmt.Sprintf("127.0.0.1:%s", serverPort)
		fmt.Printf("Starting server on port %s\n", serverPort)
		return http.ListenAndServe(addr, nil)
	}

	addr = fmt.Sprintf(":%s", serverPort)
	fullchain := "/etc/letsencrypt/live/cubingapp.com/fullchain.pem"
	privkey := "/etc/letsencrypt/live/cubingapp.com/privkey.pem"
	fmt.Printf("Starting server on port %s\n", serverPort)
	return http.ListenAndServeTLS(addr, fullchain, privkey, nil)
}

func main() {
	fmt.Println(time.Now().String())
	var err error

	handleFunc("/", root)
	handleFunc("/hello", hello)

	handleFunc("/createAlgSet", endpoints.CreateAlgSet)
	handleFunc("/createPrebuiltAlgSet", endpoints.CreatePrebuiltAlgSet)
	handleFunc("/readAlgSet", endpoints.ReadAlgSet)
	handleFunc("/readAlgSets", endpoints.ReadAlgSets)
	handleFunc("/updateAlgSet", endpoints.UpdateAlgSet)
	handleFunc("/deleteAlgSet", endpoints.DeleteAlgSet)

	handleFunc("/createSession", endpoints.CreateSession)
	handleFunc("/readSessions", endpoints.ReadSessions)
	handleFunc("/updateSession", endpoints.UpdateSession)
	handleFunc("/deleteSession", endpoints.DeleteSession)

	handleFunc("/createSolve", endpoints.CreateSolve)
	handleFunc("/readSolve", endpoints.ReadSolve)
	handleFunc("/readSolves", endpoints.ReadSolves)
	handleFunc("/deleteSolve", endpoints.DeleteSolve)

	handleFunc("/user", endpoints.User)

	go func() {
		err = listenAndServe()
		if errors.Is(err, http.ErrServerClosed) {
			fmt.Printf("Server closed\n")
			os.Exit(1)
		} else if err != nil {
			fmt.Printf("Error starting server: %s\n", err)
			os.Exit(1)
		}
	}()

	// Setup database connection after server is started because this is slow.
	conn, err := pgxpool.New(context.Background(), pgUrl)
	db.SetupDB(conn)
	if err != nil {
		fmt.Printf("Unable to connect to database: %v\n", err)
		os.Exit(1)
		return
	}
	defer conn.Close()

	fmt.Println("Connected to database")

	// Wait for server to close.
	<-make(chan struct{})
}
