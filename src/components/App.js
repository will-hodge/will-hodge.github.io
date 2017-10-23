import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import HeaderCard from './HeaderCard';

const App = () => (
  <div className = "App">
    <Container>
      <Divider hidden />
      <HeaderCard />
    </Container>
  </div>
);

export default App;

/* TODO: make project component and have button hide/unhide it */
