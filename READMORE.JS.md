#### ----------------- JAVASCRIPT  ---------------------------------------- ####

  - Javascript is a programming or scripting language
  - it is used to implement Complex features on webPage
  - Dynamic Content 
  - it is light weight Interpater programming Language   It checks line by line 
  - it supports both client side and server side 
  - Backend , Frontend, Machine learning , Mobile App (Android)



### ----------------------------------------------------------------------- ###

## type of javascript

 # Internal JavaScript 
  
  <script> 
    console.log("hello world");
  </script>

   - it is defined within the html using script tag inside the body

 # External Java Script

  <script src="./assets/js/index.js" defer></script>

  - in this we create a external index.js file within the assets/js folder
  - in the html inside the body the script tag is defined with the source src. it takes the path of the js file and link with the html
  - we can use defer attribute in script to priortize script wherever it is written.

## How to comment in js file

  - use ctrl + / or use doubble backslash //


## how to run Js file 
  - go to the js file path and open terminal 
  - now type node filename.js
  - we have to run it each time we want to execute the change in js file

#### ----------------------------------------------------------------------------   ###

## Output METHODS

 # Console
   - console is one of the output method that prints the data in the terminal line or in console of a browser
   - console doesnot support elements inside the string data type as it counts as strings

   # console using log and string, and number data type
     console.log(" hello world ", 1);   
     console.log("<h1> hello world </h1>")

   # console using error and variable to catch error 
    let a ;
    console.error(a)  

   # console using info and variable to display information regarding output 
    let a ;
    console.info(a)  


 # Confirm 
   - confim is one of the ouput method that prints the data as a popup
   - it popups with output showing the ok and cancel button
   - Example:
        confirm("hello world")
 
 # Alet
   - Alert method is used to print the output of the data as a popup 
   - it popups with an ok button only
   - Example:
        alet("this is an alert button");

 # Document
   - document prints the data in the output of the webpage.
   
   # document with write 
    - document.write prints the data in the webpage
    - it doesnot run in the terminal 
    - if we try to run in terminal using document.write it shows it is undefined
    - we can use elements inside the string data type in document.write as it takes elements and prints the output as of elemnt says. 
    - example:
        document.write("hello world") 
        document.write("<h1> hello world </h1>")

   # document with dom model
   - we can dom model to print the output of the javascript.
   - document is used to print the output in the webpage.
   - getElementById is a dom method to print the data by targeting id as para.
   - innerHTML is used to write inside the targeted html where "Lorem ipsum dolor sit amet" is the value.
   - example:
        document.getElementById('para').innerHTML = "Lorem ipsum dolor sit amet";


### Input METHOD

  # Prompt 
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


    