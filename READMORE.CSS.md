#### ----------------------------------------------------------------------------- ###

## CSS 
   - CSS stands for CaseCading Style Sheet
   - it is used for styling the html document
   - CSS is like a makup to any structure 
   - CSS is a Case Sensetive as every thing should be similar

## CSS Syntex

  # tag ( p , img, a, hr, div, span, b, strong etc)
  - tag{
     property: value;
     property: value;
    }

  # class 
  - class is represented using . in css file
  - class is a attribute that is declared after the tagname
  - Example
    in html file
    <div class="hira">
     <p> this is hira paragraph </p>
    <div>

    in css file
    .hira{
        property: value;
        property: value;
    }


  # Id
   - Id is always unique
   - if the certain name of id is used once then the same name should not be repeated
   - Id is denoted by #
   - Id is also and attribute written after the tagname
   - Although the class and id have same name both are different 

   - Example
    in html file
   <div id="hira">
    <p> this is paragraph </p>
   </div>

   in css File
   #hira{
    property: value;
    property: value;
   }


## how to link External CSS
  
  - Go to html file
  - go to head 
  - inside the head type link:css and then enter 
  - After you enter certain code is generated
  - change the href path to your style.css path

  <link rel="stylesheet" href="./assets/css/style.css">

  - now your css file is linked

### ----------------------------------------------------------------   ###

## Types of CSS

  - there are 3 types of css

# inline css
  - it is written with in the line as the css works for the line that it is used in 
  - it is used in the html file 
  - it is an attribute style that helps to input css within the line 
  - Example:
  <div style="background-color:green;">
   <p> this is a paragraph </p>
  </div>

# internal CSS
  - it is used inside the html file 
  - it is decleard within the head element using style
  - The deleration is same as the external css of css properties and values 
  - Example:
  <head>
    <title> INline css</title>
    <style>
        <!-- code here -->
        <!-- code here -->
    </style>
  </head>

# External CSS
  - A Seprate file is created using the  .css extension 
  - Always name the main css file as style.css
  - every css properties are written within the external css
  - It is managed properly


#### -----------------------------------------------------------  ###


### Selectors

# Universal Selector

  - Universal Selector are those which is used for the all document 
  - Universal Selector is declared as
   *{ 

   }
  - Whatever the css is written within the universal selector it is used in every document
  - Example:
  *{
    color: red;
    background-color: lightseagreen;
  }

# Grouping Selector

  - Grouping selector are those which is used to group the tag or class or id
  - grouping selector is denoted by , 
  - if some css properties are repeated then we can use , to combine the tag and use same poperty 
  - using this selector we can reduce the repeated code 
  - Example:

    in html
    <h1> lorem </h1>
    <p id="hira"> lorem is a dummy text </p>

    in css file
    h1 , #hira{
        color: red;
        font-size: 20px;
    }


# Parent to child selector

  - the first element is the parent and the other are the child elements
  - if we have to differencate similar element then we use parent child concept
  - to denote the parent child concept use > sign or give a space

  # in HTML FILE
  - <div class="parent">
        Parent
        <div class="child">
            child
            <h1> This is a child div</h1>
        </div>
    </div>

  # in CSS FILE
  .parent .child h1{
    color: green;
    background-color: white;
  }

 # or

  .parent > .child > h1{
  color: green;
 background-color: white;
}


