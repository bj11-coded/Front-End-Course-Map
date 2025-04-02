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
    Syntex:

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

  ## ES6 arrow function
  - Es6 model is the new model that implements differnet features in javascript
  - Es6 model has introduced new arrow function which is based on arrow model
  - in Arrow function normal variable is defined as variable says its a function when a () is inside the variable

  ### sytnex: 
        const f = () => {
          console.log("this is function");
        }
        f();
  
  - when no parameter is defined it is called non-parametraized arrow function
  - when parameter is defined it is call parametraized arrow function

        const f = (param) => {
          console.log("this is function", param);
        }
        f("arrow");


  ### Example 
    const fun = (param1, param2) =>{
      if(param1 > param2){
        console.log("the param is valid")
      }else{
        console.log("param is not valid")
      }
    }

    let param1 = prompt("Enter the 1st value");
    let param2 = prompt("Enter the 2nd value");
    fun( param1,param2);


# OBJECT
  - every thing is an object
  - object is a method or defination of properties and values
  - object is defined by [ ] or { } where [ ] is an array but datatype is object
  
    Dummy object 

        const obj = { name: "Ram" };
        console.log(typeof(obj));

        here name is a property where ram is a string value.
  
  - to print ram we should target the property

        console.log(obj.name);

    ### Example

        const obj = { 
          name: "Ram",
          country: "aayodha",
        };
        console.log(typeof(obj))
        console.log(obj.name);
        document.getElementsByTagName('p')[1].innerHTML = obj.name;
        document.getElementsByTagName('p')[2].innerHTML = obj.country;
        const para1 =document.getElementsByTagName('p')[0]
        para1.style.padding = "20px";
        para1.innerHTML = JSON.stringify(obj);

  - Add items on object 

          obj.wife = "sita";
          console.log(obj);
          para1.innerHTML = JSON.stringify(obj);

  - delete items on object

        delete obj.country;
        console.log(obj);
        para1.innerHTML = JSON.stringify(obj);

  - freez object 

        Object.freeze(obj)
        obj.brother = "laxamn"
        para1.innerHTML = JSON.stringify(obj);


  - Object method is used to declare an Object with the new keyword
  - it creates an empty object.

            const objOne = new Object();
            console.log(objOne);

            const objOne = new Object();
            objOne.name = "butwal"
            objOne.address = "Buspark"
            objOne.ward = 8
            objOne.lives = true
            console.log(objOne);

    - suppose we have an object as:

            const objOne = {
              name:"butwal",
              address: { 
                pernament: "palpa",
                temprory:"butwal"
              },
              ward: 8,
              livesThere = true
            }

    - while creating an object inside an object we should use new Object() method

    ### Example

          const objOne = new Object();
          objOne.name = "butwal"
          objOne.address = new Object();
          objOne.address.pernament = "palpa"
          objOne.address.temprory = "butwal"
          objOne.ward = 8
          objOne.lives = true
          console.log(objOne);


## constructor
  - While many object of same type are created we use object Constructor function
  - it creates object of similar type and can be use multiple time 
  - it uses this keyword to denote the object and access it 
  - this represents the global object outside the function 
  - this is used while creating a constructor
  - always keep the constructor name in capitalization format

  ### Example
  
    function Animal ( name, action ){
      this.name = name;
      this.action = action;

      this.does = function(){
        return `${this.name} ${this.action} all the time`;
      }
    }


    const animalOne = new Animal ( "Dog","Barks");
    console.log(animalOne)


# class Based Constructor
  - it is based on the object orianted programming.
  - class and constructor key is used to create an object 
  - we can lern about encapsulation, inheritance 
  - Redability of code is done using constructor

   ### Example

    class Animal{
      constructor( name , action ){
        this.name = name
        this.action = action 
      }

      dog(){
        return `${this.name} is ${this.action} at some one `;
      }

      cat(){
        return `${this.name} are so ${this.action} `;
      }
    }

    const AnimalOne = new Animal( "camal" ,"staring");
    const AnimalTwo = new Animal( "cat" ,"Adorable");
    console.log(AnimalOne.dog());
    console.log(AnimalTwo.cat());

  
  ### Inheritance 
  - inheritanace menas inheritaing others property that mean  parent child concept
  - the object hat is inheritated by parents can be inheritaed by children
  - we extend main class into another class 
  - super is used to inherit the property to another class

    ### Example:

        class Animal{
          constructor( name , action ){
            this.name = name
            this.action = action 
          }

          dog(){
            return `${this.name} is ${this.action} at some one `;
          }

          cat(){
            return `${this.name} are so ${this.action} `;
          }
        }


        class WildAnimal extends Animal{
          constructor(name, action, food ){
            super(name, action)
            this.food = food
          }

          tiger(){
            return  `${this.name} is  ${this.action} ${this.food} after hunting an animal`
          }

        } 

        const AnimalOne = new Animal( "camal" ,"staring");
        const AnimalTwo = new Animal( "cat" ,"Adorable");
        const WildAnimalOne = new WildAnimal("Tiger", "Eating","Meat")
        console.log(AnimalOne.dog());
        console.log(AnimalTwo.cat());
        console.log(WildAnimalOne.tiger());


