import React, { Component } from "react";

export default class User extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  onChange = (event) => {
    this.props.onNameChange(event.target.value);
  };
  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
