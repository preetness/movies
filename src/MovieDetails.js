import React, { Component } from 'react';
import image from './noimage.png';

export default class MoviesList extends Component {
  render() {
    return (
      <div className="movie-card">
        <div className="ui card">
          <div className="image">
            {this.props.poster !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${this.props.poster}`}
                alt="{this.props.title}"
              />
            ) : (
              <img src={image} alt="{this.props.title}" />
            )}
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
