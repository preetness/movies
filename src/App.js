import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import './App.css';
import SearchBar from './SearchBar';

export default class App extends Component {
  state = {
    movies: [],
    search: ''
  };

  onInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  onHandleSearch = () => {
    const API_KEY = 'de7cc6bf9531c73cb220773434d8bd50';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${
      this.state.search
    }&page=1&include_adult=false`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          movies: data.results
        })
      );
  };

  render() {
    return (
      <div className="ui container">
        <h2 className="app-title">Movie Finder</h2>
        <SearchBar
          onInputChange={this.onInputChange}
          onHandleSearch={this.onHandleSearch}
        />
        {this.state.movies.map(movie => {
          return (
            <MovieDetails
              key={movie.id}
              title={movie.title}
              date={movie.release_date}
              description={movie.overview}
              poster={movie.poster_path}
            />
          );
        })}
      </div>
    );
  }
}
