import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <input
          value={this.state.term}
          onChange={event =>
            this.setState({
              term: event.target.value
            })}
        />
        <button className="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default SearchBar;
