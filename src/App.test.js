import React from "react";
import ReactDOM from "react-dom";
import countReducer from "./redux/counter/countReducer";

it("Si action es del tipo incremento ", () => {
  expect(
    countReducer({ number: 0 }, { type: "COUNTER_INCREMENT", payload: 1 })
  ).toEqual({ number: 1 });
});
it("Si action es del tipo decremento ", () => {
  expect(countReducer({ number: 0 }, { type: "COUNTER_DECREMENT", payload: 5 }))
  .toEqual({ number: -5 })
});
//expect(wrapper.find('.clicks-1')).toBeTruthy();
