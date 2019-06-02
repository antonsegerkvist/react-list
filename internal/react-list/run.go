package reactlist

import (
	"net/http"

	"github.com/julienschmidt/httprouter"

	api_list "github.com/react-list/api/list"
)

//
// Run starts the react-list server.
//
func Run() {
	router := httprouter.New()

	api_list.Mount(router)

	server := http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	server.ListenAndServe()
}
