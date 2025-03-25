console.log("hello World", 1);
let a = 1;
console.error(a);
console.info(a);

// confirm("hello world")

// console.log("<h1> hello world </h1>")
// document.write("hello world")
// document.write("<h1> hello world </h1>")

// alert("this is an alert button")

// document.getElementById('para').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ut ullam. Ullam enim fugit ex, delectus porro repellat dicta, ad voluptatem et consectetur ipsa doloremque deleniti beatae omnis non debitis."

// let b = prompt("Enter the word");
// document.write(b);

// let c = parseInt(prompt("Enter the number"));
// document.write(c);

console.log("ram said,' he is a hero' ${ram}");
console.log(`ram say's, "he is not a god "`);

let ram = "he is a human";
console.log(`ram say's, "he is not a god, ${ram}"`);

let g = null;
console.log(g);

let we = 982384792374784562837465732746527;
console.log(BigInt(we));

let aaa = Symbol(1);
let b = Symbol(1);
console.log(aaa == b);

if (3 > 3) {
  document.getElementById("ifcondition").innerHTML = " Yappy !!! ";
} else {
  document.getElementById("ifcondition").innerHTML = " Opps !!! ";
}

let wether = "cloudy";

if (wether == "rainny") {
  console.log("it's raining");
} else if (wether == "sunny") {
  console.log("it's a hot day");
} else if (wether == "cloudy") {
  console.log("the wether is quity pleasent");
} else {
  console.log("Define correct wether");
}

// let gpa = parseFloat(prompt("what's your GPA", 2.98));

// if ( gpa <= 4 && gpa > 3.6 ){
//   console.log(" Brilent student");
// }else if ( gpa <= 3.6 && gpa > 3){
//   console.log(" Amazing Student ")
// }else if ( gpa <= 3 && gpa > 2.6){
//   console.log( "Average Student ");
// }else if ( gpa <= 2.6 && gpa > 2 ){
//   console.log( " Normal Student");
// }else if ( gpa <= 2 && gpa > 1.6 ){
//   console.log( "Poor Student Need to Improve");
// }else if ( gpa <= 1.6 && gpa > 1){
//   console.log( " Failed !!!, Work hard");
// }else if ( gpa <= 1 && gpa > 0){
//   console.log("Have to serious , Very poor perfermance ");
// }else {
//   console.log("Input a Valid GPA");
// }

let value = "val";

switch (value) {
  case "val":
    console.log("this one is it");
    break;

  case "wal":
    console.log("this one is not good");
    break;

  default:
    console.log("Opps!! noting is perfect");
}

// non parameterized function
function funName() {
  console.log(2);
}
funName();

function f(a, b) {
  console.log(a + b);
}
f(4, 5);
f(6, 7);
f(10, 10);
const fs = () => {
  console.log("this is function");
};
fs();

const fss = (param) => {
  console.log("this is function", param);
};
fss("arrow");

// ara of rectangle = l * b

const fun = () => {
  const param1 = parseFloat(document.getElementById("firstnum").value);
  const param2 = parseFloat(document.getElementById("secnum").value);
  if (param1 > param2) {
    document.getElementsByClassName("totalNum")[0].innerHTML = param1 - param2;
  } else {
    document.getElementsByClassName("totalNum")[0].innerHTML = param1 + param2;
  }
};

const obj = {
  name: "Ram",
  country: "aayodha",
};
console.log(typeof obj);
console.log(obj.name);
document.getElementsByTagName("p")[1].innerHTML = obj.name;
document.getElementsByTagName("p")[2].innerHTML = obj.country;
const para1 = document.getElementsByTagName("p")[0];
para1.style.padding = "20px";
para1.innerHTML = JSON.stringify(obj);

obj.wife = "sita";
console.log(obj);

delete obj.country;
console.log(obj);

Object.freeze(obj);
obj.brother = "laxamn";
para1.innerHTML = JSON.stringify(obj);

const objOnes = {
  name: "butwal",
  address: {
    pernament: "palpa",
    temprory: "butwal",
  },
  ward: 8,
  livesThere: true,
};

