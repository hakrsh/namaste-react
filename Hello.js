import React from "react"
import ReactDOM from "react-dom/client"

const reactHeading = React.createElement("h1", {
    id: "heading" // attibutes
}, "Hello World from  React!") // children
console.log(reactHeading) // object, [attributes and children => props]
const reactRroot = ReactDOM.createRoot(document.getElementById("reactRoot"))
reactRroot.render(reactHeading)


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
    
const parent = React.createElement('div',{},[
    React.createElement('div',{},[
        React.createElement('h1',{},"I'm an H1 tag from react"),
        React.createElement('h2',{},"I'm an H2 tag from react")
    ]),
    React.createElement('div',{},[
        React.createElement('h1',{},"I'm an H1 tag from react"),
        React.createElement('h2',{},"I'm an H2 tag from react")
    ])
])

const reactRoot2 = ReactDOM.createRoot(document.getElementById('root2'))
reactRoot2.render(parent)
