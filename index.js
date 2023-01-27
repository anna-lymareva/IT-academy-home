"use strict";

// Задание 1
for (let i = "#"; i.length < 7; i+= "#"){
    console.log(i);  
}

// Задание 2
let board = "";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);


// Задание 3
let num = 0;
do {
  num = prompt("Введите число больше 100?");
} while (num < 100 && num);


// Lesson 4

const reverse = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {      
      res.push(arr[arr.length - 1 - i]);
  }
  return res;
}

console.log(reverse([1,2,3]));

const concat = (array, value) => {
  const res = [];
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < value.length; j++) {
          res.push(array+","+value);
          break;
      }
      break;    
  }
  return res;
}

console.log(concat([1,2,3],[4,5,6]));

const last = (array) => {
  let res = [];
  for (let i = 0; i < array.length; i++) {
      res = array[array.length-1]
      
  }
  return res;
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

const size = (collection) => {
  let res = [];
  for (let i = 0; i < collection.length; i++) {
      res = collection.length        
  }
  return res;
}
console.log(size('hello world'));
console.log(size([{name: 'anna', age:19},{name: 'lera', age:19}]));