# Array
  - Array is collection of similar data
  - Arrary is represented by [ ] but the typeof is an object.

       console.log( [ ])
  
  - Array is used in the collection of large amount of data like api 

      let array = [1,2,3,4,5,6,7]
       console.log(array[0]);

  - where elemnts inside an array is counted on the basis of index it is stored in 
    - index: element
    - 0 = 1
    - 1 = 2
    - 2 = 3
    - 3 = 4
    - 4 = 5
    - 5 = 6
    - 6 = 7 

    - so if i have to show 4 then i have to target index 3

          let array = [1,2,3,4,5,6,7]
          console.log(array[3]);     //output: 4

          

  - Array always counts from 0 beacuase memeory is always stored in binary form i.e. 0 and 1 . so to not skip 0 value space in memoery we count from 0

  ## Single dimensional array

  - the noraml array is called single dimensional array.
  
  ### Example

      let array = [1,2,3,4,5,6,7]
          console.log(array);    

  

  ## Multi or two dimensional array

  - it has more then one array on an array
  - it is used for matrix multiplication

  ### Example

        let arry = [[1,2,3],[3,4,6,7]]
        console.log(arry);

  ## create a multi dimensional array
  - we use array method to create an empty array
  - using new keyword we can declare an array


          let arys = new Array()
          console.log(arys)

  ### Example
  - with the combination of index we can create an array with an element
  - if one of the index is missed it prints empty in console and nothing in the page

        const arys = new Array();
          arys[0] = new Array();
          arys[0][0] = 1;
          arys[0][1] = 2;
          arys[0][2] = 3;
          arys[1]= new Array();
          arys[1][0] = 4
          arys[1][1] = 5
          arys[1][2] = 6
        console.log(arys)


# Array Methods

- Array Methods includes manipultions of array elements 

  ## Length

  - it calculates the total length of the array 

          const arry = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,,9956,434,45,45];
          console.log(arry.length);

  - to calculate the index we can simply use lenght-1

          const arry = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,,9956,434,45,45];
          console.log(arry.length-1);

  ## toString()
    - it converts the array into string 

            const arryss = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,,9956,434,45,45];
            document.querySelector(".arrayMethod").innerHTML = `<h3>${arryss.toString()}</h3>`;

  ## at()
  - at method returns the element at certain index

          const arryAt = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,45];
            document.querySelector(".arrayAt").innerHTML = `<h3>${arryAt.at(24)}</h3>`;

  ## join()
  - join method is used to combine all the elements 

          const arryJoin = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,45];
            document.querySelector(".arrayJoin").innerHTML = `<h3>${arryJoin.join("-")}</h3>`;

  ## pop()
  - pop removes the value from the last element
  - it shows the number of index in an array 
  - to print the new index after pop just console the value


        const arryPop = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,45];
            document.querySelectorAll(".arrayPop")[0].innerHTML = `<h3> total Element: ${arryPop.pop()}</h3>`;
            document.querySelectorAll(".arrayPop")[1].innerHTML = `<h3>new Array After pop: ${arryPop}</h3>`;

  ## Push()
  - push element pushes the new element array at the end 
  - it shows the number of index in array
  - to print the new index after the push just print the array after push method


        const arryPush= [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,40];
            document.querySelectorAll(".arrayPush")[0].innerHTML = `<h3> total index: ${arryPush.push( "hello" )}</h3>`;
            document.querySelectorAll('.arrayPush')[1].innerHTML = `<h3> new Array After Push: ${arryPush}</h3>`;
          let arys = new Array()
          console.log(arys)

  ### Example
  - with the combination of index we can create an array with an element
  - if one of the index is missed it prints empty in console and nothing in the page

        const arys = new Array();
          arys[0] = new Array();
          arys[0][0] = 1;
          arys[0][1] = 2;
          arys[0][2] = 3;
          arys[1]= new Array();
          arys[1][0] = 4
          arys[1][1] = 5
          arys[1][2] = 6
        console.log(arys)


# Array Methods

