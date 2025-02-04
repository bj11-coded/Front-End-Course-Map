## HTML 

- html is a hyper text markup language used for the documention in a site 
- html file is created using the .html extension
- html is the first step of building a webpage


## Elements:

 - Elements are those which are written within the greater then and less then sign 
        eg: <html>     </html>
            opening    closing

 - Elements are inbuilt. we cannot create our own Elements
        eg: <hira> </hira> - this show error

 - Nearly every Element has opening and closing tag those who don't have are called self closing tag
        eg: <hr>  , <br> , <img> , <meta> , <input> etc

 - what is a tag? 
        a tag is the opening of the element 
            eg: <html> , <head> , <title> 

 - content are written in between of opening and closing tag
        eg: <h1> this is a heading </h1>



## boilar plate:

   - boiler plate is the shortcut to create the structure of html ( key: shift + ! and enter )
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>

        </body>
    </html>


## what can we include in head?
    - we can include certain tag in head 
        - meta : meta is used to indicate the key refreance code and for Search Engine Optimization 
        - title : title is displayed on the top of the tab 
        - link : link is used to link the external file or url
        - style: style is used for the internal css
        - script:  script is used to link the external script file or url 

    all theses are not displayed on the webpage except the title

## what is nested element?
   - one elemnt  into another element is called nested element
        eg: <body>  ------------------ first element
               <h1> heading </h1> ------------ Nested element
            </body>

## how to comment in html?
   - to comment in html use key ( ctrl + / ) and use same key to uncomment



## Inline and block element
    - Inline: inline element are those which acquire the required space only
          Eg: b, u , del, img, a, span etc.

    - Block: block element are those which acquire all the space although there is space in the line 
        Eg: h1, p , section , div , main, aside , header , footer etc.

## Attribute
    - Attribute are those which provide additional information or feature to the tag.
    - some Attribute have the inital effect where some showes changes are the use of it.
    - Attribute are similar in kind they are declared inside opening tag after the tagname is declared and attribute uses  name=" " as all attribute are declared in similar way. 
    - here are some attribute listed
        name= " "
        direction=" "
        height = " "
        width =" "
        class = " "
        id =" "
        src =" "
        href = " "
        etc.


## Sementic & Non Sementic
    - Sementic: those element which has it's own meaning like 
        <img> , <p> , <article> <header>, <footer>, <h1>, <video>, <li>, <input> etc.

    - Non Sementic: those element which doesnot have meaning like:
         <div> & <span>

    - while create a website we use sementic elements.
## --------------------------------------------------------------------------------------------- ###

Heading:
   - Heading are used to create the text in bold size as the number increases the size decreases.
   - heading are of six type: h1, h2 , h3, h4, h5, and h6. 
   - if we create h7 then it is represented as a plain text.


Some Text Formatting elements
    - some text formating elements are listed below
       - bold: use <b> </b> or <strong> </strong> tag for text boldness
       - underline: use <u> </u> tag for underling the text
       - delete: use <del> </del> for the delete or cross mark in a horizontal way
       - italic: use <i> </i> or em tag for italic style
       - super: use <sup></sup> to create the power like numbers or symbols
       - sub: use <sub></sub> to create the base of the number or symbols
       - marquee : use  <marquee> </marquee> to move the text from one direction to another
       - center: center is used for the content to center. its red in color beacause the tag is not supported by html5 Version. <center> </center>
       - paragraph: use <p></p> element to create a paragraph.
       - blockquote - use <blockquote> </blockquote> to give space in left and right side
       - Address - use <address> </address> tag to cursive the letter in different shape
       - break line - use <br> to break the line.
       - space in the line = use &nbsp; to create a space if i use 3 &nbsp; then there are 3 space.
       - div : it is used to divide the group of element. it is non sementic html.
       - section: it is alternet of div . it is sementic html.
       - main : it is alternet of div.  



## ----------------------------------------------------------------------- ##

## Folder Structure

   ## Assets folder
     img folder
     js folder
     css folder

   # index.html file


## favicon
    - favicon is an icon that is displayed beside the title in the tab
    - bring an image 
    - use link:favicon and enter in between the head element
    - favicon shows the image in every html page.



## ----------------------------------------------------------------------- ##

## Image
# how to insert Image

