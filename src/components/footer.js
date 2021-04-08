import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Button from './button';
import SocialLinks from './socialLinks';

const FooterWrapper = styled.div`
  margin: 50px auto 100px auto;
  max-width: 1025px;
  text-align: center;
`;
const FooterHeader = styled.h1`
  margin-bottom: 50px;
  font-size: 72px;
  font-weight: bold;
  letter-spacing: -5%;
  line-height: 100px;
`;
const FooterText = styled.div`
  margin-bottom: 50px;
  font-size: 30px;
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
        <Button>
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