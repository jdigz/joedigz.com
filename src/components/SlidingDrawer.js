import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';

const SlidingDrawerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;
const SlidingDrawerTitle = styled.div`
  font-size: 33px;
  background-color: #f1f1f1;
  width: 100%;
  text-align: center;
  padding-bottom: 25px;

  @media (max-width: 1439px){
    font-size: 28px;
  }
  @media (max-width: 1129px){
    font-size: 22px;
    letter-spacing: 1px;
  }
  @media (max-width: 800px){
    font-size: 20px;
    letter-spacing: 0px;
  }
  @media (max-width: 600px){
    font-size: 18px;
  }
`;
const AnimateHeightContainer = styled.div`
  border-top: 4px solid var(--primary);
  border-bottom: 4px solid var(--primary);
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
`;
const UpArrow = styled.div`
  width: 0;
  height: 0;
  border-right: 25px solid transparent;
  border-bottom: 25px solid var(--primary);
  border-left: 25px solid transparent;
  cursor: pointer;
`;
const DownArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 25px solid var(--primary);
  border-right: 25px solid transparent;
  border-left: 25px solid transparent;
  cursor: pointer;
`;



const SlidingDrawer = ({ children, id }) => {
  const [open, setopen] = useState(false);
  const [height, setheight] = useState(0);
  const handleMouseEnter = () => {
    if(!open) {
      setheight(125);
    }
  }
  const handleMouseLeave = () => {
    if(!open) {
      setheight(0);
    }
  }
  const handleClick = () => {
    if(open) {
      setopen(false);
      setheight(0);
    } else {
      setopen(true);
      setheight('auto');
    }
  }
  return (
    <SlidingDrawerContainer
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      open={open}
    >
      <SlidingDrawerTitle>What can I do for you? Click here to find out!</SlidingDrawerTitle>
      <AnimateHeightContainer>
        <AnimateHeight
          duration={500}
          height={height}
        >
          {children}
        </AnimateHeight>
        {open && <UpArrow onClick={handleClick} />}
      </AnimateHeightContainer>
      {!open && <DownArrow onClick={handleClick} />}
    </SlidingDrawerContainer>
  )
}

export default SlidingDrawer
