CC=g++
IPATH=-Iinc/
SRC=src/
ENGINE=src/engine/
GAME=src/game/
OBJ=obj/
BIN=bin/
FLAGS=-std=c++2a

all: app
	@echo "Sucess"

clean: 
	@rm -rf $(OBJ)*.o $(BIN)*%   

run:
	@./bin/app

dev: app
	@./bin/app

app: main.o
	@$(CC) $(OBJ)* -o $(BIN)app $(FLAGS)
	
main.o:
	@$(CC) $(IPATH) -c $(SRC)main.c -o $(OBJ)main.obj