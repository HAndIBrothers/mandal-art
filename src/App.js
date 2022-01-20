import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  const data = useSelector((state) => state);

  let element = [];
  for (let x = 1; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
      const key = `x${x}y${y}`;
      element.push(<li id={key}>{data[key].text}</li>);
    }
  }
  console.log(element);
  return (
    <article className="main">
      <ul>{element}</ul>
    </article>
  );
}
export default App;
