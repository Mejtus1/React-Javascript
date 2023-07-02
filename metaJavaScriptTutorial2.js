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
//using DOM allows you to manipulate live websites 

//we want to add an h2 element to the DOM
//this is written in web browser, using developer tools and console 
const h2 = document.createElement("h2")
//undefined
h2.innerText = "This is a h2 heading"
//This is a h2 heading 
h2.setAttribute("id", "sub-heading")
//undefined
h2.setAttribute("class", "secondary")
//undefined
h2
//<h2 id="sub-heading" class="secondary">This is an h2 heading</h2>
document.body.appendChild(h2)
//<h2 id="sub-heading" class="secondary">This is an h2 heading</h2>
//THESE ARE examples of DOM manipulation and its basic methods 