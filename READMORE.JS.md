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
                  
              



                
