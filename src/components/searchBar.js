import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className="col-md-12 search-bar">
        <input
          type="search"
          value={this.state.term}
          placeholder="input name "
          onChange={this.onInputChange}
        />
      </div>
    );
  }

  onInputChange(event) {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// onChange={event => this.onInputChange(event.target.value)}