const objOne = new Object();
objOne.name = "butwal";
objOne.address = new Object();
objOne.address.pernament = "palpa";
objOne.address.temprory = "butwal";
objOne.ward = 8;
objOne.livesThere = true;
console.log(objOne);

// function Animal ( name, action ){
//   this.name = name;
//   this.action = action;

//   this.does = function(){
//     return `${this.name} ${this.action} all the time`;
//   }
// }

// const animalOne = new Animal ( "Dog","Barks");
// const animalTwo = new Animal ( "horse", "Kicks" );
// console.log(animalTwo.does());

class Animal {
  constructor(name, action) {
    this.name = name;
    this.action = action;
  }

  dog() {
    return `${this.name} is ${this.action} at some one `;
  }

  cat() {
    return `${this.name} are so ${this.action} `;
  }
}

class WildAnimal extends Animal {
  constructor(name, action, food) {
    super(name, action);
    this.food = food;
  }

  tiger() {
    return `${this.name} is  ${this.action} ${this.food} after hunting an animal`;
  }
}

const AnimalOne = new Animal("camal", "staring");
const AnimalTwo = new Animal("cat", "Adorable");
const WildAnimalOne = new WildAnimal("Tiger", "Eating", "Meat");
console.log(AnimalOne.dog());
console.log(AnimalTwo.cat());
console.log(WildAnimalOne.tiger());

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
console.log(array[3]); //output: 4

let arry = [
  [1, 2, 3],
  [3, 4, 6, 7],
];
console.log(arry[0][1]);

const arys = new Array();
arys[0] = new Array();
arys[0][0] = 1;
arys[0][1] = 2;
arys[0][2] = 3;
arys[1] = new Array();
arys[1][0] = 4;
arys[1][1] = 5;
arys[1][2] = 6;
console.log(arys);

const arrysLen = [
  3, 4, 7, 45, 89, 9, 4, 23, 45, 6, 76, 8, 9, 34, 34, 56, 54, 87, 9, 5, 45, 34,
  556, 4, 7, 6, 3423, 43, 345, 5, 6, 7, 54, 7, 8, 87, 54, 9956, 434, 45, 45,
];
console.log(arrysLen);
document.querySelector(
  ".arrayLength"
).innerHTML = `<strong>${arrysLen.length} </strong>`;

const arryss = [
  3,
  4,
  7,
  45,
  89,
  9,
  4,
  23,
  45,
  6,
  76,
  8,
  9,
  34,
  ,
  56,
  54,
  87,
  9,
  5,
  45,
  34,
  556,
  4,
  7,
  6,
  3423,
  43,
  345,
  5,
  6,
  7,
  54,
  7,
  8,
  87,
  ,
  9956,
  434,
  45,
  45,
];
document.querySelector(
  ".arrayMethod"
).innerHTML = `<h3>${arryss.toString()}</h3>`;

const arryAt = [
  3,
  4,
  7,
  45,
  89,
  9,
  4,
  23,
  45,
  6,
  76,
  8,
  9,
  34,
  ,
  56,
  54,
  87,
  9,
  5,
  45,
  34,
  556,
  4,
  7,
  6,
  3423,
  43,
  345,
  5,
  6,
  7,
  54,
  7,
  8,
  87,
  ,
  9956,
  434,
  45,
  45,
];
document.querySelector(".arrayAt").innerHTML = `<h3>${arryAt.at(24)}</h3>`;

const arryJoin = [
  3, 4, 7, 45, 89, 9, 4, 23, 45, 6, 76, 8, 9, 34, 99, 56, 54, 87, 9, 5, 45, 34,
  556, 4, 7, 6, 3423, 43, 345, 5, 6, 7, 54, 7, 8, 87, 43, 9956, 434, 45, 45,
];
document.querySelector(".arrayJoin").innerHTML = `<h3>${arryJoin.join(
  `~`
)}</h3>`;

