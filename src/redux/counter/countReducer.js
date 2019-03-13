import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./count-actions-creators";

const INITIAL_STATE = {
  number: 0
};

export const counterIncrement = ({ number }, action) => ({
  number: number + action.payload
});

export const counterDecrement = ({ number }, action) => ({
  number: number - action.payload
});

const reducerMap = {
  [COUNTER_DECREMENT]: counterDecrement,
  [COUNTER_INCREMENT]: counterIncrement
};
export default (state = INITIAL_STATE, action) =>
  reducerMap[action.type] ? reducerMap[action.type](state, action) : state;
