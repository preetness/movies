import React, { Component } from 'react';

export default class MoviesList extends Component {
  render() {
    return (
      <div>
        <div className="ui stackable four column grid">
          <div className="column">
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${
                      this.props.poster
                    }`}
                    alt="{this.props.title}"
                  />
                </div>
                <div className="content">
                  <div className="header">{this.props.title}</div>
                  <div className="meta">
                    <a>Release: {this.props.date}</a>
                  </div>
                  <div className="description">{this.props.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
