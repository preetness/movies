import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="ui form error" onSubmit={this.props.onFormSubmit}>
        <div className="field">
          <div className="ui fluid action input">
            <input
              onChange={this.props.onInputChange}
              placeholder="Enter search term(s)"
              type="text"
              value={this.props.search}
            />
            <button
              disabled={!this.props.search}
              type="submit"
              onClick={this.props.onHandleSearch}
            >
              <i className="search icon" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}
