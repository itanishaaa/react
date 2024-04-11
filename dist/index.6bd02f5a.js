const heading = React.createElement("h1", {
    id: "title"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id: "title"
}, "Heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
console.log(heading); // Logging heading to the console
const root = document.getElementById("root");
ReactDOM.render(container, root); // Rendering container to the root element

//# sourceMappingURL=index.6bd02f5a.js.map
