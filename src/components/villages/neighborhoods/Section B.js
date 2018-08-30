import React from 'react';
import ReactDom from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import ArticleCover from './blocks/houses/Article Cover.js'
import SectionDescription from './blocks/Section Description.js';

class SectionB extends React.Component{
  render(){
    return(
      <section className="section-b">
        <Container>
          <Row>
            <ArticleCover />
            <SectionDescription />
          </Row>
        </Container>
      </section>
    )
  }
}

export default SectionB;
