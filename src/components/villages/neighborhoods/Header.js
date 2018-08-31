import React from 'react';
import { Container, Row } from 'react-grid-system';
import Navigation from './blocks/Navigation.js';
import CallToAction from './blocks/Call To Action.js';
import SlackChannel from './blocks/houses/Slack Channel.js';

class Header extends React.Component {
  render(){
    return(
      <section className="header">
        <Container>
           <Row>
             <Navigation />
           </Row>
           <Row>
             <CallToAction />
           </Row>
           <Row>
             <SlackChannel />
           </Row>
        </Container>
      </section>
    )
  }
}

export default Header;
