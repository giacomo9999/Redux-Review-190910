import React from "react";
import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container-outer">
        <h2>Redux!</h2>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
