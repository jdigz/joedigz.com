import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
import styled from "styled-components";

import SocialLinks from './socialLinks';
import SVG from './svg';
import Arrow from '../assets/static/images/down-arrow.svg';

const FooterWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 25px;
  width: 100%;
  justify-content: space-between;
  align-items: bottom;
`;

const Socials = styled.ul`
  position: relative;
  align-items: center;
  margin: 0 25px;
  transition: opacity 0.5s ${props => props.show ? '0.51s' : ''}, bottom 0.01s ${props => props.show ? '' : '0.51s'};
  opacity: ${props => props.show ? 1 : 0};
  bottom: ${props => props.show ? 0 : '-100px'};
`;

const ScrollTopButton = styled.a`
  margin: 0 25px;
  position: relative;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.1);
  transition: box-shadow 0.15s, opacity 0.5s;
  transition: opacity 0.5s;
  opacity: ${props => props.show ? 1 : 0};
  cursor:  ${props => props.show ? 'pointer' : 'auto'};
  &:hover{
    box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.3);
  }
`;

const DownArrow = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  transform: rotate(180deg);
`;

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const FloatingSocials = () => {
  const [hideSocials, setHideSocial] = useState(false)
  const [hideScrollUp, setHideScrollUp] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShowSocials = Math.abs(currPos.y - window.innerHeight) < document.body.clientHeight
      const isShowScrollUp = currPos.y < 0
      if (isShowSocials !== hideSocials) setHideSocial(isShowSocials)
      if (isShowScrollUp !== hideScrollUp) setHideScrollUp(isShowScrollUp)
    },
    [hideSocials, hideScrollUp],
    false,
    false,
    300
  )
  return (
    <FooterWrapper>
      <Socials as={SocialLinks} show={hideSocials} size='25px' width='125px' />
      <ScrollTopButton show={hideScrollUp} onClick={scrollTop}>
        <DownArrow as={SVG} svg={Arrow} size="12px"/>
      </ScrollTopButton>
    </FooterWrapper>
  )
}

export default FloatingSocials;