import React from 'react';
import { Col } from 'react-grid-system';

class ArticleCover extends React.Component{
  render(){
    return(
      <Col lg={6}>
        <img className="article-cover" alt="cover for article" src="./images/articlecover.png" />
      </Col>
    )
  }
}

export default ArticleCover;
