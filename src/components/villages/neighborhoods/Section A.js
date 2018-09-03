import React from 'react';
import { Container, Row, Col} from 'react-grid-system';
import Laptop from './blocks/houses/Laptop.js';
import SectionDescription from './blocks/Section Description.js';

class SectionA extends React.Component{
  render(){
    return(
      <section className="section-a">
        <Container>
          <Row>
            <Col lg={6}>
              <SectionDescription />
            </Col>
            <Col lg={6}>
              <Laptop />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default SectionA;
