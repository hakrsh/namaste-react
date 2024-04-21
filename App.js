const reactHeading = React.createElement("h1", {
    id: "heading" // attibutes
}, "Hello World from  React!") // children
console.log(reactHeading) // object, [attributes and children => props]
const reactRroot = ReactDOM.createRoot(document.getElementById("reactRoot"))
reactRroot.render(reactHeading)