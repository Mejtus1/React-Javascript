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