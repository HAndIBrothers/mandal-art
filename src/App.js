import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  const [inputValue, setInputValue] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
  ]);

  return (
    <div className="main">
      <div>
        {inputValue.map((ele) => (
          <input
            key={ele.id}
            name={ele.id}
            className="main__item"
            type="text"
            value={ele.value}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
