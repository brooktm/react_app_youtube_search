import React, { Component } from "react";
import SearchBar from "./component/search-bar";
import YTsearch from "youtube-api-search";
import "./App.css";

const api_key = "AIzaSyCmA72rLvhdlbNZzfLPlxrb6j8StywEfoA";
YTsearch({ key: api_key, term: "surfboards" }, function(data) {
  console.log(data);
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
