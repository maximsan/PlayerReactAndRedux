import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="ho"
          onChange={event => this.setState({ term: event.target.value })}
        />
        <br/>
         {this.state.term}
        </div>
    );
  }
}

export default SearchBar;