const arryPop = [
  3, 4, 7, 45, 89, 9, 4, 23, 45, 6, 76, 8, 9, 34, 99, 56, 54, 87, 9, 5, 45, 34,
  556, 4, 7, 6, 3423, 43, 345, 5, 6, 7, 54, 7, 8, 87, 43, 9956, 434, 18, 45,
];
document.querySelectorAll(
  ".arrayPop"
)[0].innerHTML = `<h3> poped Element: ${arryPop.pop()}</h3>`;
document.querySelectorAll(
  ".arrayPop"
)[1].innerHTML = `<h3>new Array After pop: ${arryPop}</h3>`;

const arryPush = [
  3, 4, 7, 45, 89, 9, 4, 23, 45, 6, 76, 8, 9, 34, 99, 56, 54, 87, 9, 5, 45, 34,
  556, 4, 7, 6, 3423, 43, 345, 5, 6, 7, 54, 7, 8, 87, 43, 9956, 434, 45, 40,
];
document.querySelectorAll(
  ".arrayPush"
)[0].innerHTML = `<h3> total index: ${arryPush.push("hello")}</h3>`;
document.querySelectorAll(
  ".arrayPush"
)[1].innerHTML = `<h3> new Array After Push: ${arryPush}</h3>`;

const arryShift = [
  3, 4, 7, 45, 89, 9, 4, 23, 45, 6, 76, 8, 9, 34, 99, 56, 54, 87, 9, 5, 45, 34,
  556, 4, 7, 6, 3423, 43, 345, 5, 6, 7, 54, 7, 8, 87, 43, 9956, 434, 45, 40,
];
document.querySelectorAll(
  ".arrayShift"
)[0].innerHTML = `<h3> first element: ${arryShift.shift()}</h3>`;
document.querySelectorAll(
  ".arrayShift"
)[1].innerHTML = `<h3> new Array After Shift: ${arryShift}</h3>`;

const arryunShift = [
  3, 4, 7, 45, 89, 9, 4, 23, 45, 6, 76, 8, 9, 34, 99, 56, 54, 87, 9, 5, 45, 34,
  556, 4, 7, 6, 3423, 43, 345, 5, 6, 7, 54, 7, 8, 87, 43, 9956, 434, 45, 40,
];
document.querySelectorAll(
  ".arrayunShift"
)[0].innerHTML = `<h3> total number of index: ${arryunShift.unshift(
  "added"
)}</h3>`;
document.querySelectorAll(
  ".arrayunShift"
)[1].innerHTML = `<h3> new Array After unShift: ${arryunShift}</h3>`;

// initial array
const sliced = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "k", "L"];
// print the array in page
document.getElementsByClassName(
  "sliceArray"
)[0].innerHTML = `Initial Array = [  ${sliced} ]`;

// function for click event
const slic = () => {
  // start index value
  const start = document.getElementById("start").value;
  // start index value li print garey xu
  document.querySelectorAll(
    ".start"
  )[0].innerHTML = `<strong style="background-color:green; color:white"> ${start} </strong>`;
  // end index value
  const end = document.getElementById("end").value;
  // end index value li print garey xa
  document.querySelectorAll(
    ".end"
  )[0].innerHTML = `<strong style="background-color:red; color:white">${end} </strong>`;
  // slice opertion perform vaxa
  document.getElementById("slice").innerHTML = sliced.slice(start, end);
};

// initial array
const splices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "k", "L"];
// print the array in page
document.getElementsByClassName(
  "spliceArray"
)[0].innerHTML = `Initial Array = [  ${splices} ]`;

// function for click event
const spliced = () => {
  // start index value
  const start = document.getElementById("starts").value;
  // start index value li print garey xu
  document.querySelectorAll(
    ".starts"
  )[0].innerHTML = `<strong style="background-color:green; color:white"> ${start} </strong>`;
  // end index value
  const length = document.getElementById("length").value;
  // length jati xa tai anuser value li print garey xa
  document.querySelectorAll(
    ".length"
  )[0].innerHTML = `<strong style="background-color:red; color:white">${length} </strong>`;
  // slice opertion perform vaxa
  document.getElementById("splice").innerHTML = splices.splice(start, length);
};

const aryInc = [32, 41, 92, 18, 9, 14, 31, 23];
console.log(aryInc.includes(10));

