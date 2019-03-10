import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import './App.css';
import SearchBar from './SearchBar';

export default class App extends Component {
  state = {
    movies: []
  };

  render() {
    return (
      <div className="ui container">
        <h2 className="app-title">Movie Finder</h2>
        <SearchBar />
        <MovieDetails />
      </div>
    );
  }
}
