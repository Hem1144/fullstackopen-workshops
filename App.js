const person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.age),
    React.createElement("p", {}, props.from),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Using props in react"),

    React.createElement(person, { name: "hemlal", age: 23, from: "Nepal" }),
    React.createElement(person, { name: "Mili", age: 25, from: "Jamaica" }),
    React.createElement(person, { name: "John", age: 28, from: "Ghana" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
