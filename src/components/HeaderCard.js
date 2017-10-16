import React from 'react';
import { Card, Grid, Icon, Image } from 'semantic-ui-react';
import will from '../images/will.jpg';

const HeaderCard = () => (
    <Card centered={true} color='teal'>
      <Image src={will} size='medium' />
      <Card.Content>
        <Card.Header textAlign='center'>
          Will Hodge
        </Card.Header>
        <Card.Description textAlign='center'>
          Hello! My name is Will Hodge and I am a junior at Tufts University
          majoring in computer science and biopsychology.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid centered={true} relaxed={true} padded={true}>
          <a>
            <Icon name='lab'/>
              Projects
          </a>
          <a href='mailto:will.hodge@tufts.edu'>
            <Icon name='mail outline'/>
          </a>
          <a href='https://www.linkedin.com/in/will-hodge/'>
            <Icon name='linkedin'/>
          </a>
          <a href='https://github.com/will-hodge'>
            <Icon name='github'/>
          </a>
        </Grid>
      </Card.Content>
    </Card>
);

export default HeaderCard;
