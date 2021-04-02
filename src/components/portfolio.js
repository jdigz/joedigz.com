import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 96px;
  font-weight: bold;
`;

class Portfolio extends PureComponent {
  render() { 
    return (
      <div>
        <Heading>No more talking How about a taste</Heading>
      </div>
      );
  }
}
 
export default Portfolio;