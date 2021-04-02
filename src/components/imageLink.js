import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
`;

class ImageLink extends PureComponent {
  render() { 
    return (
      // <a className={this.props.className} href={this.props.href} target="_blank">
        <Img className={this.props.className} src={this.props.thumbnail}/>
      // </a>
    );
  }
}
 
export default ImageLink;