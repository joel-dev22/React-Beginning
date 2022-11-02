import React, { Component, PureComponent } from "react";

export default class List extends PureComponent {
  state = {
    score: 5,
    data: [
      {
        id: 1,
        name: "Joel",
        age: 22,
      },
      {
        id: 2,
        name: "Jemi",
        age: 16,
      },
    ],
  };

  incrementScore = () => {
    this.setState({
      score: 10,
    });
  };

  render() {
    console.log(this.state.score);
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => {
            return (
              <li key={index}>
                {value.id}-{value.name}-{value.age}
              </li>
            );
          })}
        </ul>
        <button onClick={this.incrementScore}>Click me </button>
      </div>
    );
  }
}