- Array Methods includes manipultions of array elements 

  ## Length

  - it calculates the total length of the array 

          const arry = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,,9956,434,45,45];
          console.log(arry.length);

  - to calculate the index we can simply use lenght-1

          const arry = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,,9956,434,45,45];
          console.log(arry.length-1);

  ## toString()
    - it converts the array into string 

            const arryss = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,,9956,434,45,45];
            document.querySelector(".arrayMethod").innerHTML = `<h3>${arryss.toString()}</h3>`;

  ## at()
  - at method returns the element at certain index

          const arryAt = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,45];
            document.querySelector(".arrayAt").innerHTML = `<h3>${arryAt.at(24)}</h3>`;

  ## join()
  - join method is used to combine all the elements 

          const arryJoin = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,45];
            document.querySelector(".arrayJoin").innerHTML = `<h3>${arryJoin.join("-")}</h3>`;

  ## pop()
  - pop removes the value from the last element
  - it shows the number of index in an array 
  - to print the new index after pop just console the value


        const arryPop = [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,45];
            document.querySelectorAll(".arrayPop")[0].innerHTML = `<h3> total Element: ${arryPop.pop()}</h3>`;
            document.querySelectorAll(".arrayPop")[1].innerHTML = `<h3>new Array After pop: ${arryPop}</h3>`;

  ## Push()
  - push element pushes the new element array at the end 
  - it shows the number of index in array
  - to print the new index after the push just print the array after push method


        const arryPush= [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,40];
            document.querySelectorAll(".arrayPush")[0].innerHTML = `<h3> total index: ${arryPush.push( "hello" )}</h3>`;
            document.querySelectorAll('.arrayPush')[1].innerHTML = `<h3> new Array After Push: ${arryPush}</h3>`;

  ## shift()
  - shift deletes the first element from an array
  - shift method deletes and creates a new array

        
          const arryShift= [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,40];
            document.querySelectorAll(".arrayShift")[0].innerHTML = `<h3> first element: ${arryShift.shift( )}</h3>`;
            document.querySelectorAll('.arrayShift')[1].innerHTML = `<h3> new Array After Shift: ${arryShift}</h3>`;

  ## unshift()
  - unshift method add the element from the first index
  - it is used to insert element like push
  - it shows total number of index increased by one


          const arryunShift= [3,4,7,45,89,9,4,23,45,6,76,8,9,34,99,56,54,87,9,5,45,34,556,4,7,6,3423,43,345,5,6,7,54,7,8,87,43,9956,434,45,40];
            document.querySelectorAll(".arrayunShift")[0].innerHTML = `<h3> total no of element: ${arryunShift.unshift( "added" )}</h3>`;
            document.querySelectorAll('.arrayunShift')[1].innerHTML = `<h3> new Array After unShift: ${arryunShift}</h3>`;


  ## slice()

  - slice method is used to seprate the array element from a given start index to the end index
  - slice ( start, end);
  - it checks the gap between the start index and end index

    ### Example
            
    #### in html

              <h2> Slice </h2>
              <p class="sliceArray"></p>
              Start:<span class="start"></span>
              End:<span class="end"></span>
              <p id="slice"></p>
    
    #### in js
            
            // initial array
              const sliced = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "k", "L"];
              // print the array in page
                document.getElementsByClassName('sliceArray')[0].innerHTML = `Initial Array = [  ${sliced} ]`;

                // function for click event
              const slic = () =>{
                // start index value 
                const start = document.getElementById('start').value;
                // start index value li print garey xu
                document.querySelectorAll('.start')[0].innerHTML = `<strong style="background-color:green; color:white"> ${start} </strong>`
                // end index value
                const end = document.getElementById('end').value;
                // end index value li print garey xa
                document.querySelectorAll('.end')[0].innerHTML = `<strong style="background-color:red; color:white">${end} </strong>`
                // slice opertion perform vaxa
                document.getElementById('slice').innerHTML = sliced.slice(start, end);
              }

  ## Splice()

  - splice cuts the elements according to the length given
  - it use two value the first index to start and the number to cut down
  - splice( start, length)

  ### Example:

   #### in html

              <h2> Splice </h2>
              <p class="spliceArray"></p>
              Start:<span class="starts"></span>
              length:<span class="length"></span>
              <p id="splice"></p>
              <input type="text" name="" id="starts" placeholder="start number">
              <input type="text" name="" id="length" placeholder="length number">
              <button onkeydown="spliced()"> Splice an Array </button>
    
    #### in js
            
            // initial array
              const splices = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "k", "L"];
              // print the array in page
                document.getElementsByClassName('spliceArray')[0].innerHTML = `Initial Array = [  ${splices} ]`;

                // function for click event
              const spliced = () =>{
                // start index value 
                const start = document.getElementById('starts').value;
                // start index value li print garey xu
                document.querySelectorAll('.starts')[0].innerHTML = `<strong style="background-color:green; color:white"> ${start} </strong>`
                // end index value
                const length = document.getElementById('length').value;
                // length jati xa tai anuser value li print garey xa
                document.querySelectorAll('.length')[0].innerHTML = `<strong style="background-color:red; color:white">${length} </strong>`
                // slice opertion perform vaxa
                document.getElementById('splice').innerHTML = splices.splice(start, length);
              }
                  
              

  ## includes()
  - it checks wether the element is on the array or not 
  - it searches the value and print in boolean form. if there's a value it prints true else false

  #### Example

            const aryInc = [32,41,92,18,9, 14, 31, 23];
            console.log(aryInc.includes(9));

  ## indexOf()
  - indexof checks the index in which  the give value falls.
    - if it finds the value it prints the index of the value but if it doesnot then it returns negative value

  #### Example

            const aryInc = [32,41,92,18,9, 14, 31, 23, 27, 15, 6, 65];
            console.log(aryInc.indexOf(9));

  ## lastIndexOf()
  - lastIndexOf finds last occuring value of the given array
  - it is same as indexof
  - if it finds the value it prints the index of the value but if it doesnot then it returns negative value
  - the first value is the serching value and the last value is upto where should we search ( value, upto Index )

  #### Example

            const aryLast = [32,41,92,18,9, 14, 31, 23, 27, 15, 6, 65];
            console.log(aryLast.lastIndexOf(14, 4));

  ## sort ()
  - sort is used for shorting an array 
  - it changes the orginal array
  - sort Method arranges either in accending order
  - noramal sorting arrange the number according to the first value 
  - if the values are  [ 2, 22, 32,222] then it arranges as [2 , 22, 222, 32 ] as it checks the first value of each number.

  #### Example

             const arySort = [32,41,92,18,9, 14, 31, 23, 27, 15, 6, 65];
            console.log(arySort.sort());

  - if we have to perform correct accending and decending order then use

              const arySort = [32,41,92,18,9, 14, 31, 23, 27, 15, 6, 65];
                console.log(arySort.sort( 
                  function(a, b){
                    return a - b;
                  }
                ));

  - for the decending order perform b - a

              const arySort = [32,41,92,18,9, 14, 31, 23, 27, 15, 6, 65];
                console.log(arySort.sort( 
                  function(a, b){
                    return b - a;
                  }
                ));


  ## reverse ()
  - reverse sorts an array in decending order according to the index element
  - if the first index value is in first then it switch to the last element and vice versa

  #### Example

            const aryRev = [32,41,92,18,9, 14, 31, 23, 27, 15, 6, 65];
            console.log(aryRev.reverse());
  

  ## toSorted()
  - tosort creates a new array without changing the orginal array
  - it is the safest way of creating a new array

  ### Example:

          const arySorted = [32,41,92,18,9, 14, 31, 23, 27, 15, 6, 65];
            console.log(arySorted.toSorted());

  
  ## toReversed()
  - toReversed creates a new array without changing the orginal array
  - it is the safest way of creating a new array

  ### Example:

          const aryReversed = [32,41,92,18,9, 14, 31, 23, 27, 15, 6, 65];
          console.log(aryReversed.toReversed());


# Array Itteration 
- Array iteration is used to iterate every element
- it works as a loop method
- every elements are itterated one after another

