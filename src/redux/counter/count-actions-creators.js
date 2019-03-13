export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";

export const increment = (param = 1) => ({
  type: COUNTER_INCREMENT,
  payload: param
});

export const decrement = (param = 1) => ({
  type: COUNTER_DECREMENT,
  payload: param
});
