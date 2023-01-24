"use strict";

// 1
for(let i = "#"; i.length < 7; i += "#") {
    console.log(i);
}

// 2
let board = "";
for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++){
        if ((i + j) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }        
    }
    board += "\n";
}
 console.log(board);

// 3
let num = 0;
do {
    num  = prompt("Введите число больше 100")
} while (num < 100 && num);