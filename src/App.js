import "./App.css";
import "./reset.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import UpperContainer from "./components/UpperContainer";
import { useEffect } from "react";

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
          const textarea_had_data = document.querySelector(`#${key}`);
          const textarea_scroll_height = textarea_had_data.scrollHeight;

          adjustTextareaHeight(textarea_had_data, textarea_scroll_height);
        }
      }
    }
  }, []);

  // To do 1 :: debounce 추가(입력 중일때 event 작동 안하게)
  function handleInput(evt) {
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

    const textarea = evt.target;
    textarea.style.height = "auto";
    adjustTextareaHeight(textarea, textarea.scrollHeight);
  }

  function adjustTextareaHeight(ele, scrollHeight) {
    if (scrollHeight >= 79) {
      ele.style.height = "79px";
    } else {
      ele.style.height = scrollHeight + "px";
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
