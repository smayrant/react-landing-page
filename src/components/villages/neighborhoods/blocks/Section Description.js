import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Heading from './houses/Heading.js';
import Divider from './houses/Divider.js';
import Paragraph from './houses/Paragraph.js';

class SectionDescription extends React.Component{
  render(){
    return(
      <section className="section-description">
        <Container>
          <Col lg={6}>
            <Heading />
            <Divider />
            <Paragraph />
          </Col>
        </Container>
      </section>
    )
  }
}

export default SectionDescription;
