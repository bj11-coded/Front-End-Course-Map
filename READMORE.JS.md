#### ----------------- JAVASCRIPT ----------------------------------------

- Javascript is a programming or scripting language
- it is used to implement Complex features on webPage
- Dynamic Content
- it is light weight Interpater programming Language It checks line by line
- it supports both client side and server side
- Backend , Frontend, Machine learning , Mobile App (Android)

### -----------------------------------------------------------------------

# type of javascript

## Internal JavaScript

  <script> 
    console.log("hello world");
  </script>

- it is defined within the html using script tag inside the body

## External Java Script

  <script src="./assets/js/index.js" defer></script>

- in this we create a external index.js file within the assets/js folder
- in the html inside the body the script tag is defined with the source src. it takes the path of the js file and link with the html
- we can use defer attribute in script to priortize script wherever it is written.

# How to comment in js file

- use ctrl + / or use doubble backslash //

# how to run Js file

- go to the js file path and open terminal
- now type node filename.js
- we have to run it each time we want to execute the change in js file

#### ----------------------------------------------------------------------------

# Output METHODS

## Console

- console is one of the output method that prints the data in the terminal line or in console of a browser
- console doesnot support elements inside the string data type as it counts as strings

### console using log and string, and number data type

     console.log(" hello world ", 1);
     console.log("<h1> hello world </h1>")

### console using error and variable to catch error

    let a ;
    console.error(a)

### console using info and variable to display information regarding output

    let a ;
    console.info(a)

## Confirm

- confim is one of the ouput method that prints the data as a popup
- it popups with output showing the ok and cancel button
- Example:
  confirm("hello world")

## Alet

- Alert method is used to print the output of the data as a popup
- it popups with an ok button only
- Example:
  alet("this is an alert button");

## Document

- document prints the data in the output of the webpage.

### document with write

    - document.write prints the data in the webpage
    - it doesnot run in the terminal
    - if we try to run in terminal using document.write it shows it is undefined
    - we can use elements inside the string data type in document.write as it takes elements and prints the output as of elemnt says.
    - example:
        document.write("hello world")
        document.write("<h1> hello world </h1>")

### document with dom model

- we can dom model to print the output of the javascript.
- document is used to print the output in the webpage.
- getElementById is a dom method to print the data by targeting id as para.
- innerHTML is used to write inside the targeted html where "Lorem ipsum dolor sit amet" is the value.
- example:
  document.getElementById('para').innerHTML = "Lorem ipsum dolor sit amet";

# Input METHOD

## Prompt

    - prompt is the input method for the js variales
    - it prints the data in string datatype
     - Example:
        let a = prompt("Enter the word");
        document.write(a);

    - if we have to print in number we use parseInt
     - Example:
        let a = parseInt(prompt("Enter the word"));
        document.write(a);

    - if we have to print the decimal number too the we can use parseFloat(prompt("Enter the Decimal Number"))
        let a = parseFloat(prompt("Enter the word"));
        document.write(a);

# Variable Decleration

- Variable declration is the process of declearing any thing or any data type
- Variable can be declared in 3 ways
- varaible are global scope means can be used anyWhere

## Var

    - var is the oldest concept of declaring the variable
    - var is not supported by the latest browsers
    - var means variable
    ### Example:
        var nam = "this is name";
        console.log(nam)

## LET and CONST

    - let and const are the process of variable decleration that is introduced later after 2015 as ES6 Model
    - let is Defined When the variable is changed or on any variable
    - Const is defined when the varibale remains constent

    ### Example

      const a = 2;
      console.log(++a);

      - here a value is changing so it show error assigned to constant variable which means we cannot use const on changable value
      - we have to switch to let

      let a = 2;
      console.log(++a);

      - now the value is printed as increment

# Data Types

- Data Types are assigned value that has certain type
- Data Types are of 2 types
- to check the dataType use typeOf()

  console.log(typeof("hello"))

- the output is string

## Primitvie