#    <img src="./assets/img/cat.jpg" alt="cat" height="200" width="auto">

    - download image in jpge, jpg, png format and save in your folder img
    - use <img> tag for the image 
    - src is used to load the soucre
    - use ./ for finding the image in the same folder
    - use ../ for finding the image outside that folder.
    - alt is alternet name to the image . it is shown when the image is not displayed.
    - use hight width to adjust the image. it is used in three different way auto, percentage or direct number

## -------------------------------------------------------------------  ##

### Anchor Tag

# <a target="_blank" href="https://www.google.com">Google</a>

    - Anchor tag are those where the link is palaced to hook the url 
    - href is an attribute where the url is placed.
    - target is an attribute which allows the link to either open in same tab or in another tab.
        - _self , _top, _parent opens the link in same tab
        - _blank opens the link in new tab
    - a text is written inbetween a tag to click the link


### ---------------------------------------------------------------------------------------------- ###

## list 
    - List is the process of list some data 
    - 2 types of list are there
    - li stands for list 
    - we can select may list according to the number of data

# ul 
    - unordered list is that list the items in a bullet point way i.e. no numbering or sequence 
    - we can change the type in two different format circle and disc


# ol 
    - ordered list is that list the items in a numeric form or in a sequence
    - we can change the type in 5 different format: a, A, I , i & 1


## Nasted list:
    - example of nested list
<ul>
    <li> Apple
        <ol>
            <li>Mustang Apple
                <ul>
                    <li>Winter Apple</li>
                    <li>Summer Apple</li>
                    <li>Spring Apple</li>
                </ul>
            </li>
            <li>Indian Apple</li>
            <li> Euopean Apple </li>
        </ol>
    </li>
    <li>Ball</li>
    <li>cat</li>
    <li>Dog</li>
</ul>

## data list 
    - data list is the least used list type
    - it doesnot arrange in sequence or number or any bullet point 
    - we have to declare the sequence by ourself
    - dd - data
    - dt - data Type 
    - dl - data list
- example
<dt>
    <dl>
        number
        <dd>- one</dd>
        <dd>- two</dd>
        <dd>- three</dd>
        <dd>- Four</dd>
    </dl>
</dt>

## -----------------------------------------------------------------------------------  ##

## video 

<video height="400" width="auto" controls autoplay>
    <source src="./assets/img/Real Madrid vs Barcelona 2-5 All Goals & Highlights 2025.mp4" type="video/mp4">
</video>

    - video tag is ued to insert the video in the html page
    - source tag takes src as the path and type as the video type
    - the controls attribute shows the controller in the video 
    - the autoplay attribute automatically plays the video

## Audio

<audio controls >
    <source src="./assets/img/Hey Minnale - Video Song Amaran Sivakarthikeyan Sai Pallavi GV Prakash Rajkumar Periasamy [TubeRipper.com].mp3" type="audio/mp3">
</audio>

  - audio tag is ued to insert the audio in the html page
    - source tag takes src as the path and type as the audio type
    - the controls attribute shows the controller in the audio 
    - the autoplay attribute automatically plays the audio



### -------------------------------------------------------------------------------------   ###

#### IFrame

## Page 

  <iframe src="./about.html" frameborder="1" height="100%" width="100%"></iframe>

  - iframe is used to embbed the other page or video or map or any iframe into another page.


## youtube video

  <iframe width="560" height="315" src="https://www.youtube.com/embed/MFb7LCqm6FE?si=r0p50N9JEXWhDnvt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  - iframe can be used to embbed the youtube video
    - select a video
    - go to share 
    - click on embbed and copy the iframe
    - paste it to your project
    - now you can set the height and width of the video

## Map 

  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1766.348057248841!2d83.46187334110682!3d27.695785682977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1736740622927!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

   - Go to google map
   - select the are 
   - click on share
   - go to embed a map
   - copy the html iframe
   - paste it to the project and set the height and width

## weather App

  <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=6112695&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit" name="CW2" scrolling="no" width="290" height="318" frameborder="0" style="border: 1px solid #10658E;border-radius: 8px"></iframe>

   - search a weather app iframe
   - go to a site
   - look the iframe code 
   - copy and paste into your project and set the height and width
  
#### -----------------------------------------------------------------------------  ####

### Tabel

  <table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th> Serial No </th>
    </tr>
    <tr>
        <td> 1 </td>
    </tr>
  </table>

  - table is tag that helps to make a tabel 
  - tr = table row. tr is created to divide the data or to break the line
  - th = table head. th is created to creat a head that is represented in bold and center 
  - td = table data. td is created to creat the data according to the number of th



### -------------------------------------------------------------------------------------  ###