const aryIncs = [32, 41, 92, 18, 9, 14, 31, 23, 27, 15, 6, 65];
console.log(aryInc.indexOf(31));

const aryLast = [32, 41, 92, 18, 9, 14, 31, 23, 27, 15, 6, 65];
console.log(aryLast.lastIndexOf(27, 6));

const arySort = [32, 41, 92, 18, 9, 14, 31, 23, 27, 15, 6, 65];
console.log(
  arySort.sort(function (a, b) {
    return a - b;
  })
);

const aryRev = [32, 41, 92, 18, 9, 14, 31, 23, 27, 15, 6, 65];
console.log(aryRev.reverse());

const arySorted = [32, 41, 92, 18, 9, 14, 31, 23, 27, 15, 6, 65];
console.log(arySorted.toSorted());

const aryReversed = [32, 41, 92, 18, 9, 14, 31, 23, 27, 15, 6, 65];
console.log(aryReversed.toReversed());

const arrayFilter = [43, 44, 45, 47, 48, 49, 50];
const aryAfterFilter = arrayFilter.filter((value, index, Array) => {
  return value > 45;
});

console.log(aryAfterFilter);

// const arryReduce = [4,5,6,7,8,9,10,11,12,13,14,15];
//           const totalVal = arryReduce.reduce((initialValue, totalValue)=>{
//             return initialValue + totalValue;
//           })
//           console.log(totalVal);

const arryReduce = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const totalVal = arryReduce.reduceRight((initialValue, totalValue) => {
  return initialValue + totalValue;
});
console.log(totalVal);

const everyArray = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const satisfied = everyArray.every((value) => {
  return value > 8;
});
console.log(satisfied);

const someArray = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const satisfies = someArray.some((value) => {
  return value > 8;
});
console.log(satisfies);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const frut = fruits.entries();

for (let fruty of frut) {
  console.log(fruty);
}

const oneArray = [1, 2, 3, 4, 5];
const twoArray = ["hello", "fellow", "blow", "melo"];
const threeArray = [true, false, true, true];

const combine = [...oneArray, ...twoArray, ...threeArray];
console.log(combine);

//  date starts here
const date = new Date();
const todaysDate = date.getDate();
document.getElementsByClassName("getDate")[0].innerHTML = todaysDate;

const currentMonth = date.getMonth();
document.getElementsByClassName("getDate")[1].innerHTML = currentMonth + 1;

const time = date.getTime();
document.getElementsByClassName("getDate")[2].innerHTML = time;

const minute = date.getMinutes();
document.getElementsByClassName("getDate")[3].innerHTML = minute;

const second = date.getSeconds();
document.getElementsByClassName("getDate")[4].innerHTML = second;

const miliSec = date.getMilliseconds();
document.getElementsByClassName("getDate")[5].innerHTML = miliSec;

const day = date.getDay();
switch (day) {
  case 0:
    document.getElementsByClassName("getDate")[6].innerHTML = "sunday";
    break;

  case 1:
    document.getElementsByClassName("getDate")[6].innerHTML = "Monday";
    break;

  case 2:
    document.getElementsByClassName("getDate")[6].innerHTML = "Tuesday";
    break;

  case 3:
    document.getElementsByClassName("getDate")[6].innerHTML = "Wenesday";
    break;

  case 4:
    document.getElementsByClassName("getDate")[6].innerHTML = "Thrusday";
    break;

  case 5:
    document.getElementsByClassName("getDate")[6].innerHTML = "Friday";
    break;

  case 6:
    document.getElementsByClassName("getDate")[6].innerHTML = "Saturday";
    break;

  default:
    document.getElementsByClassName("getDate")[6].innerHTML = "Invalid number";
}

console.log(date);

// loop here

for (let i = 1; i <= 5; i++) {
  document.write(i);
  document.write("<br>");
}

for (let i = 5; i > 0; i--) {
  document.write(i);
  document.write("<br>");
}

for (i = 5; i === 5; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("/n");
}

for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("\n");
}

for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br>");
}

for (i = 5; i >= 1; i--) {
  for (j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br>");
}

for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    document.write("*");
  }
  document.write("<br>");
}

