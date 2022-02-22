import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

function setLocalStorage(key, value, connected_node) {
  localStorage.setItem(key, value);
  // console.log("Set Local Storage >> " + key + ":" + value);
  if (connected_node != null) setLocalStorage(connected_node, value);
}

function reducer(state, action) {
  let obj = {};
  switch (action.type) {
    case "INPUT_CHANGE":
      const { xy, value, connected_node } = action.payload;
      const newState = { ...state };
      // console.log("INPUT CHANGED");
      newState[xy].text = value;
      if (connected_node) {
        newState[connected_node].text = value;
      }

      // :: 로컬 스토리지 저장
      setLocalStorage(xy, value, connected_node);

      return newState;

    default:
      for (let group = 1; group < 10; group++) {
        for (let cell = 1; cell < 10; cell++) {
          let connected_node = null;
          if (group !== 5 && cell === 5) {
            connected_node = `x${cell}y${group}`;
          }
          if (group === 5 && cell !== 5) {
            connected_node = `x${cell}y${group}`;
          }
          const key = `x${group}y${cell}`;

          // Reset 버튼 클릭시
          let value = "";
          if (action.type === "RESET") {
            setLocalStorage(key, "");
          } else {
            value = localStorage.getItem(key);
          }

          if (value == null) value = "";
          obj[key] = {
            x: group,
            y: cell,
            connected_node: connected_node,
            text: value,
          };
        }
      }
      return obj;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
