import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
`;

class ImageLink extends PureComponent {
  render() { 
    return (
      <a onClick={this.props.onClick} className={this.props.className} href={this.props.href} target="_blank" rel="noreferrer">
        <Img className={this.props.className} src={this.props.thumbnail} alt={this.props.alt}/>
      </a>
    );
  }
}
 
export default ImageLink;