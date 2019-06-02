GO ?= go
ECHO ?= echo

all:
	@$(ECHO) "==> Compiling react-list"
	@$(GO) run ./cmd/react-list/react-list.go