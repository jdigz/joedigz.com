import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Signature from './signature';
import Button from './button';

const HeaderWrap = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 50px 0 32px 0;
  font-weight: 900;
  font-size: 96px;
  letter-spacing: -5px;
  text-align: center;
`;
const Subtitle = styled.span`
  max-width: 1125px;
  margin-bottom: 60px;
  text-align: center;
  line-height: 48px;
  font-size: 30px;
  font-weight: 300;
`;
const ScrollLink = styled.a`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -1px;
  line-height: 65px;
  text-align: center;

  &:hover {
    text-decoration: none;
  }
`;
const CTAWrapper = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const ScrollDownArrow = styled.svg`
  margin-right: 10px;
`;
class Header extends PureComponent {
  render() { 
    return (
      <HeaderWrap>
        <Signature />
        <Title>Freelance Website Developer</Title>
        <Subtitle>I help individuals and small businesses grow and build their brand by
          creating stunning and functional websites at affodable prices.
        </Subtitle>
        <CTAWrapper>
          <Button href='.'>I'm Interested</Button>
          <ScrollLink href='#portfolio'>
            <ScrollDownArrow xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16" focusable="false">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </ScrollDownArrow>
            Show me your work
          </ScrollLink>
        </CTAWrapper>
      </HeaderWrap>
    );
  }
}

export default Header;