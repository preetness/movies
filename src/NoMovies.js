import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

const NoMovies = () => (
  <Segment style={noMoviesStyle} size="huge" placeholder>
    <Header icon>
      <Icon name="search" />
      No movies found with that search. Please try again.
    </Header>
  </Segment>
);

const noMoviesStyle = {
  margin: '10% auto 0'
};

export default NoMovies;
