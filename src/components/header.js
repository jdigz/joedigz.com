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
const IntroTitle = styled.h1`
  margin: 50px 0 32px 0;
  font-weight: 900;
  font-size: 112px;
  letter-spacing: -5px;
  text-align: center;

  @media (max-width: 1439px){
    font-size: 96px;
  }
  @media (max-width: 1129px){
    font-size: 64px;
    letter-spacing: -3px;
  }
  @media (max-width: 800px){
    font-size: 45px;
    letter-spacing: -2px;
  }
  @media (max-width: 600px){
    font-size: 34px;
  }
`;
const IntroSubtitle = styled.span`
  max-width: 1125px;
  margin-bottom: 60px;
  text-align: center;
  line-height: 48px;
  font-size: 26px;
  font-weight: 300;

  @media (max-width: 1439px){
    max-width: 750px;
    font-size: 22px;
    line-height: 44px;
  }
  @media (max-width: 1130px){
    max-width: 565px;
    font-size: 18px;
    line-height: 40px;
  }
  @media (max-width: 800px){
    max-width: 400px;
    font-size: 16px;
    line-height: 32px;
  }
  @media (max-width: 600px){
    max-width: 300px;
    font-size: 14px;
    line-height: 28px;
  }
`;
const CTAWrapper = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media(max-width: 800px) {
    flex-direction: column;
  }
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
const ScrollDownArrow = styled.svg`
  margin-right: 10px;
`;
class Header extends PureComponent {
  render() { 
    return (
      <HeaderWrap>
        <Signature />
        <IntroTitle>Freelance Website Developer</IntroTitle>
        <IntroSubtitle>I help individuals and small businesses grow and build their brand by
          creating stunning and functional websites at affodable prices.
        </IntroSubtitle>
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