package list

import "github.com/julienschmidt/httprouter"

//
// list contains the mock data for the list api.
//
var list = []map[string]interface{}{
	map[string]interface{}{"id": 0, "title": "C++"},
	map[string]interface{}{"id": 1, "title": "C#"},
	map[string]interface{}{"id": 2, "title": "Golang"},
}

//
// Mount mounts the list endpoint to the specified router.
//
func Mount(router *httprouter.Router) {
	router.GET(`/api/list`, Get)
	router.POST(`/api/list`, Post)
}
