import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="ui fluid action input">
        <input
          onChange={this.props.onInputChange}
          placeholder="Enter search term(s)"
          type="text"
          value={this.props.search}
        />
        <button onClick={this.props.onHandleSearch}>
          <i className="search icon" />
        </button>
      </div>
    );
  }
}
