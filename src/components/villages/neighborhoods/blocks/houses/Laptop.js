import React from 'react';
import { Col } from 'react-grid-system';

class Laptop extends React.Component{
  render(){
    return(
      <Col lg={6}>
        <img className="laptop" alt="laptop" src="./images/laptop.svg" />
      </Col>
    )
  }
}

export default Laptop;
