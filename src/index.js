import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

function reducer(state, action) {
  let obj = {};
  switch (action.type) {
    case "INPUT_CHANGE":
      const { xy, value, connected_node } = action.payload;
      const newState = { ...state };
      console.log("INPUT CHANGED");
      newState[xy].text = value;
      if (connected_node) {
        newState[connected_node].text = value;
      }
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
          obj[`x${group}y${cell}`] = {
            x: group,
            y: cell,
            connected_node: connected_node,
            text: "",
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
