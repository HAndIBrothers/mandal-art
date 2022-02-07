import "./App.css";
import "./reset.css";
import React, { useEffect } from "react";
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
    console.log("Changed");
    dispatch({
      type: "INPUT_CHANGE",
      payload: {
        xy: evt.target.id,
        value: evt.target.value,
        connected_node: connected_node,
      },
    });

    const textarea_element = evt.target;
    const textarea_style = textarea_element.style;
    console.log(textarea_element.scrollHeight);
    textarea_style.height = "24px";
    textarea_style.height = `${textarea_element.scrollHeight}px`;
    textarea_style.height = `${Math.min(textarea_element.scrollHeight, 64)}px`;
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
              rows="1"
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
