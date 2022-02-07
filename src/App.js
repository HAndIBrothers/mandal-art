import "./App.css";
import "./reset.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import UpperContainer from "./components/UpperContainer";

function App() {
  return (
    <div className="container">
      <Header />
      <UpperContainer />
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleChange(evt) {
    const connected_node = evt.target.dataset.connected_node
      ? evt.target.dataset.connected_node
      : null;

    dispatch({
      type: "INPUT_CHANGE",
      payload: {
        xy: evt.target.id,
        value: evt.target.value,
        connected_node: connected_node,
      },
    });
  }

  let element = [];
  for (let i = 1; i < 10; i++) {
    let group = [];
    for (let j = 1; j < 10; j++) {
      const key = `x${i}y${j}`;
      group.push(
        <div key={key} className={`group${i}__item group__item`}>
          <label>
            <textarea
              id={key}
              data-connected_node={data[key].connected_node}
              onChange={handleChange}
              type="text"
              value={data[key].text}
            />
          </label>
        </div>,
      );
    }
    element.push(
      <div key={`group${i}`} className={`group${i} group`}>
        {group}
      </div>,
    );
  }
  return (
    <main className="main">
      <section className="cell-container">{element}</section>
    </main>
  );
}
export default App;
