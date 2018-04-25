import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videoList";

const API_KEY = "AIzaSyCfZ0ulQRb9sivz20JVgtvoDP9VNYnQbws";
//const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DPO_5Ss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
