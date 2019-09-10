import { createStore } from "redux";

const initialState = { count: 0, hamsters: -99 };

function reducer(state = initialState, action) {
  console.log("Reducer ", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        hamsters: state.hamsters + 10
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        hamsters: state.hamsters - 10
      };
    case "RESET":
      return {
        count: 0,
        hamsters: -99
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "RESET" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "DECREMENT" });

export default store;