## PSUDO CLASS SELECTOR
  
  - Psudo Class selector is declared  by ( : )
  - psudo Class selector is used to define the special state of the element
  - syntex:
      selector:pseudo-class {
      property: value;
    }

  # hover
  - it works when the mouse is placed in the text
  - Example
   .hover:hover{
      color: lightslategray;
      background-color: white;
    }

  # visted
  - it works when the link is visted
  - Example:
  a:visited{
      color:green;
    }
  
  # link
  - the unvisted link flash in the given color
  - Example:
    a:link{
      color: red;
    }

  # active
  - it acts between the mouse release and press
  - Example:
    a:active{
      color:burlywood
    }

  # before
  - it appers before the paragraph
  - Example:
    .line:before{
      content: "this appers first";
      color: red;
      font-size: 20px;
    }
  
  # After
  - it appers after the content
  - Example
    .line:after{
        content: "this appers last";
        color: red;
        font-size: 20px;
      }
  
  # first-child
  - first child checks the first element of the parent

  # last-child
  - in last child the last element is highlighted

  # nth-chlid
  - in nth child either the even or odd or the give number element is highlighted 

  - Example:

  
    # in HTML file

   <article class="lines">
    <p>
      Lorem ipsum, dolor sit amet consectetur 
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur 
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur autem 
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur autem 
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur autem 
    </p>
    </article>

  # in CSS file
    .lines p:first-child{
      color:red
    }

    .lines p:nth-child(4){
       color: red;
      }

    .lines p:last-child{
      color: red;
    }


## PSUDO ELEMENT SELECTOR

  - Psudo element are declared as :: 
  - In this selector the element are maniuplated

  # first-line
  - the first line of a paragraph is highlighted
  - Example:
    .lines p::first-line{
      color: red;
    }

  # first-letter
  - the first letter of a paragraph is highlighted
  - Example:
    .lines p::first-letter{
      color: red;
    }
  
  # marker:
  - marker is used in list to higlight the dot or number
  - Example:
    ul li::marker{
      color: red;
    }

  # selection
  - selection is used to highlight the selected text
  - Example:
    .lines P::selection{
      color: greenyellow;
    }

### ------------------------------------------------------------ ###

### BOX MODEL
  - Box model depends upon border, padding, margin, box shadow and height width

  # Border
  - Border means to give border to the box
  - we can use border-radius to make a circle or corner sharp
  - Example: 
      border: 1px solid red;

      here, 1px is border width solid is border type and red is border color

      border-radius: 40px;

      here if 50% is the value then it makes a circle.
  
  # Margin 
  - Margin pushes the box from outside 
  - Example:
      margin: 20px;

      here, margin is seprated equally in every direction i.e. margin: top right bottom left; are equal

      margin: 20px 10px;

      here, margin is seprated in either x axis or y axis i.e.  20px is for top and bottom and 10px is for left and right

      margin: 10px 20px 15px 9px;

      here, margin is distrubited as 10px for top, 20px for right, 15px for bottom and 9px for left

      margin-top: ;
      margin-left: ;
      margin-right: ;
      margin-bottom: ;

      here, you can seprately mention the margin.

    # Padding
    - padding moves the content from inside of the box
    - example:
          padding: 20px;

          here, padding is seprated equally in every direction i.e. padding: top right bottom left; are equal

          padding: 20px 10px;

          here, padding is seprated in either x axis or y axis i.e.  20px is for top and bottom and 10px is for left and right

          padding: 10px 20px 15px 9px;

          here, padding is distrubited as 10px for top, 20px for right, 15px for bottom and 9px for left

          padding-top: ;
          padding-left: ;
          padding-right: ;
          padding-bottom: ;

          here, you can seprately mention the padding.

    # Box Shadow
    - Box shadow is used for the shadow effect in the box
    - Example:
        box-shadow: 1px 2px 3px 4px black;

        here, 1px represent the x-axis
              2px represents the y-axis
              3px represents the blur
              4px represents the sprade
              black represetnts the color
    - if we have to give the box shadow inside then we can use inset
    - Example: 
        box-shadow:inset 1px 2px 3px 4px black;

### ---------------------------------------------------------------------------------------------------------- ###

