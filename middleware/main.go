package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	addr := "localhost:4000"

	mux := http.NewServeMux()
	muxLogged := http.NewServeMux()

	muxLogged.HandleFunc("/v1/hello1", HelloHandler1)
	muxLogged.HandleFunc("/v1/hello2", HelloHandler2)
	mux.HandleFunc("/v1/hello3", HelloHandler3)
	//used when you want to add one mux to another mux
	logger := log.New(os.Stdout, "", log.LstdFlags)
	mux.Handle("/v1/", logRequest(logger)(muxLogged))

	fmt.Printf("listening at %s...\n", addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}
