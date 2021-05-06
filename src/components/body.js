import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery from './gallery';
import Promises from './promises';
import ZoomImage from '../assets/static/images/zoom.webp';
import ActionImage from '../assets/static/images/action.webp';
import CodeImage from '../assets/static/images/coding.webp';
import NGCPizzaImage from '../assets/static/images/ngcpizza.webp';
import NGCPizzaImage2 from '../assets/static/images/ngcpizza2.webp';
import NGCPizzaImage3 from '../assets/static/images/ngcpizza3.webp';
import NGCPizzaImage4 from '../assets/static/images/ngcpizza4.webp';
import NGCPizzaImage5 from '../assets/static/images/ngcpizza5.webp';
import WeeklyEatsImage from '../assets/static/images/weeklyeats.webp';
import FacebookCloneImage from '../assets/static/images/fb-clone.webp';
import InstagramCloneImage from '../assets/static/images/ig-clone.webp';
import Portfolio from './portfolio';
import ImageLink from './imageLink';
import ScrollingGallery from './ScrollingGallery';
/*********************************** Styles ***********************************/

const weeklyEatsImages = [WeeklyEatsImage];
const ngcPizzaImages = [NGCPizzaImage, NGCPizzaImage2, NGCPizzaImage3, NGCPizzaImage4, NGCPizzaImage5];

const Img = styled.img`
  &:not(:first-of-type)&:not(:last-of-type) {
    margin: 0 23px;
  }
  &:last-of-type {
    @media(max-width: 1129px){
      display:none;
    }
  }
  &:first-of-type {
    @media(max-width: 519px){
      display:none;
    }
  }
`;
const BodyText = styled.div`
  max-width: 1125px;
  margin: auto;
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
@media (max-width: 1129px){
  max-width: 575px;
  font-size: 18px;
  line-height: 40px;
}
@media (max-width: 800px){
  max-width: 450px;
  font-size: 16px;
  line-height: 32px;
}
@media (max-width: 600px){
  max-width: 400px;
  font-size: 14px;
  line-height: 28px;
}
`;
const PortfolioItem = styled.a`
  display: block;
  margin: 0 auto 50px auto;
  max-width: 1200px;
  height: auto;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.25);
  transition: transform 100ms ease-in;
  &:last-of-type{
    margin-bottom: 0;
  }

  &:hover {
    transform: scale(1.03);
  }
`;
/********************************* Javascript *********************************/
function Body() {
  const [openModal, setopenModal] = useState(false);
  const [imageSet, setimageSet] = useState([]);
  return (
    <>
      <Gallery>
        <Img src={ZoomImage} alt="Zoom meeting"/>
        <Img src={ActionImage} alt="Coding"/>
        <Img src={CodeImage} alt="Monitor showing code"/>
      </Gallery>
      <BodyText>
        After 6+ years of software development experience at a top 5 Department of Defense Technology Company I have learned a thing or two.
        </BodyText>
      <Promises />
      <Portfolio id="portfolio">
        <PortfolioItem as={ImageLink} thumbnail={WeeklyEatsImage} onClick={() => {setopenModal(true); setimageSet(weeklyEatsImages)}} alt="Weeklyeats portfolio project"/>
        <PortfolioItem as={ImageLink} thumbnail={NGCPizzaImage} onClick={() => {setopenModal(true); setimageSet(ngcPizzaImages)}} alt="NGC Pizza portfolio project"/>
        <PortfolioItem as={ImageLink} thumbnail={FacebookCloneImage} href='https://joe-digz-facebook-clone.firebaseapp.com/' alt="Facebook clone portfolio project"/>
        <PortfolioItem as={ImageLink} thumbnail={InstagramCloneImage} href="https://joe-digz-instagram-clone.firebaseapp.com/" alt="Instagram clone portfolio project"/>
      </Portfolio>
      <ScrollingGallery images={imageSet} open={openModal} onClose={() => setopenModal(false)} />
    </>
  );
}

export default Body;
