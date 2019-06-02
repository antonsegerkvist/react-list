package main

import (
	"fmt"

	reactlist "github.com/react-list/internal/react-list"
)

func main() {
	fmt.Println(`==> Booting react-list.`)
	reactlist.Run()
	fmt.Println(`==> Ending react-list`)
}
