import React, { Component } from 'react';
import MoviesList from './MoviesList';
import './App.css';

export default class App extends Component {
  state = {
    movies: []
  };

  render() {
    return (
      <div className="ui container">
        <h2 className="app-title">Movie Finder</h2>
        <div className="ui inverted segment">
          <div className="ui inverted form">
            <div className="one field">
              <div className="field">
                <input placeholder="Enter search term(s)" type="text" />
              </div>
            </div>
            <div className="inline field" />
            <div className="ui submit button">Submit</div>
          </div>
        </div>
        <MoviesList />
      </div>
    );
  }
}
