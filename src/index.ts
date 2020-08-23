import fs from 'fs';

function createFolder(pwd: string) {
    fs.mkdir(`${pwd}/bin`, {
        recursive: true,
    }, (error) => {
        if (error) {
            console.log(error);
            return;
        }
    });
}

function createMakefile(pwd: string) {
    fs.writeFile(`${pwd}`, Makefile, {
        encoding: "utf-8",
    }, (error) => {
        if (error) {
            console.log(error);
        }
    })
}

module.exports = {
    run: function (params: string[]) {
        let pwd = params[2];

        if (pwd) {
            pwd = `${__dirname}/${pwd}`;
            console.log(pwd);

            createFolder(`${pwd}/bin`);
            createFolder(`${pwd}/inc`);
            createFolder(`${pwd}/obj`);
            createFolder(`${pwd}/src`);

            createMakefile(`${pwd}/Makefile`);


        } else {
            pwd = __dirname;
            console.log(pwd);
        }


    }
};

const Makefile = "CC=g++\n\
IPATH=-Iinc/\n\
SRC=src/\n\
ENGINE=src/engine/\n\
GAME=src/game/\n\
OBJ=obj/\n\
BIN=bin/\n\
FLAGS=-std=c++2a\n\
\n\
all: app\n\
	@echo \"Sucess\"\n\
\n\
clean:\n\
	@rm -rf $(OBJ)*.o $(BIN)*\n\
\n\
run:\n\
	@./bin/app\n\
\n\
dev: app\n\
	@./bin/app\n\
\n\
app: main.o\n\
	@$(CC) $(OBJ)* -o $(BIN)app $(FLAGS)\n\
\n\
main.o:\n\
	@$(CC) $(IPATH) -c $(SRC)main.c -o $(OBJ)main.obj";