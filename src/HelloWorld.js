import React from "react";
import ReactDOM from "react-dom/client";
import { getRandomString } from "./utils/helper";

const reactHeading = React.createElement(
  "h1",
  {
    id: "heading", // attibutes
  },
  "Hello World from  React!"
); // children
console.log(reactHeading); // object, [attributes and children => props]
const reactRroot = ReactDOM.createRoot(document.getElementById("reactRoot"));
reactRroot.render(reactHeading);

// <div id="parent">
//     <div id="child1">
//         <h1>I'm an H1 tag</h1>
//         <h2>I'm an H2 tag</h2>
//     </div>
//     <div id="child1">
//         <h1>I'm an H1 tag</h1>
//         <h2>I'm an H2 tag</h2>
//     </div>
// </div>

const parent = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "I'm an H1 tag from react"),
    React.createElement("h2", {}, "I'm an H2 tag from react"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "I'm an H1 tag from react"),
    React.createElement("h2", {}, "I'm an H2 tag from react"),
  ]),
]);

const reactRoot2 = ReactDOM.createRoot(document.getElementById("reactRoots"));
reactRoot2.render(parent);

//React element
const heading = (
  <h1 id="heading" className="test" tabIndex={2}>
    Hello World from JSX
  </h1>
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading); // React element

// Parcel will use babel to transpile this code to React.createElement, that's how it's running
// This is not a valid js
// JSX is an HTML-like or XML-like syntax

// React Functional component => a function returns JSX or a React element
const HeadingComponent = () => <h1>Hello, world! React component</h1>;
// incase of multiple linse wrap it inside ()
const MyComponent = () => (
  <div>
    {/* Multiple ways of using the component */}
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    {/* u can have any js code inside {} */}
    {HeadingComponent()}
    <p>Random string: {getRandomString()}</p>
    <p>This is a functional component.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("jsxRoot"));
root.render(<MyComponent />); // React functoinal component

// The browser doesn't need to know u r having nested component or whatnot
// babel (JSX => react ) and react together convert everything to proper html DOM
