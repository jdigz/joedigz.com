import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';

const DownArrow = styled.button`
  width: 100px;
  height: 100px;
  background-color: var(--primary);
  transform: rotate(45deg);
  border: none;
  outline: none;
`;

const SlidingDrawer = ({ children }) => {
  const [open, setopen] = useState(false)

  return (
    <>
      <AnimateHeight
        duration={500}
        height={open ? 'auto' : 0}
        style={{borderBottom: '10px solid var(--primary)'}}
      >
        {children}
      </AnimateHeight>
      <DownArrow onClick={() => setopen(!open)}>
        Click
      </DownArrow>
    </>
  )
}

export default SlidingDrawer
