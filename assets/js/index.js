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

let gpa = parseFloat(prompt("what's your GPA", 2.98));

if ( gpa <= 4 && gpa > 3.6 ){
  console.log(" Brilent student");
}else if ( gpa <= 3.6 && gpa > 3){
  console.log(" Amazing Student ")
}else if ( gpa <= 3 && gpa > 2.6){
  console.log( "Average Student ");
}else if ( gpa <= 2.6 && gpa > 2 ){
  console.log( " Normal Student");
}else if ( gpa <= 2 && gpa > 1.6 ){
  console.log( "Poor Student Need to Improve");
}else if ( gpa <= 1.6 && gpa > 1){
  console.log( " Failed !!!, Work hard");
}else if ( gpa <= 1 && gpa > 0){
  console.log("Have to serious , Very poor perfermance ");
}else {
  console.log("Input a Valid GPA");
}


let value = "val"

switch( value ){
  case "val":
    console.log("this one is it");
  break;

  case "wal":
    console.log("this one is not good");
  break;

  default:
    console.log("Opps!! noting is perfect")

}


// non parameterized function
function funName(){
  console.log(2);
}
funName();


function f(a, b){
  console.log( a + b)
}
f(4,5);
f(6,7);
f(10, 10 )

