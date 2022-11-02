import "./App.css";
import React, { Component } from "react";
// import Counter from "./component/Counter";
// import Forms from "./component/Forms";
import List from "./component/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Forms /> */}
        <List />
      </div>
    );
  }
}

export default App;
