// The first JavaScript code that is run when the app starts up is in the src/index.js file. 

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render() comes from the react-dom npm package 
// Takes two arguments: 
// * A React component to render (typically our top-level App 
// component here)
// * A DOM element where we want that component t obe rendered (a div with the ID of root)




// ReactDOM.render() will always be used in your applications. This one small function is how the rest of our application — all the components we'll write — will eventually make its way onto the DOM!