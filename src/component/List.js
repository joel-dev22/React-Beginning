import React, { Component } from "react";

export default class List extends Component {
  state = {
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

  render() {
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
      </div>
    );
  }
}