## 1. forEach( )
- forEach is an itteration method that iterates the each element from an array as a callback function.
- it doenot require index to print the output
- it doesnot create a new Array
- the function takes 3 arguments:

    * The item value - value prints the elements in an array
    * The item index - index prints the indexes in an array
    * The array itself - it prints the whole array upto the number of index.

  #### Syntex

            array.forEach((value, index , array)=>{
                console.log( value )
                console.log( index )
                console.log( array )
            })

  - Although the arguments are switched as ( index, value , array) the index prints the elements in an array and value prints indexes in an array.
  - so first argument says the elements and 2nd argument says the index and last one prints whole array regardless the name ( <i> whatever name can be placed </i> )

  ## 2. Map( )
  - Map is used to iterate each and every element in an array  as a callback function.
  - it uses loop method to iterate each and every element.
  - it creates a new array without changing the orginal array.
  - it uses three argument.

    * The item value - value prints the elements in an array
    * The item index - index prints the indexes in an array
    * The array itself - it prints the whole array upto the number of index.


  #### Syntex

            array.map(( value, index, Array )) =>{
              console.log(value);
              console.log(index);
              console.log(Array);
            }


  ## 3. filter( )
  - filter is used to filterout the true element of an array 
  - it sets a condition if the conditon is passed then the element is iterated 
  - it uses three argument.

    * The item value - value prints the elements in an array
    * The item index - index prints the indexes in an array
    * The array itself - it prints the whole array upto the number of index.

  #### Syntex

         const arrayFilter = [43,44,45,47, 48, 49, 50]
           const aryAfterFilter = arrayFilter.filter(( value, index, Array ) =>{
                      return value > 45;
                    })

          console.log(aryAfterFilter);

  ## 4. Reduce ( )
  - Reduce method is used to reduce the elements to the single value
  - it works from left-to-right
  - it mainly uses 2 argument:
      * initialValue: for the first comming value
      * totalValue: for the accumulated value
  
  #### Syntex:

              const arryReduce = [4,5,6,7,8,9,10,11,12,13,14,15];
              const totalVal = arryReduce.reduce((initialValue, totalValue)=>{
                return initialValue * totalValue;
              })
              console.log(totalVal);
  
  ## 5. reduceRight()
  - it is same as reduce method but it works from right to left

  #### syntex:

          const arryReduce = [4,5,6,7,8,9,10,11,12,13,14,15];
              const totalVal = arryReduce.reduceRight((initialValue, totalValue)=>{
                return initialValue * totalValue;
              })
              console.log(totalVal);

  ## 6. Every ( )
  - Every method says that every element should be satisfied to the condition for the itteration
  - it uses single arguments
  
  #### Syntex:

              const everyArray = [4,5,6,7,8,9,10,11,12,13,14];
              const satisfied = everyArray.every((value)=>{
                return value > 8;
              })
              console.log(satisfied);

  - it returns false as every element doesnot pass the condition


  ## 7. some ( )
  - some method is used to check whether some value passes or not 
  - it uses single argument

  #### Syntex:

               const someArray = [4,5,6,7,8,9,10,11,12,13,14];
              const satisfied = someArray.some((value)=>{
                return value > 8;
              })
              console.log(satisfied);


  ## 8. entries ( ) 

  - The entries() method returns an Array Iterator object with key/value pairs:
  - The entries() method does not change the original array.

  #### Syntex:

              const fruits = ["Banana", "Orange", "Apple", "Mango"];
              const frut = fruits.entries(); 
              console.log(frut);  

              for ( let fruty of frut){
                console.log(fruty)
              }

              output: [0, "Banana"]
                      [1, "Orange"]
                      [2, "Apple"]
                      [3, "Mango"]

  ## Sprade Operators
  - The sprade ( ... ) operator expands an iterable (like an array) into more elements
  - it joins more the one array into one 
  - it is like a push method 

  #### Syntex:

              const oneArray = [1,2,3,4,5]
              const twoArray = ["hello","fellow","blow","melo"];
              const threeArray = [true, false, true, true]

              const combine = [...oneArray, ...twoArray, ...threeArray];
              console.log(combine);


# Date

- Date object is used to define the date in a javascript
- it takes the computer time zone and prints the date 

#### Syntex:

          const date = new Date();
          console.log(date);

 ## date:
 - use getDate() method to print todays date

          const date = new Date()
          const todaysDate = date.getDate()
          console.log(todaysDate);
          

  ## year
  - use getYear() method to print year

          const date = new Date()
          const year = date.getYear();
          document.getElementsByClassName('getDate')[0].innerHTML = year;

  ## Month
  - use getMonth() method to print current month

          const date = new Date()
          const month = date.getMonth();
          document.getElementsByClassName('getDate')[1].innerHTML = month;
  
  ## day
  - use getDay() method to print day
  - day is calculated starting from 0 use + 1 to display current day

          const date = new Date()
          const day = date.getDay();
          document.getElementsByClassName('getDate')[1].innerHTML = day;

  - to represent date in string we use switch case

          const date = new Date()
          const day = date.getDay();
            switch(day){
              case 0:
                document.getElementsByClassName('getDate')[0].innerHTML = "sunday";
                break;
              
              case 1:
                document.getElementsByClassName('getDate')[0].innerHTML = "Monday";
                break;

              case 2:
                document.getElementsByClassName('getDate')[0].innerHTML = "Tuesday";
                break;
              
              case 3:
                document.getElementsByClassName('getDate')[0].innerHTML = "Wenesday";
                break;
                
              case 4:
                document.getElementsByClassName('getDate')[0].innerHTML = "Thrusday";
                break;
              
              case 5:
                document.getElementsByClassName('getDate')[0].innerHTML = "Friday";
                break;
              
              case 0:
                document.getElementsByClassName('getDate')[0].innerHTML = "Saturday";
                break;

              default:
                document.getElementsByClassName('getDate')[0].innerHTML = "Invalid number";

            }

  ## Hour
  - use getHour() method to get hour

          const date = new Date()
          const hour = date.getHour();
          document.getElementsByClassName('getDate')[1].innerHTML = hour;

  
  ## Minute
  - use getMinutes() method for minutes

          const date = new Date()
          const minute = date.getMinutes();
          document.getElementsByClassName('getDate')[1].innerHTML = minute;

  ## Seconds
  - use getSeconds() method for seconds

          const date = new Date()
          const seconds = date.getSeconds();
          document.getElementsByClassName('getDate')[1].innerHTML = seconds;

  ## miliSeconds
  - use getMilliseconds() method for the miliseconds

          const date = new Date()
          const miliSeconds = date.getMilliseconds();
          document.getElementsByClassName('getDate')[1].innerHTML = miliSeconds;

  ## UTC Time
  - to get the universal time coordinates use getUTCTime and forother getUTCName

          const date = new Date()
          const todaysDate = date.getUTCDate()
          const year = date.getUTCYear();
          const month = date.getUTCMonth();
          const day = date.getUTCDay();
          const hour = date.getUTCHour();
          const minute = date.getUTCMinutes();
          const seconds = date.getUTCSeconds();
          const miliSeconds = date.getUTCMilliseconds();

  ## SetDate
  - set date is used to set the date accoring to the will


  #### for local:
          
          const date = new Date("2000/2/12")
          const todaysDate = date.setDate("1997/08/08")
          const year = date.setYear(2000);
          const month = date.setMonth(8);
          const day = date.setDay(12);
          const hour = date.setHour(12);
          const minute = date.setMinutes(12);
          const seconds = date.setSeconds(11);
          const miliSeconds = date.setMilliseconds(123);

  #### for UTC:

          const date = new Date("2000/2/12")
          const todaysDate = date.setUTCDate("1997/08/08")
          const year = date.setUTCYear(2000);
          const month = date.setUTCMonth(12);
          const day = date.setUTCDay(2);
          const hour = date.setUTCHour(3);
          const minute = date.setUTCMinutes(11);
          const seconds = date.setUTCSeconds(19);
          const miliSeconds = date.setUTCMilliseconds(222);



