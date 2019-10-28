import React, { useReducer } from "react";
import "../App.css";
import { initialState, reducer } from "../actions/reducers/App";
import AppContext from "../hooks/contexts/App";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Hello, TypeScript!</header>
    </div>
  );
};

const Container: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState());

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <App />
    </AppContext.Provider>
  );
};

export default Container;

// lassName = "App-link";
// href = "https://reactjs.org";
// target = "_blank";
// rel = "noopener noreferrer";