- Primitive datatypes are those which are built in data types
- There are 8 Primitive DataTypes


    ### string
      - string is denoted by " " or  ' '  or ` `.
      - string in different case
      - string are always written with in the quotations

        console.log('ram said," he is a hero"');
        console.log("ram said,' he is a hero'");

      - in this case we use the combination is single inverted comma and doubble inverted comma
      - in some case we have to use both single inverted comma and double inverted comma we can use tilt comma ( ` ` ).

        console.log(`ram say's, "he is not a god"`);

      - using the tilt quotation ` ` we can wrap the variable value with ${ variable Name }
        let ram = "he is a human";
        console.log(`ram say's, "he is not a god, ${ram}"`);

    ### Number
      - number is used to define the integer value
        let a = 20;
        console.log(typeof(a));
      - NaN means NotANumber

    ### Boolean
      - Booleans means the value is either true or false
        let a = true;
        console.log(typeof(a));

    ### Objects
      - object can be both primitive and Non Primitive
      - Anything is an object
      - object is denoted by [ ] or { }
        let a = [ ]
        console.log(typeof(a));

    ### Undefined
      - undefined means the value is not defined
        let a ;
        consle.log(typeof(a));

    ### Null
      - we can print null directly using the null
      - null is used to define that tha value is empty
        let a = null;
        console.log(a);

    ### BigInt
      - bigint summons large sum of integer number that are too big for the javascript to understand with n at the end
      - all numbers are sorted in 64 bit.

        let a = 982384792374784562837465732746527;
        console.log(BigInt(a));

    ### symbol
      - Using Symbol() to create a unique identifiers,

        let a = Symbol(1);
        let b = Symbol(1);
        console.log(a == b);

      - the result is false as it creates different identifiers for the same value

## Non Primitive

    - None primitve DataTypes are those which are user Defined
    - there are 2 non primitive datatypes.

    ### Array
      - Collection of similar dataTypes is called an array
      - an Array is denoted by Array() Keyword or  [ ]

        let a = [ ]
        console.log(typeof(a));

      - although it is an array it prints object

    ### object
      - Object can be both non primitiva and userDefined
      - Anything is an object
      - object is denoted by [ ] or { }
        let a = [ ]
        console.log(typeof(a));

# Operators

- Operators are used to perform different type of mathmatical and logical computations
- There are some Types of Operations to be performed.

## 1. Arithmetic Operators

    - Arthamatic operators are used to perform the arthametic operations

    ### Addition

      console.log( 1 + 1);

    ### Subtraction

       console.log( 1 - 1 );

    ### Multiplications

      console.log( 2 * 4 );

    ### Division

      console.log( 4 / 2 );

    ### Modulus
      - modules cheks the remider of the operations

        console.log( 2 % 2);

    ### Exponentiation ( ES6 )
      - it gives the value multiplied by the given number

          console.log(3**3);

    ### increment
      - increment increases the value by one
        let a = 2;
        console.log(++a);
        console.log(a++);

    ### Decrement
      - decrement decreases the value by one
        let a = 2;
        console.log(a--);
        console.log(--a);

## Assignment Operators

    - Assignment operators assign values to JavaScript variables.
    - the decleartion should not be seprated

    ### 1. =
    let a = "a";
    console.log(a);

    ### 2. += ( x + y = x )

    let a = 3;
    a+= 4;
    console.log(a);

    ### 3. -= ( x - y = x )

    let a = 3;
    a-= 4;
    console.log(a);

    ### 4. *= ( x * y = x )

    let a = 3;
    a*= 4;
    console.log(a);

    ### 5. /= ( x / y = x)

    let a = 3;
    a/= 4;
    console.log(a);

    ### 6. **= ( x**y = x)

    let a = 3;
    a**= 4;
    console.log(a);


    ### 7. %= (x % y = x)

    let a = 3;
    a%= 4;
    console.log(a);

