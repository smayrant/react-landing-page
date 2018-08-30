import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Header extends React.Component {
  render(){
    return(
      <section className="header">
        <container>
           <Row>
             <Navigation />
           </Row>
           <Row>
             <CallToAction />
           </Row>
           <Row>
             <SlackChannel />
           </Row>
        </container>
      </section>
    )
  }
}
