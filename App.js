const person = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Miller"),
    React.createElement("h2", {}, "Jack"),
    React.createElement("p", {}, "Mili"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, ""),
    React.createElement(person),
    React.createElement(person),
    React.createElement(person),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
