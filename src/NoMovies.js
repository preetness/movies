import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

const NoMovies = () => (
  <Segment size="huge" placeholder>
    <Header icon>
      <Icon name="search" />
      No movies found with that search. Please try again.
    </Header>
  </Segment>
);

export default NoMovies;