# loop 

- loop is used to simplify the repeated task 
- loop runs until the condtion is true or satisfied.
- loop means continous run to some point.
- loop makes code more concise and efficient.
- if we have to print somting maybe 5 time then we use loop which is easier

#### Types of loop

  - For Loop
      - for of 
      - for in
  - while loop
  - Do loop


## For loop

  - for loop is one of the process of looping where a value is initialized, a condition is given and a increment or decrement is placed

  #### Syntex:

            for ( initalization; condtion ; increment / decrement ){

              //code here

            }

  #### Example:
  - let us suppose we have to print value from 1 to 5 at once we use for loop for the convienent output 

          for ( let i = 0; i < 5; i++){
            console.log(i);
          }

  - <strong> How loop works?? </strong>
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/loop2.png" height="200" width="auto" alt="loop structure">
    - in this case:
        * i is initalize with 0 as inital value is zero  so  the i value while comparing with <b> i < 5 </b> will  be true 
        * as soon as the value is true it goes to the console.log(i) where the current value of <b> i </b> is printed
        * after the value is printed it goes to the increment as the value increases by 1
        * now tha value of i changes to 1 due to the increment and again the cycle continues
        * at some point the value of i increases then the limit 5 where the conditon will be false. 
        * At that point loop breaks.


  ### Nasted loop 
  - nested loop means a loop inside another loop 
  - if the condition is true then only another loop works

  #### syntex:

            for( initalizaiton; condition; increment/decrement ){

              for ( initalization; condition; increment/decrement){

                <!-- code here -->

              }
            }


  #### Example:

  - lets print the multiple table of 5 

            for ( i = 5; i === 5; i++){
              for( j = 1; j <= 10; i++){
                console.log(`${i} * ${j}: ${i * j }`)
              }
              console.log('/n');
            }

  - multiple table from 1  to 10

            for ( i = 1; i <= 10; i++){
              for( j = 1; j <= 10; j++){
                console.log(`${i} * ${j} = ${i * j }`)
              }
              console.log('/n');
            }

  - pattern print
    <p>1</p>
    <p>12</p>
    <p>123</p>
    <p>1234</p>
    <p>12345</p>


          for( i = 1; i <=5; i++){
          for(j=1; j<=i; j++){
            document.write(j);
          }
          document.write('<br>')
        }


    <p>12345</p>
    <p>1234</p>
    <p>123</p>
    <p>12</p>
    <p>1</p>

        for( i = 5; i >= 1; i--){
          for(j=1; j <= i; j++){
            document.write(j);
          }
          document.write('<br>')
        }

  <p>12345</p>
  <p>12345</p>
  <p>12345</p>
  <p>12345</p>
  <p>12345</p>


        for( i = 1; i <= 5; i++){
          for(j=1; j <= 5; j++){
            document.write(j);  
          }
          document.write('<br>')
        }

````
  *****
  *****
  *****
  *****
  *****
````


        for( i = 1; i <= 5; i++){
          for(j=1; j <= 5; j++){
            document.write("*");  
          }
          document.write('<br>')
        }

````
 *
 * *
 * * *
 * * * *
 * * * * *
 *
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 * * * * * * *
 *
 *
 *
````

        for( i = 1; i <=5; i++){
          for(j=1; j<=i; j++){
            document.write("* &nbsp;");
          }
          document.write('<br>')
        }
        for( i = 1; i <=7; i++){
          for(j=1; j<=i; j++){
            document.write("* &nbsp;");
          }
          document.write('<br>')
        }
        for(let k = 1; k <=3; k++){
          document.write('* <br>');
        }

  
          
   - Christmas Tree

            for( let i = 1; i < 7; i++){
              let str= ' &nbsp; '.repeat(7-i);
              let str2 = '*'.repeat((2*i)-1); 
              document.write(str + str2 + str + '<br>')
            }



            for( let i = 1; i < 7; i++){
              for(j = 5; j>= i; j--){
                document.write('&nbsp;')
              }
              for(k=1; k < ((2*i)-2); k++ ){
                document.write('*')
              }
              document.write('<br>')
            }
  
  - dimond shape

            for( let i = 1; i < 7; i++){
              for(j = 5; j>= i; j--){
                document.write('&nbsp;')
              }
              for(k=1; k < ((2*i)-2); k++ ){
                document.write('*')
              }
              document.write('<br>')
            }

            for( let i = 5; i > 1; i--){
              for(j = 5; j>= i; j--){
                document.write('&nbsp;')
              }
              for(k=1; k < ((2*i)-2); k++ ){
                document.write('*')
              }
              document.write('<br>')
            }

    - Pattern Print

      1 <br>
      12<br>
      123<br>
      1234<br>

          for(let i= 1; i <=4; i++){
            for(let j =1; j<=i;j++){
              document.write(i);
            }
            document.write('<br>');
          }

  - <strong> ***** </strong> <br>
    <strong> &nbsp;**** </strong> <br>
    <strong> &nbsp;&nbsp;*** </strong> <br>
    <strong> &nbsp;&nbsp;&nbsp;** </strong> <br>
    <strong> &nbsp;&nbsp;&nbsp;&nbsp;* </strong> <br>

            for(i=1; i<=5; i++){
              for(j=1; j<i; j++){
                document.write('&nbsp;');
              }
              for(k=5; k>=i; k--){
                document.write('*');
              }
              document.write('<br>');
            }

  - increasing number
    ```
    1
    23
    456
    78910
    ```

    ```
      let count = 1;
      for(i=1; i<=4; i++){
        for(j=1; j<=i; j++){
            document.write(count);
            count++;
        }
        document.write('<br>');
      }
    ```
