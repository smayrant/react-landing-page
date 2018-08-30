import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

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
