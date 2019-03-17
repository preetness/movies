import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import NoMovies from './NoMovies';
import './App.css';
import SearchBar from './SearchBar';
import { Divider } from 'semantic-ui-react';

const API_KEY = 'de7cc6bf9531c73cb220773434d8bd50';

export default class App extends Component {
  state = {
    movies: [],
    search: '',
    header: 'Now Playing'
  };

  nowPlaying = () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          movies: data.results
        })
      );
  };

  componentDidMount() {
    this.nowPlaying();
  }

  onInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  onHandleSearch = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${
      this.state.search
    }&page=1&include_adult=false`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          movies: data.results,
          header: 'Search Results: '
        })
      );
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.setState({
      search: ''
    });
  };

  render() {
    const { movies, header, search } = this.state;
    return (
      <div>
        <h2
          style={headerStyle}
          className="app-title"
          onClick={() => window.location.reload()}
        >
          Movie Finder
        </h2>

        <SearchBar
          onInputChange={this.onInputChange}
          onHandleSearch={this.onHandleSearch}
          onFormSubmit={this.onFormSubmit}
          search={search}
        />
        <Divider horizontal section style={currentMovieStyle}>
          {header}
        </Divider>
        <div className="ui grid">
          {header === 'Search Results: ' && movies.length === 0 ? (
            <NoMovies />
          ) : (
            <div className="ui stackable centered cards">
              {movies.map(movie => {
                return (
                  <MovieDetails
                    key={movie.id}
                    title={movie.title}
                    date={movie.release_date}
                    overview={movie.overview}
                    poster={movie.poster_path}
                    rating={movie.vote_average}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const headerStyle = {
  marginTop: '2%',
  cursor: 'pointer'
};

const currentMovieStyle = {
  marginTop: '2%',
  marginBottom: '3%'
};