````
0101
1010
0101
1010

````

    
      for(i=1; i<=4; i++){
        for(j=1; j<=4; j++){
          if((i+j)%2 == 0){
            document.write('1');
          }else{
            document.write('0');
          }
        }
        document.write('<br>');
      }


````
*****
*   *
*   *
*   *
*****
````

      for(i=1; i<=5; i++){
        for(j=1; j<=5; j++){
          if(i == 1 || i == 5 || j == 1 || j == 5){
            document.write('*');
          }else{
            document.write(' &nbsp;');
          }
        }
        document.write('<br>');
      }

## Types of For loop

### for in 
- for in uses the key value to iterate an object
- x in this eaxmple is a key for the iteration of object value
- <strong> Syntex: </strong>
````
const obj= {
  "name": "hero",
  "type": "zero"
}
 for( let x of obj){
  console.log(obj[x])
 }
````
- The for in loop iterates over a obj object.
- Each iteration returns a key (x).
- The key is used to access the value of the key.
- The value of the key is person[x].

### for of
- for of is used to iterate itterable elements.
- it itterates array, string, map, nodelist but not an object.
- while using object it shows an error as obj is not iterable.
- <strong> Syntex: </strong>

````
let iteArray = [2,3,5,8,12,9];
for( let i of iteArray){
  console.log(i);
}
````
                            
## While Loop

- while loop is the loop method that checks the condition and prints the value until the condition is true 
- the value defers accoring to the placement of increment / decrement
- <strong> Syntex: </strong>

````
initalization

while( condition ){
   
   increment/decrement
   output

}
````

#### Example
````
 let num = 5
 while( num > 0){
  console.log("The value is ", num);
  num++;
 }
````

## do While 
- The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
- The value defers accoring to the placement of increment / decrement.
- <strong> Syntex: </strong>
````
 intalizaiton
 do{
   increment/decrement
   output
 }while( condition )
````
#### Example
````
let numb = 1;
do{
  console.log(numb);
  numb++;
}while( numb <=5  );
````

 ## Brake and Continue in loop
 - <b>Break</b> is used to jump out of the loop after the condition is satisfied.
 - <b>Continue </b> continues to loop as the condtional value is ignored after the condition is satisfied. if the conditon is not satisfied then every value is printed.
 - <strong> Syntex: </strong>

 ````
 for( i = 1; i <=5; i++){
  if( i === 3){
    break;
  }
  console.log(i);
 }
 ````
 ````
 for( i = 1; i <=5; i++){
  if( i === 3){
    continue;
  }
  console.log(i);
 }
 ````



# Math in JavaScript
- Math is used for mathmatical calculation in js 

