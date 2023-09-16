package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
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

func root(r *http.Request, uid int) (interface{}, error) {
	msg := fmt.Sprintf("Invalid endpoint hit: %s", r.URL)
	fmt.Println(msg)
	return msg, nil
}

func hello(r *http.Request, uid int) (interface{}, error) {
	return "Hello world!\n", nil
}

func logError(r *http.Request, uid int) (interface{}, error) {
	body, _ := io.ReadAll(r.Body)
	msg := fmt.Sprintf("Error: %s", body)
	fmt.Println(msg)
	return "Error received\n", nil
}

func writeError(w http.ResponseWriter) {
	w.WriteHeader(http.StatusInternalServerError)
	w.Write([]byte("500 - Internal server error"))
}

// Handler is a function that handles an endpoint.
// It takes in a request and a uid. It returns a result and an error.
type Handler func(*http.Request, int) (interface{}, error)

// Set up endpoint and enable CORS
func handleFunc(pattern string, handler Handler, requireAuth bool) {
	http.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Endpoint hit: %s\n", pattern)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			return
		}

		uid := 0
		if requireAuth {
			// Check if user is authenticated
			authToken := r.Header.Get("Authorization")
			email, err := verifyToken(authToken)
			if err != nil {
				fmt.Printf("Error verifying token %s: %s\n", authToken, err)
				writeError(w)
				return
			}
			db := db.GetDB()
			uid, err = db.GetUID(email)
			if err != nil {
				fmt.Printf("Error getting uid for %s: %s\n", email, err)
				writeError(w)
				return
			}
		}

		result, err := handler(r, uid)
		if err != nil {
			fmt.Printf("Error in %s: %v\n", pattern, err)
			writeError(w)
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
			writeError(w)
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

	handleFunc("/", root, false)
	handleFunc("/hello", hello, false)
	handleFunc("/logError", logError, false)

	handleFunc("/createAlgSet", endpoints.CreateAlgSet, true)
	handleFunc("/readAlgSet", endpoints.ReadAlgSet, true)
	handleFunc("/readAlgSets", endpoints.ReadAlgSets, true)
	handleFunc("/readDeletedAlgSets", endpoints.ReadDeletedAlgSets, true)
	handleFunc("/updateAlgSet", endpoints.UpdateAlgSet, true)
	handleFunc("/deleteAlgSet", endpoints.DeleteAlgSet, true)
	handleFunc("/deleteAlgSetPermanently", endpoints.DeleteAlgSetPermanently, true)
	handleFunc("/restoreAlgSet", endpoints.RestoreAlgSet, true)

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