## Comparison Operators

    - comparision operator are used for the logical decision either yes or no or True or false

    ### 1. ==
      - it compares given value.
      - the decleartion should not be seprated

      console.log( 3 == 3 )

    ### 2. ===
      - it compares the value and dataType
      - if the values are same but the datatype is different then it prints false.
      - the decleartion should not be seprated

        console.log( 3 === 3 )    // true
        console.log( 3 === "3" )   // false

      - the first 3 is a number datatype and the 2nd one is string dataType although the value is same it prints false as it checks both the value and datatype.

    ### 3. != ( not Equal to )
      - the not Eaual to checks the value only and prints the opposite logic ( if it's true then it print false and vice versa )
      - it is same as == and prints opposite.
      - the decleartion should not be seprated

      console.log( 3 != 3 )         // false

    ### 4. !== ( not Equal to Equal to )
      - the !== ( not eual to equal to ) is same as === as it checks both datatype and value but prints the opposite logic.
      - the declaration of !== should not be seprated like this ! = =

      console.log( 3 !== 3);     // false
      console.log( 3 !== "3")

    ### 5. > ( Grater Then )
      - it shows which value is greater

      console.log( 3 > 3 )    // false
      console.log( 4 > 3 )    // true

    ### 6. < ( less then )
      - it shows which value is less and print the logical answer

        console.log( 3 < 3 )    // false
        conosle.log( 3 < 4 )    // true

    ### 7. <= ( less then Eaual to )
      - it shows which value is less and equal to and print the logical answer
      - the decleartion should not be seprated

        console.log( 3 <= 3 )    // true
        conosle.log( 3 <= 4 )    // true

    ### 8. >= ( Grater then Eaual to )
      - it shows which value is less and equal to and print the logical answer
      - the decleartion should not be seprated

        console.log( 3 >= 3 )    // true
        conosle.log( 3 >= 4 )    // false

## Logical operator

    - logical operators prints the logical value as true or false

    ### && ( and and )
      - && insures all the condition are satisfied
      - unless every condtion is satisfied it doesnot print true

        console.log( 2 >= 2 && 3 < 2  && 2 == 2);   // false

    ### || ( or or )
      - || insures one of the condition is true and prints the true value

        console.log( 2 >= 2 || 3 < 2 || 2 == 2);    // true

## Ternery Operator ( ? )

    - Ternery Operator is used to perform if else condition only
    - it assigns a value to a variable based on some condition.

      console.log( 2 == 2 ? "equal xa": "xina");


#### -----------------------------------------------------------------------------------------------

# Conditional Statement

- Conditional statement are those which checks the condtion and prints the true condition statement
- the basic syntex of condtional statement is:

  if( condition ){

  //code here

  }

- There are 4 conditional statment and they are discussed below

## if condtion

- if condition checks the true condtion only and prints the single output
- Syntex:

  if( condition ){

  //code here

  }

#### Example:

    if( 3 > 4 ){
      document.getElementById('ifcondition').innerHTML = " Yappy !!! ";
    }

## if else

    - it checks two conditions at a time
    - Syntex:

        if( condition ){

          // code here

        }else{

          // code here

        }

    Example:

      if( 3 > 3 ){
        document.getElementById('ifcondition').innerHTML = " Yappy !!! ";
      }else{
        document.getElementById('ifcondition').innerHTML = " Opps !!! ";
      }


## if else if
    - it is used to check multiple conditions at a time  
    - Syntex:

      if( condition ){

        //code here

      } else if ( condition ){

        //code here

      }else if ( condition ){

        // code here

      } else {

        // defult output

      }

    - Example

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

## Switch Condition
    - Switch condtion is the conditional statement that checks best possible case
    - Sytnex

        let value = "wal"
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


# function 
  - when certain code is written within the block is called a function
  - function can be defined as function keyword or as a variable 
  - function runs when we call the function 
  - Syntex:

    function funName (){

      // code here

    }

    funName()     // calling the function

  - function can be of two types
  - non Parameterized Function and Parameterized function

  - Non Parameterized function are those which doesnot require any parameter

    Example:

      fucntion f(){
        console.log("this is non parameterized function as f ( this is empty  )")
      }
      f();

  - Parameterized function are those which passes parameter for opertaions
  - n numbers of parameter can be defined.

    Example:
      function f(a, b){
        console.log( a + b)
      }
      f(4,5);
