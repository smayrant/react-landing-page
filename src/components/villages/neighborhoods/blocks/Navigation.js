import React from 'react';
import Branding from './houses/Branding.js';
import DemoLink from './houses/Demo Link.js';

class Navigation extends React.Component{
  render(){
    return(
      <div>
          <Branding />
          <DemoLink />
      </div>
    )
  }
}

export default Navigation;
