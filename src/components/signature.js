import React, { PureComponent } from 'react';
import Logo from '../assets/static/images/headshot.webp'
import Icon from './icon';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
        <Icon logo={Logo} />
        <NameWrapper>Joe DiGregorio</NameWrapper>
      </Wrapper> );
  }
}
 
export default Signature;