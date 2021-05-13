import React, { PureComponent } from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  width: 100%;
  margin: 55px 0;
  justify-content: center;
  display: flex;
  overflow: hidden;
`;

class Gallery extends PureComponent {
  render() { 
    return (
      <GalleryWrapper>
        {this.props.children}
      </GalleryWrapper>);
  }
}
 
export default Gallery;