for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    document.write("* &nbsp;");
  }
  document.write("<br>");
}
for (i = 1; i <= 7; i++) {
  for (j = 1; j <= i; j++) {
    document.write("* &nbsp;");
  }
  document.write("<br>");
}
for (let k = 1; k <= 3; k++) {
  document.write("* <br>");
}

for (let i = 5; i > 1; i--) {
  for (j = 5; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (k = 1; k < 2 * i - 2; k++) {
    document.write("*");
  }
  document.write("<br>");
}

for (let i = 1; i < 7; i++) {
  for (j = 5; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (k = 1; k < 2 * i - 2; k++) {
    document.write("*");
  }
  document.write("<br>");
}

for (let i = 5; i > 1; i--) {
  for (j = 5; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (k = 1; k < 2 * i - 2; k++) {
    document.write("*");
  }
  document.write("<br>");
}

// christmas tree

// 1
// 12
// 123
// 1234

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write("<br>");
}

// *****
//  ****
//   ***
//    **
//     *
for (i = 1; i <= 5; i++) {
  for (j = 1; j < i; j++) {
    document.write("&nbsp;");
  }
  for (k = 5; k >= i; k--) {
    document.write("*");
  }
  document.write("<br>");
}

// 1
// 23
// 456
// 78910

let count = 1;
for (i = 1; i <= 4; i++) {
  for (j = 1; j <= i; j++) {
    document.write(count);
    count++;
  }
  document.write("<br>");
}

// 0101
// 1010
// 0101
// 1010

for (i = 1; i <= 4; i++) {
  for (j = 1; j <= 4; j++) {
    if ((i + j) % 2 == 0) {
      document.write("1");
    } else {
      document.write("0");
    }
  }
  document.write("<br>");
}

// *****
// *   *
// *   *
// *   *
// *****

for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    if (i == 1 || i == 5 || j == 1 || j == 5) {
      document.write("*");
    } else {
      document.write(" &nbsp;");
    }
  }
  document.write("<br>");
}

//  while loop

let num = 5;
while (num > 0) {
  num--;
  console.log("The value is ", num);
}

// do while loop
let numb = 1;
do {
  numb++;
  console.log(numb);
} while (numb <= 5);

const obje = {
  name: "hero",
  type: "zero",
};
for (let x in obje) {
  console.log(obje[x]);
}

let iteArray = [2, 3, 5, 8, 12, 9];
for (let i of iteArray) {
  console.log(i);
}

//  break and continue

for (i = 1; i <= 10; i++) {
  if (i === "5") {
    // break;
    continue;
  }
  console.log("the printed value is:", i);
}

console.log(Math.PI); // 3.14
console.log(Math.sqrt(4)); // 2
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.6)); // 5
console.log(Math.min(4, 5, 6, 7, 8, 9, 10)); // 4
console.log(Math.max(4, 5, 6, 7, 8, 9, 10)); // 10
console.log(Math.random()); // 0.5

console.log(Math.trunc(4.4)); // 4
console.log(Math.trunc(-4.4)); // -4
console.log(Math.trunc(43)); // 43
console.log(Math.pow(4, 4));
console.log(Math.sign(34));

console.log(Math.sin((90 * Math.PI) / 180));
console.log(Math.cos((30 * Math.PI) / 180));
console.log(Math.log(10)); // 0
console.log(Math.log2(16)); //4

// string method

let strings = "i lov,e Javascript";
console.log(strings.length); // 17
console.log(strings.includes("Java")); // true
console.log(strings.at(5)); // e
console.log(strings.charAt(5)); // e
console.log(strings.charCodeAt(2)); // 108
let newVar = strings[4]; // v
console.log(newVar);
console.log(strings.slice(2, 7)); // love
console.log(strings.slice(-7, -2)); // cript
console.log(strings.substring(8, 4)); // love
console.log(strings.toUpperCase()); // I LOVE JAVASCRIPT
console.log(strings.toLowerCase()); // i love javascript
console.log(strings.padStart(19, "*")); // **i love Javascript
console.log(strings.padEnd(18, "*")); // i love Javascript*
let str = "    i love javascript    ";
console.log(str.trim()); // i love javascript
console.log(str.trimStart(), "3"); // i love javascript
console.log(str.trimEnd(), "3"); // i love javascript
console.log(strings.repeat(3)); // i love Javascripti love Javascripti love Javascript
console.log(strings.replace("love", "hate"));
console.log(strings.split(""));

