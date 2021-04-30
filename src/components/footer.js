import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from './button';
import SocialLinks from './socialLinks';

const FooterWrapper = styled.div`
  margin: 50px auto 100px auto;
  max-width: 1025px;
  text-align: center;
  
  @media (max-width: 1129px){
    max-width: 700px;
  }
  @media (max-width: 800px){
    max-width: 500px;
  }
  @media (max-width: 600px){
    max-width: 300px;
  }
`;
const FooterHeader = styled.h1`
  margin-bottom: 50px;
  font-size: 72px;
  font-weight: bold;
  letter-spacing: -5%;
  line-height: 100px;
  
  @media (max-width: 1129px){
    font-size: 56px;
    line-height: 75px;
  }
  @media (max-width: 800px){
    font-size: 42px;
    line-height: 50px;
  }
  @media (max-width: 600px){
    font-size: 32px;
    line-height: 42px;
  }
`;
const FooterText = styled.div`
  margin-bottom: 50px;
  font-size: 30px;
  
  @media (max-width: 1129px){
    font-size: 26px;
  }
  @media (max-width: 800px){
    font-size: 20px;
  }
  @media (max-width: 600px){
    font-size: 18px;
  }
`;
const SocialMediaWrapper = styled.div`
  margin-top: 100px;
  font-size: 24px;
`;

class Footer extends PureComponent {
  render() { 
    return (
      <FooterWrapper>
        <FooterHeader>
          You've come so far<br />
          now it's time to make it official.
        </FooterHeader>
        <FooterText>
          I'll make it easy for you, just click the button below<br/>
          I would love to hear from you!
        </FooterText>
        <Button href='mailto: digregoj@hotmail.com'>
          Send Email Now!
        </Button>
        <SocialMediaWrapper>
          <SocialLinks />
        </SocialMediaWrapper>
      </FooterWrapper>
      );
  }
}
export default Footer;