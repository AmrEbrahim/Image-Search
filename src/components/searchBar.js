import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              id="search"
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