### Rowsapn & Colsapn
  
  <table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th colspan="3"> A </th>
        <th> C </th>
        <th rowspan="3"> D </th>
    </tr>
    <tr>
        <td>B</td>
        <td>E</td>
        <td>F</td>
        <td>R</td>
    </tr>
    <tr>
        <td>G</td>
        <td>H</td>
        <td>I</td>
        <td>S</td>
    </tr>
    <tr>
        <td>J</td>
        <td>K</td>
        <td>L</td>
        <td>Q</td>
        <td>T</td>
    </tr>
    <tr>
        <td>M</td>
        <td>N</td>
        <td>O</td>
        <td>P</td>
        <td>U</td>
    </tr>
</table>


  - Rowspan is used to merge the cell from top to bottom
  - Colspan is used to merge the cell from left to right
  - the number determine how much cell are to be merged 
  - if rowsapn is 2 ( rowspan="2" ) then two cell from top to bottom are merged after that the cell are not merged 
  - if colspan is 2 ( colspan= "2" ) then two cell from left to right are merged for the further extend until there is  changes



### -----------------------------------------------------------------------------------------------------------  ###

## Form

  
<form action="" method="post"> </form>

  - Form is an element that helps to submit the data
  - action determines where the page will redirect 
  - method is an attribute that defines what to do either post or get
  - every input field should be inside the form 

<label for="fname">First Name</label>
  - label is used for Marking the name of the form field as Example First Name
  - for is used to represent the name

<input type="text" placeholder=" First name" name="fname" maxlength="10" minlength="10" required disabled>
  - here input is used to create a form field where data are field
  - type defines what type of data to be field
  - placeholder is a suggestion what data has to be filled.
  - name is used to denote the link with the label and can be used to submit the data entered in the form field.
  - there are a lot of type which has different meaning
  - if disabled attribute is there then the field will be untouched or untouchable
  - required says that the form should be filled 

  
<input type="number" placeholder="98xxxxxxx" name="number" maxlenght="10" minlenght="10" requied>
  - type number is used to write the number only 
  - max lenght is used to limit the number
  - min length says that minium of that much data should be there
  - required says that the form should be filled 

<input type="file"  name="file" required>
  - file is used to fill the fill the image, pdf files in the form.

<input type="date"  name="date" required>
  - date is used to fill the date in the form

<input type="email"  name="email" required >
  - to input the email we use email type

<input type="button" value="click me ">
  - the type button acts like a button 
  - we don't have to label the button 

<input type="checkbox" value="Male" require>
  - checkbox is the tick box that help to select multiple data
  - we can check and uncheck the box multiple time 

<input type="color" required>
  - Color helps to select the color from multiple color range

<input type="datetime-local">
  - it show the local time 

<input type="hidden">
  - the form is hidden if this type is used

<input type="image">
  - image preview 

<input type="month">
  - we can select the month only 

<input type="password" placeholder="enter your password" minlenght="8" required>
  - password is used to fill the password in the input field
  - password are always hidden

<input type="radio" value="male" required>
  - Radio input type is also a selection type that select the data
  - Radio is checked once only

<input type="range" value="40">
  - we can select a range of cof values

<input type="search">
    - it acts like a search tool

<input type="tel">
  - we can select telephone number using tel 

<input type="url">
  - we can enter the url of any website

<input type="week">
  - Can enter the weeks 

<input type="reset">
  - this button is used to reset the form 
  - everthing and every form field is reset

<input type="submit">
  - submit submits the data that are field in the form 



### other Form Element

# FieldSet
<fieldset> <legend> Gender </legend> </fieldset>
  - it is used to create a box that helps to seprate the form field
  - legend element is used to overlap the boder of fieldset and is used as a label

# Select

 <label for="Country"> Select A Country</label>
      <select>
        <option value=" " selected>---Select Country---</option>
        <option value="usa ">USA</option>
        <option value="canda"  disabled>CANADA</option>
        <option value="uk">UK</option>
        <option value="aus">AUSTRILIA</option>
        <option value="finland">Finland</option>
      </select>

  - select tag is used to select the option from may options
  - option is used as the refrence country that can be selected
  - value is the actual data that is submitted
  - if some option that are not to be selected can be disabled by disabled attribute
  - selected attribute selects the option first regardless the postion


# TextArea

<label for="desc">Description</label>
<textarea name="description" id="desc" rows="5" cols="30"></textarea>

  - text area is used to write longer paragraph 
  - we can resize the box by defining the value in rows and cols