### Text Formating
  - Text formating is the process of arranging the text
  - Example:
      text-align: center;
      text-align: start;
      text-align: end;
      text-align: justify;
    
    here, we can arrange the text

  - text tranfrom is used for transforming the text
    text-transform: uppercase; 
    text-transform: capitalize; 
    text-transform: lowercase;
   

  - text decoration is used for the underline or to remove any underline
    text-decoration: none; 
    text-decoration: underline; 

  - text shadow is used to for the text shadow 
    text-shadow: 1px 2px 3px red; 
  
  - text overflow is used to control the overflow of the text
     text-overflow: clip;
   
  - overflow is used to control the overflow of the text in a certain width or height
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden; 

  - indent creates space infront of the text
    text-indent: 30px;
  
  - Font size determine the size of the text font size can be given in px and rem where 16px = 1rem
    font-size: 20px;

  - Font weight is used for making the font bold. the size varies from 100 to 900
    font-weight: 900;
  
  - Font Style is used to give style to the text as italic , none and oblique
    font-style:oblique; 
  
  - Using the font family we can give the font family that the font can be written in different style
  - to use other font style 
      - Go to google type google font
      - click on the first link
      - select a font 
      - click on get font 
      - click on embed font 
      - click on import radio button and copy the import link
          @import url('https://fonts.googleapis.com/css2?family=Candal&family=Jersey+15&family=Playwrite+IN&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      - paste it to your css file 
      - copy the font family from where you copied the import link and paste it to your css file where the font is decorated
        font-family: "Poppins", serif;


  - line height is used to create space between two lines
      line-height: 1.5;
  
  - letter spacing is used to create space between two character
      letter-spacing: 10px;

  - word spacing is used to create space between two words
      word-spacing: 3px;

  - line break is used for breaking the line either from anywhere or loose or strict or auto
      line-break: anywhere; 
      line-break: loose; 
      line-break: auto;
      line-break: strict;
  
  - line clamp is used to create 3 dot show that other can know the contiunity of the text
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
      overflow: hidden;

#### --------------------------------------------------------------------------------------------------------------- ####

## ICON 
  - font awesome is one of the tool to use icons in the html page
  - search font Awesome then  go to the site 
  - search fontawesome cdn link on another tab and open cdnjs site 
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


  - click on the fontawesome.all.min.css and copy the link 
  - paste it to your html page where the links are
  - go to official site and search for the icons and click on the icons 
  - copy the snippets and paste it to your html page

  <i class="fa-brands fa-facebook"></i> FaceBook

  - if you have to change the css of icons tag the icon class
    .fa-brands{
      font-size: 30px;
      color: red;
    }


#### -------------------------------------------------------------------------------------------------------------------------  ####

### BACKGROUND IMAGE

  - we can use image in the background and change it according to the requirement
  # in html

  <div class="images">
      <h1> Background Image</h1>
    </div>

  # in CSS
  .images{
    background-image: url('../img/landscape.jpg');        - image to insert
    height: 100vh;                                        - height to mention as 100vh means the whole screen hight                     
    width: 100wh;                                         - width to mention as 100wh means the whole screen width
    background-repeat: no-repeat;                         - this prevents image from repetation
       background-size: cover;                          - size determine the size of the image to  be shown
    /* background-size: contain; */         
    /* background-size: auto; */
    /* background-position: left; */n                    - postion is used to place the image
    /* background-position: right; */
    /* background-position: center; */
    /* background-position: top; */
    /* background-position: bottom; */
    /* background-attachment: fixed; */                  - aatachment menas the image remain there although the content is scrolled
    /* background-attachment: scroll; */

  }

    .images h1{
      backdrop-filter:blur(20px);                          - it is used to give the filter effect to the content in the image
      -webkit-backdrop-filter: blur(20px);
    }


#### ---------------------------------------------------------------------------------------------------------------------------  ###

### DISPLAY PROPERTIES

   - Display is used for the arrangment of the content 
   - content or the card can be arranged in the sequence

   here is the example

   # in HTML
   <section>
      <h1> Display Properties</h1>
      <div class="MainBox">
        <div class="card1"> 1</div>
            <div class="card2"> 2</div>
            <div class="card3"> 3</div>
            <div class="card4"> 4</div>
            <div class="card5"> 5</div>
      </div>
    </section>

  # in CSS
    .MainBox{
        background-color: lightskyblue;
        padding: 20px;
        margin: 20px;
        display: inline-flex;
        display: inline-table;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: space-between;
        align-items:center ;
        flex-flow: column-reverse, wrap-reverse;

      }

      .card1, .card2, .card3, .card4, .card5{
        padding: 20px;
        margin: 20px;
        display: inline;
        diplay: block;
        display: inline-block;
        display: none;
      }

      .MainBox .card1{
        background-color: lightcoral;
        flex-shrink: 2;
        order: -1;
      }

      .MainBox .card2{
        background-color: lightcyan;
        flex-grow: 2;
      }

      .MainBox .card3{
        background-color: lightgreen;
        align-self: flex-end;
      }

      .MainBox .card4{
        background-color: lightseagreen;
        display: none;

      }

      .MainBox .card5{
        background-color: lightyellow;
        display: content;
        align-content: center;
      }

    # display: inline
    - it is used to display the single card in a line 
    - this displays the card accroding to the content the space that the content aquires is shown 
    - if we have to display every card in a line then we have to use it in every card clasas

    # display: block
    - it is the inital state of the card. 
    - it has no effect 
    - it is used in every single card class

    # display: inline-block
    - it shows the content in a line with a gap on every side
    - it is used in every single card
    - it is the mixture of inline and block.

    # display: inline-flex
    - it is used in the main container or main box
    - if we uese it in th main box then it is applied to every box
    - the main box is srinked to the content size
  
    # display: inline-tabel
    - it is used in the main box to arrange the content in the table form 
    - all the cards inside the main box are arranged in a table form
    - it is used in the main box

    # display: none
    - it is used to hide the content
    - if a single box has to be hidden we can use it in it's class

    # display: contents
    - it is used to show the content only and other are disapperd
    - we can use it in a single box to hide other css properties

    # display: flex
    - it is a layout managment value that helps to manage or arrange the card in a sequence.
    - it is single dimensional means it can flow in a single direction i.e either in a row or column.
    - it is used in the main box to arrange other cards in the main box.
    - it has a lot properties to arrange the box.
    - without mentoning the display flex we cannot use flex properties.

      # flex-direction
      - it is used to set the direction of the cards either in a row or column or row-reverse or col-reverse
         flex-direction: row;
         flex-direction: columne;
         flex-direction: row-reverse;
         flex-direction: columne-reverse;

      # flex-wrap
      - it is used to wrap the cards when the box is small 
      - it has 3 values wrap, no-wrap, wrap-reverse;
         flex-wrap: wrap;
         flex-wrap: nowrap;
         flex-wrap: wrap;

      # gap
      - it is used to provide the gap between the two card 
      - it is used in the main box
         gap: 60px;

      # justify-content
      - it is used to arrange the content in the left to right sequence if the flex direction is in row
      - if the flex direction is in column then it arrange the content in top to bottom sequence
      - it has some values like 
      self-end or end - it arranges the cards from rightside
          justify-content: end;

      self-start or start - it arranges the cards from left side
          justify-content: start;

      center - it arrange the box in center
          justify-content:center;

      space-around - it gives the equal space in between cards but not on the corner side 
          justify-content: space-around;

      space-between - it throws the end and start box at the corner and gives the equal spacing between the box
          justify-content: space-between;

      space-evenly  - it gives eqal space in every side.
          justify-content: space-evenly;

      # align-items
      - it is used to arrange the content in the top to bottom sequence if the flex direction is in row
      - if the flex direction is in the column then it arrrange the content from left to right 
      - it has some values 

      self-end or end - it arranges the cards from rightside
          align-items: end;

      self-start or start - it arranges the cards from left side
          align-items: start;

      center - it arrange the box in center
          align-items:center;

      # align-self
      - align self is used in a single cards to allign the content inside
        align-slef: flex-end;
        align-self: flex-start;
        align-self: center;

      # align-content
      - it is used to arrange the content of the single card
        align-content: center;
        align-content: end;
        align-content: start;

      # flex-grow 
      - it is used to grow the single card
      - it uses the value of single digit greater then 1 
        flex-grow: 2;

      # flex-shrink
      - it is used to shrink the single card that doesnot shrink when the size is shrinked 
      - it uses the single value greater then 1
        flex-shrink:2;

      # order
      - order is used either in the positive value or negative to arrange the order of the card in a single value 
      - it is used in single single card
      - if the value is in minus then the card is in 1st postition and vice versa 
        order: -1 
        order: 1

      # flex-flow
      - it uses 2 properties to flex wrap and flex direction in one 
        flex-flow: wrap row;
        flex-flow: nowrap column;
        flex-flow: row-reverse, wrap;
        flex-flow: column-reverse, wrap-reverse;

##### ----------------------------------------------------------------------------------------- ####

#### POSITION

# in HTML 

<section>
        <h1> Display Properties</h1>
        <div class="MainBox">
            <div class="card1"> 1</div>
            <div class="card2"> 2</div>
            <div class="card3"> 3</div>
            <div class="card4"> 4</div>
            <div class="card5"> 5</div>
        </div>
    </section>

  # In CSS

.MainBox{
  background-color: lightskyblue;
  padding: 20px;
  margin: 20px;
  height: 100vh;
  position: relative;        // relative is used for the absoulute position to contain the box in main box
}

.card1, .card2, .card3, .card4, .card5{
  padding: 20px;
  margin: 20px;
 
}

.MainBox .card1{
  background-color: lightcoral;
  position: static;
}

.MainBox .card2{
  background-color: lightcyan;
  position:fixed;
  top: 0;
  /* bottom: 0; */
  left:80px;
  
}

.MainBox .card3{
  background-color: lightgreen;
  position:sticky;
  top: 0;
  left:20px;

}

.MainBox .card4{
  background-color: lightseagreen;
   position: relative;
      top:30px;
      right:20px; 
}

.MainBox .card5{
  background-color: lightyellow;
  position:absolute;               // always use relative in main box to contain the position:absolute box
  top:0;
}

  - Position helps to move the box in different direction 
  - position is always static at the inital phase
  - There are 5 types of position
  - postion is used in a single single box as a box has to be moved


  # position: Static
    - position is always static at the inital phase
    - it has no effect on the box or cards.


  # position: fixed
    - It shriks to its orginal size as of the content. ( jati content xa tai size ma aaunxa)
    - it is fiexd at a place from where the box is not moved after scrolling 
    - it uses top right bottom left combination to place the box
    - always use the alternet style ie. if you are using top then don't use bottom and if you are using left then don't use right.

    Example:
        position:fixed;
        top: 20px;
        left:20px;

  # position: sticky
    - it sticks the card or box at a place and it moves after the main div is over
    - always use top to stick the box 

    Example:
        position:sticky;
        top: 20px;
        left:20px;

  # position: relative
  - it is used to move the box dynamically
  - it doesnot shrink the box
  - it uses top right bottom left combination to place the box
  - always use the alternet style ie. if you are using top then don't use bottom and if you are using left then don't use right.
  - it overlaps the box with other which is not convinent way of moving the box.

  - Example:
      position: relative;
      top:30px;
      right:20px;

  # position: absolute
  - it is used to move the box dynamically and shrinks the size of the box to the content size.
  - it moves out from the box as it goes to the top of the page after using top. so to contain the box in the main container or div we use position: relative in the main box


  #### ------------------------------------------------------------------------------------  ####

  # in HTML
     <div class="anima">
      <div class="animaOne">
        this box is animated
      </div>
    </div>

 # in CSS
    .anima{
      background-color: lightsalmon;
      height: 200px;
      width: 200px;
      
    }
    .anima:hover{
      /* transform: scale(1.5,1.5); */
      /* transform: rotate(45deg); */
      /* transform: matrix(1,0.5,0.5,1,0,0); */
      transform: perspective(1000px) rotateY(45deg);
      transition: 1.5s ease-in-out all;
    }

  # Transition 
  - transition is used to remove the jitter transition 
  - it uses the 3 values as time, process and all
    Example:
      transition: 1.3s ease-in all;
  
  # transform 
  - transform gives the different prespective to the box 
  - use it in hover for the better result.

  - Example:
      transform: scale( x, y);
      transform: matrix( 1,1.5, 2,1.1, 0,2)
      transform: prespective(1000px) rotatex(45deg);
      tranfrom: prespective(1000px) rotatey(100deg);

##### ------------------------------------------------------------------------------------ #####

### KEYFRAME

 - keyframe is used for the animation 
 - to use multiple of key frame just change the animation name as there are two keyframe in the example pulse and  moving.
 - it takes the animation name and uses it in the keyfrme

 # in HTML file
   <div class="animation">
        <div class="animationOne">
            *
        </div>
    </div>

 # in CSS file
    .animation{
      padding: 20px;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border:10px solid black;
      animation: pulse 5s ease-in-out infinite;
    }


    @keyframes pulse{
      0%{
        background-color: red;
        transition:  2s ease-in-out all;
      }

      100%{
        background-color: blue;
        transition: ease-in-out 2s all;
      }
    }


    @keyframes moving{
      0%{
        transform: rotate(30deg);
        transition: 3s ease all;
      }
      10%{
        transform:rotate(60deg);
        transition: 3s ease all;
      }
      20%{
        transform: rotate(90deg);
        transition: 3s ease all;
      }
      30%{
        transform: rotate(120deg);
        transition: 3s ease;
      }
      40%{
        transform: rotate(150deg);
        transition: 3s ease all;
      }
      50%{
        transform: rotate(180deg);
        transition: 3s ease all;
      }
      60%{
        transform: rotate(210deg);
        transition: 3s ease all;
      }
      70%{
        transform: rotate(240deg);
        transition: 3s ease all;
      }
      80%{
        transform: rotate(270deg);
        transition: 3s ease all;
      }
      90%{
        transform: rotate(300deg);
        transition: 3s ease all;
      }
      100%{
        transform: rotate(360deg);
        transition: 3s ease all;
      }
    }



##### ---------------------------------------------------------------------------------------- ####

### Media Queries

  - media queries are used to make the code responsive 
  - it is used to fit the web for every screen 
  - different screen has different size to target 
  - it's syntex is :

    @media( max-width or min width = 775px){
      .class or tag or #id{
          property: value;
          property: value;
          property: value;
      }

    }

  - Example:

  # in HTML file
  <span class="headingSize"> 
        HEading is changing at 578px
    </span>

  # in CSS file
    .headingSize{
        font-size: 60px;
      }

      /*  responsive  */

      @media(max-width: 768px){
        body{
          background-color: lightcoral;
        }

        .headingSize{
          font-size: 20px;
        }
      }

      @media(max-width: 578px){
        body{
          background-color: lightgreen;
        }
        .headingSize{
          font-size: 40px;
        }
      }




### ----------------------------------------------------------------------------------------  ####

### ROOT 

  - root is psudo code that is used to deifne the color that can be used in any css value 
  - it creates the variable for every defined css value 
  - var (--primary-color) is the process of using it in the css value
  - Example

    # in CSS
    :root{
        --primary-color: #19c0a9;
        --secondary-color: #ff7676;
        --balck-color: #333;
        --white-color:#fff;
      }

    .hira{
        color: var(--primary-color);
        font-size: 20px;
        font-weight: bold;
      }   


      

      

    





    


    