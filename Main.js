import React from "react"
import ReactDOM from "react-dom/client"

const heading = <h1 id="heading" className="test" tabIndex={2}>Hello World from JSX</h1> 
// Parcel will use babel to transpile this code to React.createElement, that's how it's running 
// This is not a valid js 
// JSX is an HTML-like or XML-like syntax

const root = ReactDOM.createRoot(document.getElementById('jsxRoot'))
root.render(heading)
