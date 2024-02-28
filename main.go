package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"io/fs"
	"log"
	"math/rand"
	"net/http"
	"os"
	"strings"
)

func main() {
	var port int
	flag.IntVar(&port, "port", 5173, "The port to listen on")
	flag.Parse()

	// Initialize our example backend with a single HTTP handler that returns a
	// random hacker law.
	http.Handle("/api/v1/law", http.HandlerFunc(getRandomLaw))

	// Initialize our frontend, which assumes that our static frontend SPA files
	// are located at ./frontend/dist. We could also use a different fs.FS
	// implementation here, like embed.FS.
	var frontend fs.FS = os.DirFS("./dist")
	httpFS := http.FS(frontend)
	fileServer := http.FileServer(httpFS)
	serveIndex := serveFileContents("index.html", httpFS)

	// Hook our fileServer, so that it responds with the root index if a 404 error
	// is generated.
	http.Handle("/", intercept404(fileServer, serveIndex))
	// http.Handle("/", fileServer)

	// Start the web server
	addr := fmt.Sprintf("localhost:%d", port)
	fmt.Printf("Serving app at http://%s", addr)
	log.Fatalln(http.ListenAndServe(addr, nil))
}

type law struct {
	Name       string `json:"name,omitempty"`
	Definition string `json:"definition,omitempty"`
}

var hackerLaws = []law{
	{
		Name:       "Amdahl's Law",
		Definition: "Amdahl's Law is a formula which shows the potential speedup of a computational task which can be achieved by increasing the resources of a system. Normally used in parallel computing, it can predict the actual benefit of increasing the number of processors, which is limited by the parallelisability of the program.",
	},
	{
		Name:       "Conway's Law",
		Definition: "This law suggests that the technical boundaries of a system will reflect the structure of the organisation. It is commonly referred to when looking at organisation improvements, Conway's Law suggests that if an organisation is structured into many small, disconnected units, the software it produces will be. If an organisation is built more around 'verticals' which are orientated around features or services, the software systems will also reflect this.",
	},
	{
		Name:       "Gall's Law",
		Definition: "A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system.",
	},
}

func getRandomLaw(w http.ResponseWriter, r *http.Request) {
	randomLaw := hackerLaws[rand.Intn(len(hackerLaws))]
	j, err := json.Marshal(randomLaw)
	if err != nil {
		http.Error(w, "couldn't retrieve random hacker law", http.StatusInternalServerError)
	}

	w.Header().Set("Content-Type", "application/json")
	io.Copy(w, bytes.NewReader(j))
}

// See https://stackoverflow.com/questions/26141953/custom-404-with-gorilla-mux-and-std-http-fileserver
func intercept404(handler, on404 http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		hookedWriter := &hookedResponseWriter{ResponseWriter: w}
		handler.ServeHTTP(hookedWriter, r)

		if hookedWriter.got404 {
			on404.ServeHTTP(w, r)
		}
	})
}

type hookedResponseWriter struct {
	http.ResponseWriter
	got404 bool
}

func (hrw *hookedResponseWriter) WriteHeader(status int) {
	if status == http.StatusNotFound {
		// Don't actually write the 404 header, just set a flag.
		hrw.got404 = true
	} else {
		hrw.ResponseWriter.WriteHeader(status)
	}
}

func (hrw *hookedResponseWriter) Write(p []byte) (int, error) {
	if hrw.got404 {
		// No-op, but pretend that we wrote len(p) bytes to the writer.
		return len(p), nil
	}

	return hrw.ResponseWriter.Write(p)
}

func serveFileContents(file string, files http.FileSystem) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Restrict only to instances where the browser is looking for an HTML file
		if !strings.Contains(r.Header.Get("Accept"), "text/html") {
			w.WriteHeader(http.StatusNotFound)
			fmt.Fprint(w, "404 not found")

			return
		}

		// Open the file and return its contents using http.ServeContent
		index, err := files.Open(file)
		if err != nil {
			w.WriteHeader(http.StatusNotFound)
			fmt.Fprintf(w, "%s not found", file)

			return
		}

		fi, err := index.Stat()
		if err != nil {
			w.WriteHeader(http.StatusNotFound)
			fmt.Fprintf(w, "%s not found", file)

			return
		}

		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeContent(w, r, fi.Name(), fi.ModTime(), index)
	}
}
