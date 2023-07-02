//Javascript Modules
// are standalone units of code that you can reuse again and again 
/* Stand alone modules
- Add modules to programs
- Remove modules
- Replace modules 

metaJavaScriptTutorial3.js = old JS modules
(problems: global functions - problems with overwriting )
metaJavaScriptTutorial4.js = New ES6 JS syntax 
metaJavaScriptTutorial3.js */

export const informalGreeting = (person) => {
    console.log("Hello, ${person}");
}

export const formalGreeting = (person) => {
    console.log("Good day, ${person}")
}   

const greeting = () => { 
    console.log("Howdy!");
}

export default greeting;




//.........................................................................................................//
//.........................................................................................................//
//Javascript DOM manipulation 
//DOM = document object model 
//DOM tree structure - HTML file is mapped out like a tree structure
//with nested objects for different partos of the page

//editing a local DOM does not affect the document on a webpage 
//using DOM allows you to manipulate live websites, browser allows you to do this 
//using console tab in the DEV tools, after that YOU CAN START writing commands
//to view and manipulate the DOM, it is similar to interacting using the elements panel)
//but now you will be using a code to do it 

//we want to add an h2 element to the DOM (to the webpage), any changes we make to the dome are relative to our webpage
//this is written in web browser, using developer tools and console 
const h2 = document.createElement("h2") //we want to create DOM object
//undefined
h2.innerText = "This is a h2 heading"
//This is a h2 heading 
h2.setAttribute("id", "sub-heading") //method used for setting attributes ("name", "value of the attribute" )
//undefined
h2.setAttribute("class", "secondary") //we use setAttribute method again for class attribute
//undefined
h2 //for testing we type h2 and output will be given on console 
//<h2 id="sub-heading" class="secondary">This is an h2 heading</h2>
document.body.appendChild(h2)
//<h2 id="sub-heading" class="secondary">This is an h2 heading</h2>
//THESE ARE examples of DOM manipulation and its basic methods 



//.........................................................................................................//
//.........................................................................................................//
//JAVASCRIPT SELECTORS 
//FINDING SPECIFIC OBJECTS IN A DOM using javascript 
//javascript selectors work with the document object model which you can access by typing (document) in console
//This returns the objct stored in browser memory, known as a DOM 
//we can use consoole.log(document), to view it 

//we have a webpage that has 2 paragraph <p> (html elements)
//To access the first one we type 
document.querySelector("p") //we run the command and it returns the first p element
//we expant the p element and this is shown in the console:
<p class="txt"> 
"This domain is for use in illustrative examples in documents" </p>
//we can use this too on anchor element
document.querySelector("a")
<a href="https://www.iana.org/domains/example/">More information</a>

//Query selector all 
document.querySelectorAll("p") //shows all <p> elements on the webpage 

//Get element by ID 
//it can find elements that match specified ID attribute 
document.getElementById("heading")
<h1 id="heading">Example Domain</h1> //finds element with heading ID 

//Get by specified class name 
document.getElementsByClassName("txt")
//outputs p.txt , p.txt (two txt documents in DOM)


//.........................................................................................................//
//.........................................................................................................//
