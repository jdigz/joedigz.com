import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@material-ui/core';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85vw;
  height: 85vh;

  @media (max-width: 600px){
    width: 75vw;
  }
`;
const ScrollButton = styled.button`
  padding: 5px;
  outline: 0;
  border: 0;
  background: 0 0;
  color: white;
  transition: color 0.25s, border-color .25s;
  height: 300px;

  @media (max-width: 1129px){
    height: 200px;
  }
  @media (max-width: 800px){
    height: 100px;
  }
  @media (max-width: 600px){
    height: 50px;
  }

  &:hover{
    color: var(--primary);
    border-color: var(--primary);
  }
`;
const GalleryImg = styled.img`
  object-fit: contain;
  max-width: 80vw;
  max-height: 75vh;
  margin: auto;

  @media (max-width: 600px){
    max-width: 70vw;
  }
`;
const CloseButton = styled.button`
  background-color: white;
  outline: 0;
  border: 0;
  border-radius: 20px;
  width: 100px;
  padding: 4px;
  transition: color 0.25s, background-color .25s;

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

function ScrollingGallery({ open, onClose, images }) {
  const [imageNum, setimageNum] = useState(0)

  const handleScrollGallery = value => {
    if (value < 0) {
      setimageNum(imageNum > 0 ? imageNum - 1 : images.length - 1)
    } else {
      setimageNum(imageNum < (images.length - 1) ? imageNum + 1 : 0)
    }
  }

  const handleClose = () => {
    setimageNum(0);
    onClose()
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ScrollButton onClick={() => handleScrollGallery(-1)}>
            <ArrowBackIosOutlinedIcon fontSize='large' hidden={(images.length < 2)} />
          </ScrollButton>
          <ModalBody onClick={handleClose}>
            <GalleryImg src={images[imageNum]} />
          </ModalBody>
          <ScrollButton onClick={() => handleScrollGallery(1)}>
            <ArrowForwardIosOutlinedIcon fontSize='large' hidden={(images.length < 2)} />
          </ScrollButton>
        </div>
        <CloseButton onClick={handleClose}>Close</CloseButton>
      </div>
    </Modal>
  )
}

export default ScrollingGallery
