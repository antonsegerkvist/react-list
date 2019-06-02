package list

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

//
// Get returns a list of list entries.
//
func Get(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	w.Header().Set(`Content-Type`, `application/json`)

	response := list
	jsonBody, err := json.Marshal(response)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprint(w, `[]`)
		return
	}

	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, string(jsonBody))

}
