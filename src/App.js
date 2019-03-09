import React, { Component } from 'react';
import MoviesList from './MoviesList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h2 className="app-title">Movie Finder</h2>
        <MoviesList />
      </div>
    );
  }
}
