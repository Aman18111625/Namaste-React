const heading = React.createElement("h1", { id: "heading" }, "Hello world!");
console.log(heading);//object
const root = ReactDOM.createRoot(document.getElementById("root-container"));
root.render(heading);
//this render function accept this object and convert into a heading tag before that it's only a normal js object not a html element
