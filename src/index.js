import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetails";

const API_KEY = "AIzaSyB-2eC6_h2l6iMUqRDecMGuc72DqRDzhc0";
//const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DPO_5Ss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <SearchBar />
        </div>
        <div className="row">
          <VideoDetails video={this.state.selectedVideo} />

          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
