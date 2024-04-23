import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = (
  <h1 id="heading" className="test" tabIndex={2}>
    Hello World from JSX
  </h1>
);
// Parcel will use babel to transpile this code to React.createElement, that's how it's running
// This is not a valid js
// JSX is an HTML-like or XML-like syntax

// React Functional component => a function returns JSX or a React element
const HeadingComponent = () => <h1>Hello, world! React component</h1>;
// incase of multiple linse wrap it inside ()
const MyComponent = () => (
  <div>
    <HeadingComponent/>
    <HeadingComponent></HeadingComponent>
    {/* u can have any js code inside {} */}
    {HeadingComponent()}
    <p>{1+2+3}</p> 
    <p>This is a functional component.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("jsxRoot"));
// root.render(heading); // React element
root.render(<MyComponent/>); // React functoinal component

// The browser doesn't need to know u r having nested component or whatnot
// babel (JSX => react ) and react together convert everything to proper html DOM
