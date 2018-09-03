import React from 'react';
import { Container } from 'react-grid-system';
import Heading from './houses/Heading.js';
import Divider from './houses/Divider.js';
import Paragraph from './houses/Paragraph.js';

class SectionDescription extends React.Component{
  render(){
    return(
      <section className="section-description">
        <Container>
            <Heading />
            <Divider />
            <Paragraph />
        </Container>
      </section>
    )
  }
}

export default SectionDescription;
