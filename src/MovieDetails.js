import React, { Component } from 'react';

export default class MoviesList extends Component {
  render() {
    return (
      <div className="movie-card">
        <div className="ui card">
          <div className="image">
            <img
              src={
                `https://image.tmdb.org/t/p/original/${this.props.poster}` ||
                './noimage.jpeg'
              }
              alt="{this.props.title}"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.title}</div>
            <div className="meta">
              <a>Release: {this.props.date}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