### PI
- it prints the pi vlaue ( 3.141592653589793 ).
  `````
  console.log(Math.PI);
  ````

### SQRT
- it prints the square root value of any number.
  ````
  console.log(Math.sqrt(4));    // 2
  console.log(Math.sqrt(4.4));   // 2.09 
  console.log(Math.sqrt(-4));    // NaN  ( it doesnot print negative value )  
  ````

### ABS
- it prints the absolute  value of any number. 
  ````
  console.log(Math.abs(-4));  // 4
  ````

### Round
- it prints the round value of any decimal number depending up decimal number.
- if the decimal number is lower then 5 is prints normal inputed value else increased value by 1.
  ````
  console.log(Math.round(-4.4));   // -4
  console.log(Math.round( 4.6));   //  5
  ````

### Ceil
- it prints the roundup higher value of given decimal number

  ````
  console.log(Math.ceil(4.4));   //  5
  console.log(Math.ceil(4.6));  // 5
  ````

### Floor
  - it prints the rounddown to lower value of given decimal number

    ````
    console.log(Math.floor(4.4));   //  4
    console.log(Math.floor(4.6));  // 4
    ````

###  Max 
 - it prints the maximum value from bunch of number 

    ````
    console.log(Math.max(23,44,51,22,77))   // 77
    ````

###  Min 
 - it prints the minimum value from bunch of number 

    ````
    console.log(Math.min(23,44,51,22,77))   // 22
    ````

### Random 
  - Ramdom generates random number in each refresh from 0 to 1

  ````
  console.log(Math.random());
  ````

### Trunc 
  - Trunc returns the integar value from any decimal number.

  ````
  console.log(Math.trunc(4.4))    // 4
  console.log(Math.trunc(-4.4))    // -4
  console.log(Math.trunc(43))    // 43
  ````

### Pow 
  -  Pow returns the power value of any number given in x and  y where x is targeted number and y is the multiple.

  ````
  console.log(Math.pow(4,4))    // 256
  ````

### Sign
  - it returns the type of integer with 1 if the value is negative then it returns -1 and if the value is postitive the it return 1

  ````
  console.log(Math.sign(-4))     // -1
  console.log(Math.sign(343))    // 1
  ````

### Sin
  - Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

  - If you want to use degrees instead of radians, you have to convert degrees to radians:

  - Angle in radians = Angle in degrees x PI / 180.

  ````
  console.log(Math.sin(90 * Math.PI / 180));   // 1
  ```` 


### Cos
  - Math.cos(x) returns the cosin (a value between -1 and 1) of the angle x (given in radians).

  - If you want to use degrees instead of radians, you have to convert degrees to radians:

  - Angle in radians = Angle in degrees x PI / 180.

  ````
  console.log(Math.cos(90 * Math.PI / 180));   // 1
  ```` 


### Log

 - Math.log(x) returns the natural logarithm of x.

 - The natural logarithm returns the time needed to reach a certain level of growth:

  	````
    console.log(Math.log(1));    // 0
    ````

  - Math.log2(value) is used to find the log value of given number which has to be multiplied by 2 for what number to get that value

    ````
    console.log(Math.log2(16))    //4
    ````


# String Method 

  - String method is used to manipulate the string according to the will 

  ### length
  - length helps to find the number of alphabets in a sentence.
  - space is also counted as an alphabets
  
  #### Example:
    
    let strings = "i love Javascript"
    console.log(strings.length)
    

  ### includes:
  - includes checks whether the alphabet or a word false in the senctence or not
  - it is case sensetive means the letter should be exect same.

  #### Example:
    
    let strings = "i love Javascript"
    console.log(strings.includes("java"));   // false as j is Capital in strings



  ### at:
  - it helps to find the string in the given index
  - it prints the single letter
  - it is based on the ES6 2015 model

  #### Example:
    
      let strings = "i love Javascript"
      console.log(strings.at(5));    // e
    

  ### charAt:
  - The charAt() method returns the character at a specified index (position) in a string:

  #### Example:
    
      let strings = "i love Javascript"
      console.log(strings.charAt(5));    // e
    

  ### charCodeAt:
  - it helps to find Asci code of any character 
  - the index is given in it and prints the decimal code according to the character
  - The method returns a UTF-16 code (an integer between 0 and 65535).

  #### Example:
  
      let strings = "i love Javascript"
      console.log(strings.at(5));     // 101
    
  ### string access [ ]
  - it access the string accroding to the index

  #### Example:
    
      let strings = "i love Javascript"
      let newVar = strings[4]
      console.log(newVar) 


  ### slice 
  - slice() extracts a part of a string and returns the extracted part in a new string.
  - the method takes 2 parameters: start position, and end position (end not included).
  - the start paramter should be less then end parameter and vice versa for neagative marking 

  #### Example:
    	
      let strings = "i love Javascript"
      console.log(strings.slice(2,7))   // love 
      
  - if the values are in negative number then it prints from last 
      
      let strings = "i love Javascript"
      console.log(strings.slice(-7,-2))     //ascri

  
  ### substring 
  - it is  similar to the slice 
  - we can give the value in any order i.e the value at the start can be greater then end

  #### Example:
    
    let strings = "i love Javascript"
    console.log(strings.substring(8,4));   // ve j
    

  ### toUpperCase():
  - it converts the strings to the uppercase 

  #### Example:
    
     let strings = "i love Javascript"
     console.log(strings.toUpperCase()); 
    
  

  ### toLowerCase():
  - it converts the strings to the lowerCase 

  #### Example:
    
     let strings = "i love Javascript"
    console.log(strings.toLowerCase()); 
    

  ### padStart()
  - it pad a string to the start ( <i> add the string at start </i>)
  - it pads a string with another string (multiple times) until it reaches a given length.

  #### Example:
    
    let strings = "i love Javascript"
    console.log(strings.padStart(18,"*"));
    

  
  ### padEnd()
  - it pad a string to the end ( <i> add the string at end  </i>)
  - it pads a string with another string (multiple times) until it reaches a given length.

  #### Example:
    
    let strings = "i love Javascript"
    console.log(strings.padEnd(18,"*"));
  

  ### Trim ()
  - trim cuts the empty space from the string both in start and end
  - <strong> trimStart() </strong> cuts the empty space from start
  - <strong> trimEnd() </strong> cuts the empty space from end

  #### Example:
    
    let strings = "    i love javascript    "
    console.log(strings);
    console.log(strings.trim())    
    console.log(strings.trimStart(), "space check")
    console.log(strings.trimEnd() ,"space check")
    

  ### Repeat:
  - it repeats the string to the given number time 

  #### Example

       let strings = "i love Javascript"
       console.log(strings.repeat(3));


  ### Replace:
  - Replace replaces specified value with another value in a string
  - it uses two parameters as first value and 2nd replaced value
  - it is case sensative
  
  #### Example:

       let strings = "i love Javascript"
       console.log(strings.replace("love","hate"));

  ### split:
  - Split converts a string into an array 
  - if somting is defined in the split method then it converts accordingly

  #### Example:

       let strings = "i love Javascript"
       console.log(strings.split(""));
       console.log(strings.split(" "));
       console.log(strings.split(","))

  ### concat:
  - concat combins two or more strings into one

  #### Example:

        let str1 = "hello";
        let str2 = "world";
        let str3 = "universe";
        let newStr = str1.concat(" ", str2 ," ",str3);
        console.log(newStr)


  ### Search:
  - search method searchs the string in the sentence

  #### Example:

        let str ="hello world"
        console.log(str.search("wo")) 


# setTimeout & setInterval 

- settimeout is used to print the output after a while or after certain time 
- <strong> Syntex </strong>

        console.log("Starting...");
        setTimeout(()=>{
          console.log("this is printed after certain delay!");
        }, delay)
        console.log("Ending...");

- setInterval is used to print the output after certain interval and it keep printing without any stopage.
- <strong> Syntex </strong>

        console.log("Starting...");
        setInterval(()=>{
          console.log("this is printed after certain delay!");
        }, delay)
        console.log("Ending...");
  
  - here delay is compared in mili second as 1000ms = 1 sec

  #### Example:

    #### in HTML

        <div>
            <div id="time"><strong>00:00:00</strong></div>
        </div>
            <button onclick="clearInterval(time)"> Stop Watch</button>
            <button onclick="location.reload()"> Refresh </button>

    #### in JS

        const time = setInterval(() => {
            let date = new Date();
            let time = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
            document.getElementById('time').innerHTML = `<strong> ${time} </strong>`;
        }, 1000);

  - here clearInterval is used to stop the interval 
  - location.reload() is used to refresh the browser



## Error handaling

- Error handaling is used to find the error that occur during the programming 
- Error can be defined in 3 blocks 

## Try
- Try is used to catch the success 
- <strong> Syntex </strong>

        try{
          // code here
        }

## Catch 
- catch catches all the error that occurs duing the program 
- <strong> Syntex </strong>

        catch(error){
          console.log(error);
        }

## finally 
- Finally is used to excute whatever the result is 
- <strong> Syntex </strong>

        finally{
          // code here
        }


#### Example 1:

      let y = 2;
      let x = 1;
      try{
        console.log("success",x + y);
        throw "the value is not found "
      }
      catch(error){
        console.log("Error IS:", error);
      }
      finally{
        console.log('i am executed whatever the result is !!! ')
      }


## Throw 
- throw is used to generate the custom error
- it generates the error in the success method
- <strong> Syntex </strong>

        try{
          throw 'this is custom error'
        }

#### Example 2:

##### in HTMl

    <div>
        <input type="text" id="newValu">
        <button onclick="validation()"> Check Value </button>
        <span id="errorMessage" style="color: red;"></span>
    </div>

##### in JS 

      function validation (){
        let message = document.getElementById('errorMessage');
        message.innerHTML = " ";
        let newValue = document.getElementById('newValu').value;
        console.log(newValue)

        try{
          if(newValue.trim() === ""){
            throw "the value is empty";
          }
          if(newValue <= 5 ){
            throw "Input greater value than 5";
          }
          if(newValue >= 20 ){
            throw "Input less value than 20";
          }
          if(isNaN(newValue)){
            throw "Input a number value";
          }
          message.innerHTML = newValue;
        }
        catch(error){
          message.innerHTML = error;
        }
      }


## Promise
- A Promise is an Object that links Producing code and Consuming code
- Producing code is that can take some time 
- Consuming code is code that must wait for the result
- A promise is either fulfilled or rejected or pending 
- <strong> Example </strong>

      let funcPromise = new Promise((resolve, reject) =>{
        return resolve('this is resloved');
       // return reject ("this is rejected ");
      })

      funPromise.then(()=>{
        console.log(" success ");
      })
      .catch((error)=>{
        console.log('Error:', error)
      })


- if resolve or reject is not defined it goes on pending as no result is seen 
- <strong> Example </strong>

      let funcPromise = new Promise((resolve, reject) =>{
        return resolve;
        // return reject;
      })

      funPromise.then(()=>{
        console.log(" success ");
      })
      .catch((error)=>{
        console.log('Error:', error)
      })

- A JavaScript Promise object can be:
  - Pending
  - Fulfilled
  - Rejected

- The Promise object supports two properties: state and result.

- While a Promise object is "pending" (working), the result is undefined.

- When a Promise object is "fulfilled", the result is a value.

- When a Promise object is "rejected", the result is an error object.





# Async & Await

- Async and Await makes promieses easier to handle 
- Async is not completed with await 
- While using async await it always return a promise 
- Async is used as to delear the function
- The await keyword can only be used inside an async function.
- The await keyword makes the function pause the execution and wait for a resolved promise before it continues
- <strong> Syntex </strong>

      async function fun(){
        return "one";        // a promise is returned
      }
      console.log(fun());

      async function funs(){
        return Promise.reject("hello");
      }
      console.log(funs())

      
      // using async await
      async function funs(){
        let rejection =  Promise.reject("hello");
        await rejection
      }
      funs().then(()=>{
        console.log('success')
      })
      .catch((err)=>{
        console.log("Error:",err);
      })


      // using try catch 
      async function funss(){
        try{
          let rejection = Promise.reject("Not hello");
          await rejection
        }
        catch(err){
          console.log("Error", err);
        }
      }
      console.log(funss());

##### Example:


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



# API
- ApI is known as Application Program Interface
- APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. 
- API let us Perform CRUD Operation ( Create Read Update Delete )

##### Example:

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


# DOM 

- DOM stands for Document Object Model 
<img src="https://www.w3schools.com/js/pic_htmltree.gif">
- DOM is used to maipulate or change the frontend or bring changes in webpages.
- it is used to create dynamic HTML


# DOM element
- dom element is used to handle the dom request eith from the name, class or, id 

- There are some elements such as:

### byId
- byId taks the id to input the value to the page
- byId gives single value which means the only one data by one id 
- <strong> Example: </strong>

      const newId = document.getElementById('newId');
      newId.value;     // takes value from the newId
      newId.innerHTML = " ";   // any thing that is provided in innerHTML will be randered in the named Id value

### byClassName
- byClassName takes the class name defined
- As the class Name are used mulitple time it provides multiple data in an array to access single data index is used as [i].
- <strong> Example </strong>

      const newClass = document.getElementByClassName('newClass')[0];
      newClass.value;
      newClass.innerHTML = " ";


### byTagName
- byTagName takes the tag name such as < a>, < img> to populate data in the document
- as the tag of same type are multiple which takes multiple data which can only be acessed by index 
- <strong> Example </strong>

      const newTag = document.getElementByTagName('newTag')[0];
      newTag.value;
      newTag.innerHTML = " ";

### byName
- byName takes the name attribute written within the element and renders the innerHTML content in the document page
- byName has mulitple values as it is used multiple time 
<strong> Example </strong>

        const newName = document.getElementByName('newName')[0]
        newName.value;
        newName.innerHTML = " ";





- some of the project are done here 
- Calculator
- Analog Clock
- to-do list 


