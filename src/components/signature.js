import React, { PureComponent } from 'react';
import Logo from '../assets/static/images/headshot.jpg'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;
const NameWrapper = styled.span`
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
`;

class Signature extends PureComponent {
  render() { 
    return (
      <Wrapper>
        <Icon />
        <NameWrapper>Joe DiGregorio</NameWrapper>
      </Wrapper> );
  }
}
 
export default Signature;