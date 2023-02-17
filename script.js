
"use strict";

// lesson 7

const treeSum = (array) => {   
    return array.reduce((acc, current) => acc += (Array.isArray(current) ? treeSum(current) : current), 0);     


console.log(treeSum([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ]));

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

//les4
 const last = (array) => {
     for (let i = 0; i < array.length; i++) {
         return array[array.length-1];  
     }
 }
 console.log(last([1,2,6,8,9]));
 
 const includes = (array,value) => {
     for (let i = 0; i < array.length; i++) {
         if(array[i]===value){
             return true;
         }
     }
 }
 console.log(includes(['a','b','c','d','e'],'b'));
  
 const pop1 = (array) => {
     let res = [];
       for (let index = 0; index < array.length-1; index++) {
         res[index] = array[index]
       } return res;
 }
 console.log(pop1([1,2,6,8,9]));

 const pop2 = (array) => {
     for (let index = 0; index < array.length; index++) {
         array.reverse();
         array.shift()
         array.reverse();
         return array
     } 
 }
 console.log(pop2([1,2,6,8,9]));


 const shift = (array) => {
     for (let index = 0; index < array.length; index++) {
         array.reverse();
         array.pop()
         array.reverse();
         return array
    } 
 }
 console.log(shift([1,2,6,8,9]));

 const join = (array, separator = '') => {
     let res = '';
     for (let i = 0; i < array.length; i++) {
         res += array[i] + separator;        
     } return res;
 }
 console.log(join([1,2,6,8,9], '.--.'));

console.log(join([1,2,6,8,9], '.--.'));


// 1
for(let i = "#"; i.length < 7; i += "#") {
    console.log(i);
}

// 2
let boardd = "";
for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++){
        if ((i + j) % 2 == 0) {
            boardd += " ";
        } else {
            boardd += "#";
        }        
    }
    boardd += "\n";
}
 console.log(boardd);

// 3
let numm = 0;
do {
    numm  = prompt("Введите число больше 100")
} while (numm< 100 && numm);

