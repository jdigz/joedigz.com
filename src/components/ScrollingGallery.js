import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Modal } from '@material-ui/core';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import LensIcon from '@material-ui/icons/Lens';

function ScrollingGallery({ open, onClose, images, title, description, hosted, href }) {
  const [imageNum, setimageNum] = useState(0)
  const [moreInfo, setmoreInfo] = useState(false)

  const handleScrollGallery = value => {
    if (value < 0) {
      setimageNum(imageNum > 0 ? imageNum - 1 : images.length - 1)
    } else {
      setimageNum(imageNum < (images.length - 1) ? imageNum + 1 : 0)
    }
  }

  const handleClose = () => {
    setimageNum(0);
    setmoreInfo(false);
    onClose()
  }
  const ModalContainer = styled.div`
    background-color: rgba(0,0,0,0.65);
  `;
  const ModalBody = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    height: 100%;

    @media(max-width: 999px) {
      padding: 25px 10px;
    }
  `;
  const ModalTitle = styled.h1`
    color: white;
    margin: 10px 0 25px 0;
  `;
  const ModalCenter = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;
  const ModalArrow = styled.button`
    padding: 0;
    outline: 0;
    border: 0;
    background: 0 0;
    color: gray;
    border-color: gray;
    transition: color 0.15s, border-color .15s;
    height: 300px;
    opacity: ${props => props.show ? '' : 0};
  
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
  const ModalGallery = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media(max-width: 1250px) {
      margin: 0 12px;
    }
  `;
  const ModalImage = styled.img`
    flex: 1 1 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
    opacity: ${props => props.show ? '' : 0};
  `;
  const ModalImageNumber = styled.ul`
    width: 100%;
    margin-top: 5px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5em;
    opacity: ${props => props.show ? '' : 0};
  `;
  const ModalSelectedImage = styled.div`
    color: ${props => props.imageNum === imageNum ? 'var(--primary)' : 'lightgray' };
    width: 0.1em;
    height: 0.1em;
    margin: 1px;

    &:hover {
      color: ${props => props.imageNum !== imageNum ? 'var(--primary)' : ''};
      cursor: ${props => props.imageNum !== imageNum ? 'pointer' : ''};
    }
  `;
  const ModalDescription = styled.div`
    max-width: 100%;
    max-height: 100%;
    opacity: ${props => props.show ? '' : 0};
    position: absolute;
    color: white;
    margin: 24px 0;
    line-height: 28px;
    letter-spacing: 1px;
    margin: auto;

    @media (max-width: 1129px){
      font-size: 18px;
      line-height: 1.6;
    }
    @media (max-width: 800px){
      font-size: 16px;
      line-height: 1.5;
    }
    @media (max-width: 600px){
      font-size: 15px;
    }
  `;
  const ModalLive = styled.div`
    margin: auto;
    text-align: center;
    font-size: 18px;
  `;
  const blink = keyframes`
    from {
      box-shadow: 0px 0px 7px 2px rgba(255, 0, 0, 0.75);
    }
  `;
  const ModalLiveLight = styled.span`
    display: inline-block;
    height: 0.7rem;
    width: 0.7rem;
    background: red;
    border-radius: 50%;
    font-size: 1em;
    animation: ${blink} 2s linear infinite;
  `;
  const ModalLink = styled.a`
    background-color: var(--primary);
    color: white;
    border-radius: 20px;
    padding: 7px;
    transition: color 0.25s, background-color .25s;
    font-size: 15px;

    &:hover{
      text-decoration: none;
      color: var(--primary);
      background-color: white;
    }
  `;
  const ModalButton = styled.button`
    margin: 10px 20px;
    background-color: var(--primary);
    color: white;
    outline: 0;
    border: 0;
    border-radius: 20px;
    width: 100px;
    padding: 4px;
    transition: color 0.25s, background-color .25s;

    &:hover {
      background-color: white;
      color: black;
    }
  `;

  return (
    <ModalContainer as={Modal} open={open} onClose={onClose} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ModalBody>
        <ModalTitle>
          {title}
        </ModalTitle>
        <ModalCenter>
          <ModalArrow onClick={() => handleScrollGallery(-1)} show={(images.length > 1) && !moreInfo}>
            <ArrowBackIosOutlinedIcon />
          </ModalArrow>
          <ModalGallery>
            <ModalImage src={images[imageNum]} show={!moreInfo}/>
            <ModalImageNumber show={!moreInfo}>
              {images.map((image, key) => {
                console.log(key === imageNum)
                return (<ModalSelectedImage onClick={() => setimageNum(key)} imageNum={key} fontSize='inherit' key={key} as={LensIcon}/>)
              })}
            </ModalImageNumber>
            <ModalDescription show={moreInfo}>
              {description}
              {hosted &&
                <ModalLive>
                  <p>This site is live <ModalLiveLight /></p>
                  <ModalLink href={href} target="_blank" rel="noreferrer">Click Here to check me out!</ModalLink>
                </ModalLive>
              }
            </ModalDescription>
          </ModalGallery>
          <ModalArrow onClick={() => handleScrollGallery(1)} show={(images.length > 1) && !moreInfo}>
            <ArrowForwardIosOutlinedIcon />
          </ModalArrow>
        </ModalCenter>
        <div>
          <ModalButton onClick={() => setmoreInfo(!moreInfo)}>More Info</ModalButton>
          <ModalButton onClick={handleClose}>Close</ModalButton>
        </div>
      </ModalBody>
    </ModalContainer>
  )
}

export default ScrollingGallery
