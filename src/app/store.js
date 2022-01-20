import { configureStore } from "@reduxjs/toolkit";

function reducer(state, action) {
  let arr = [];
  if (state === undefined) {
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        arr.push({ [`x${i}y${j}`]: { connted_node: -1, text: "" } });
      }
    }
    return arr;
  }
}

export default configureStore(reducer);
