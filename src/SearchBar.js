import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    text: ''
  };

  onInputChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  render() {
    return (
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted form">
            <div className="one field">
              <div className="field">
                <input
                  onChange={this.onInputChange}
                  placeholder="Enter search term(s)"
                  type="text"
                  value={this.state.text}
                />
              </div>
            </div>
            <div className="inline field" />
            <div className="ui submit button">Submit</div>
          </div>
        </div>
      </div>
    );
  }
}
