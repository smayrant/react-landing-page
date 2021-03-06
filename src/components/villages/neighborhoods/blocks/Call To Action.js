import React from 'react';
import { Col } from 'react-grid-system';
import Title from './houses/Title.js';
import Subtitle from './houses/Subtitle.js';
import Button from './houses/Button.js';


class CallToAction extends React.Component{
  render(){
    return(
      <Col lg={12}>
        <Title />
        <Subtitle />
        <Button />
      </Col>
    )
  }
}

export default CallToAction;
