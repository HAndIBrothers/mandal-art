import "./App.css";
import "./reset.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import UpperContainer from "./components/UpperContainer";
import { useEffect, useRef } from "react";

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

  useEffect(() => {
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        const key = `x${i}y${j}`;
        if (data[key].text !== "") {
          const textarea_filled = document.querySelector(`#${key}`);
          const textarea_scroll_height = textarea_filled.scrollHeight;

          if (textarea_scroll_height <= 29) {
            textarea_filled.style.height = "29px";
          } else if (textarea_scroll_height <= 54) {
            textarea_filled.style.height = "54px";
          } else {
            textarea_filled.style.height = "79px";
          }
        }
      }
    }
  }, [data]);

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

  function handleInput(evt) {
    const textarea = evt.target;
    const textarea_height_read_only = textarea.scrollHeight;
    // console.log(textarea_height_read_only);
    textarea.style.height = 0;

    if (textarea_height_read_only <= 29) {
      textarea.style.height = "29px";
    } else if (textarea_height_read_only <= 54) {
      textarea.style.height = "54px";
    } else {
      textarea.style.height = "79px";
    }
  }

  let element = [];
  for (let i = 1; i < 10; i++) {
    let group = [];
    for (let j = 1; j < 10; j++) {
      const key = `x${i}y${j}`;
      group.push(
        <div key={key} className={`group${i}__item group__item`}>
          <textarea
            id={key}
            data-connected_node={data[key].connected_node}
            onChange={handleChange}
            onInput={handleInput}
            rows="1"
            type="text"
            value={data[key].text}
          />
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