let str1 = "hello";
let str2 = "world";
let str3 = "universe";
let newStr = str1.concat(" ", str2, " ", str3);
console.log(newStr);
console.log(str1.search("lo"));

let stri = "Ram Bahadur Thapa";
// document.getElementById('letter').innerHTML = stri.charAt(0);
document.getElementById("letter").innerHTML =
  stri.split(" ")[0].charAt(0) + stri.split(" ")[1].charAt(0);

const num1 = [4, 2, 12, 9, 17, 5, 8, 3];
// largest number
console.log(Math.max(...num1));

function abc() {
  console.log(abc.xyz);
}
abc(); // undefined
abc.xyz = 123;
abc.xyz = 456;
abc(); // 456

console.log("Starting...");
setTimeout(() => {
  console.log("this is printed after certain delay!");
}, 1000);
console.log("Ending...");

console.log("Starting...");
setInterval(() => {
  console.log("this is printed after certain delay!");
}, 1000);
console.log("Ending...");

const times = setInterval(() => {
  let date = new Date();
  let time = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
  document.getElementById("times").innerHTML = `<strong> ${time} </strong>`;
}, 1000);

let y = 2;
let x = 1;
try {
  console.log("success", x + y);
  throw "the value is not found ";
} catch (error) {
  console.log("Error IS:", error);
} finally {
  console.log("i am executed whatever the result is !!! ");
}

function validation() {
  let message = document.getElementById("errorMessage");
  message.innerHTML = " ";
  let newValue = document.getElementById("newValu").value;
  console.log(newValue);

  try {
    if (newValue.trim() === "") {
      throw "the value is empty";
    }
    if (newValue <= 5) {
      throw "Input greater value than 5";
    }
    if (newValue >= 20) {
      throw "Input less value than 20";
    }
    if (isNaN(newValue)) {
      throw "Input a number value";
    }
    message.innerHTML = newValue;
  } catch (error) {
    message.innerHTML = error;
  }
}

let funPromise = new Promise((resolve, reject) => {
  return resolve("this is resloved");
  // return reject ("this is rejected ");
});

funPromise
  .then(() => {
    console.log(" success ");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// normal function
function ff() {
  return 1;
}
console.log(ff());

// using async
async function fff() {
  return "one";
}
console.log(fff());

// using async await
async function funs() {
  let rejection = Promise.reject("hello");
  await rejection;
}
funs()
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// using try catch
async function funss() {
  try {
    let rejection = Promise.reject("Not hello");
    await rejection;
  } catch (err) {
    console.log("Error", err);
  }
}
console.log(funss());

async function fanta() {
  let fantaCola = new Promise((resolve, reject) => {
    setInterval(() => {
      return resolve();
    }, 4000);
  });
  await fantaCola
}

fanta().then(()=>{
  console.log('i Love fanta');
})
.catch((err)=>{
  console.log('Error',err);
})


async function fetchApi (){
  const url = "https://jsonplaceholder.typicode.com/posts"
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error ( `${response.status}`)
    }
    const json = await response.json();
    // console.log(json);
    document.getElementById('json').innerHTML = JSON.stringify(json)
  }catch(error){
    console.log(error.message);
  }
}


// DOM Model

const image = document.getElementsByClassName('image')[0]

image.src = "https://www.w3schools.com/js/pic_htmltree.gif" 

const divison = document.getElementsByName('divi')[0]
divison.style.backgroundColor = "red";
divison.style.color = "#fff";
divison.style.padding = "20px 40px";
divison.style.fontSize = "40px"

const newPara = document.createElement("p")
const texts = document.createTextNode("this is new Paragraph added from DOM ")
newPara.appendChild(texts);
divison.appendChild( newPara);



