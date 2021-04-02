import React, { PureComponent } from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  width: 100%;
  margin: 55px 0;
  display: grid;
  grid-template-columns: repeat(3, 40%);
  justify-content: center;
  column-gap: 23px;
  overflow: hidden;

  @media(max-width: 1439px){
    grid-template-columns: repeat(3, 42%);
  }
  @media(max-width: 1129px){
    grid-template-columns: repeat(2, 50%);
  }
  @media(max-width: 519px){
    grid-template-columns: repeat(1, 100%);
  }
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