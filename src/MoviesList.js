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
                  <img src="./public/favicon.ico" />
                </div>
                <div className="content">
                  <div className="header">Matt Giampietro</div>
                  <div className="meta">
                    <a>Friends</a>
                  </div>
                  <div className="description">
                    Matthew is an interior designer living in New York.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
