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
      const { xy, value } = action.payload;
      const newState = { ...state };
      console.log("INPUT CHANGED");
      newState[xy].text = value;
      return newState;
    default:
      for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
          obj[`x${i}y${j}`] = {
            x: i,
            y: j,
            connted_node: -1,
            text: `x: ${i} y: ${j}`,
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
