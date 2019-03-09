import React, { Component } from 'react';
import MoviesList from './MoviesList';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <MoviesList />
      </div>
    );
  }
}
