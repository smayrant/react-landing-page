import React from 'react';
import ReactDom from 'react-dom';
import { Container, Row, Col} from 'react-grid-system';
import Navigation from './blocks/Navigation.js';

class Footer extends React.Component{
  render(){
    return(
      <section className="footer">
        <Container>
          <Row>
            <Navigation />
          </Row>
        </Container>
      </section>
    )
  }
}

export default Footer;
