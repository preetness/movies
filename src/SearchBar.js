import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted form">
            <div className="one field">
              <div className="field">
                <input
                  onChange={this.props.onInputChange}
                  placeholder="Enter search term(s)"
                  type="text"
                  value={this.props.search}
                />
              </div>
            </div>
            <div className="inline field" />
            <div
              className="ui submit button"
              onClick={this.props.onHandleSearch}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    );
  }
}
