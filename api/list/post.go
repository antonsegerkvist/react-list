package list

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

//
// PostRequestData contains
//
type PostRequestData struct {
	Title string `json:"title"`
}

//
// Post adds a single item to the list.
//
func Post(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	w.Header().Set(`Content-Type`, `application/json`)

	request := PostRequestData{}
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(w, `{}`)
		return
	}

	list = append(list, map[string]interface{}{
		"id":    len(list),
		"title": request.Title,
	})

	if r.Header.Get(`Content-Type`) == `application/json` {
		w.WriteHeader(http.StatusUnsupportedMediaType)
		fmt.Fprint(w, `{}`)
		return
	}

	w.WriteHeader(http.StatusCreated)
	fmt.Fprint(w, `{}`)

}
