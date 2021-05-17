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
import FacebookCloneImage2 from '../assets/static/images/fb-clone2.webp';
import InstagramCloneImage from '../assets/static/images/ig-clone.webp';
import InstagramCloneImage2 from '../assets/static/images/ig-clone2.webp';
import InstagramCloneImage3 from '../assets/static/images/ig-clone3.webp';
import InstagramCloneImage4 from '../assets/static/images/ig-clone4.webp';
import Portfolio from './portfolio';
import ScrollingGallery from './ScrollingGallery';
import SlidingDrawer from './SlidingDrawer';
import StatementofQualification from './StatementofQualification';

/*********************************** Styles ***********************************/
const nullProject = {
  title: '',
  images: [],
  description: ``,
  hosted: false,
  link: '',
}
const weeklyEatsProject = {
  title: 'WeeklyEats',
  images: [WeeklyEatsImage],
  description: 
  <div>
    WeeklyEats is a weekly meal planning  and calorie tracking website.
    <ul>
      <li>Frontend HTML, SCSS, and Jinja. Backend in Flask with an SQL database</li>
      <li>Full user signup, authentication, and profile management</li>
      <li>Full administrator interface</li>
      <li>Weekly meal view with daily calorie calculation</li>
      <li>Create and add custom meals</li>
    </ul>
  </div>,
  
  hosted: false,
  link: '',
}
const ngcPizzaProject = {
  title: 'FelisPizza',
  images: [NGCPizzaImage, NGCPizzaImage2, NGCPizzaImage3, NGCPizzaImage4, NGCPizzaImage5],
  description:
  <div>
    FelisPizza was a club website for a small group at Northrop Grumman
    <ul>
      <li>Frontend in React and Backend in Express.js</li>
      <li>Chatroom functionality created with SocketCluster Websocket API</li>
      <li>Weekly recorded voting</li>
      <li>Full user database and authentication with email, Facebook, and Google</li>
    </ul>
  </div>,
  hosted: false,
  link: '',
}
const facebookCloneProject = {
  title: 'Facebook Clone',
  images: [FacebookCloneImage2, FacebookCloneImage],
  description: 
  <div>
    This is a Facebook clone built in React with a Firebase backend.
    <ul>
      <li>Google sign in and authentication</li>
      <li>Demonstrates bility to create beautiful functional webpages</li>
      <li>Use of modern design and styling</li>
      <li>Try it out! Login and post something! Everyone can see it.</li>
    </ul>
  </div>,
  hosted: true,
  link: 'https://joe-digz-facebook-clone.firebaseapp.com/',
}
const igCloneProject = {
  title: 'Instagram Clone',
  images: [InstagramCloneImage2, InstagramCloneImage, InstagramCloneImage4, InstagramCloneImage3],
  description: 
  <div>
    This is a Instagram clone built in React with a Firebase backend.
    <ul>
      <li>Google or email sign in and authentication</li>
      <li>Demonstrates bility to create beautiful functional webpages</li>
      <li>Use of modern design and styling</li>
      <li>Try it out! Login and post, like or comment on something! Everyone can see it!</li>
    </ul>
  </div>,
  hosted: true,
  link: 'https://joe-digz-instagram-clone.firebaseapp.com/',
}

const Img = styled.img`
  &:not(:first-of-type)&:not(:last-of-type) {
    margin: 0 23px;

    @media(max-width: 1129px){
      width: 553px;
    }
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
const PortfolioItem = styled.img`
  max-width: 1200px;
  width: 97%;
  height: auto;
  background-color: #f1f1f1;
  display: block;
  margin: 0 auto 50px auto;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.75);
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
  const [project, setproject] = useState(nullProject);
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
      <SlidingDrawer id="portfolio">
        <StatementofQualification />
      </SlidingDrawer>
      <Portfolio>
        <PortfolioItem src={WeeklyEatsImage} onClick={() => {setopenModal(true); setproject(weeklyEatsProject)}} alt="Weeklyeats portfolio project"/>
        <PortfolioItem src={NGCPizzaImage} onClick={() => {setopenModal(true); setproject(ngcPizzaProject)}} alt="NGC Pizza portfolio project"/>
        <PortfolioItem src={FacebookCloneImage} onClick={() => {setopenModal(true); setproject(facebookCloneProject)}} alt="Facebook clone portfolio project"/>
        <PortfolioItem src={InstagramCloneImage} onClick={() => {setopenModal(true); setproject(igCloneProject)}} alt="Instagram clone portfolio project"/>
      </Portfolio>
      <ScrollingGallery
        images={project.images}
        open={openModal}
        hosted={project.hosted}
        href={project.link}
        title={project.title}
        description={project.description}
        onClose={() => setopenModal(false)}
      />
    </>
  );
}

export default Body;
