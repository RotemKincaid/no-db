import React, { Component } from "react";
import TodoList from "./Components/TodoList/TodoList";
import Header from "./Components/Header/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-container1">
          <Header />
        </div>
        <div className="list">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
