import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js'
import SectionDescription from './blocks/Section Description.js';

class SectionB extends React.Component{
  render(){
    return(
      <section className="section-b">
        <Container>
          <Row>
            <Col lg={6}>
              <ArticleCover />
            </Col>
            <Col lg={6}>
              <SectionDescription />
            </Col>

          </Row>
        </Container>
      </section>
    )
  }
}

export default SectionB;
