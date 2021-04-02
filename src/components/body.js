import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ImagePlaceholder from '../assets/static/images/imagePlaceholder.jpg';
import Icon from './icon';

/******************************************************************************/
/*********************************** Styles ***********************************/
/******************************************************************************/

const BodyWrapper = styled.div`
/* Variable for the Image Dimension */
  /* --img-dim: calc(33vw - 14px); */
`;
const ImageWrapper = styled.div`
  width: 100%;
  margin: 55px 0;
  display: grid;
  grid-template-columns: repeat(3, 600px);
  justify-content: center;
  column-gap: 23px;
  overflow: hidden;

  @media(max-width: 1439px){
    grid-template-columns: repeat(3, 42%);
  }
  @media(max-width: 1129px){
    grid-template-columns: repeat(2, 50%);
  }
  @media(max-width: 519px){
    // Here we want another image removed so we have only 1 picture
  }
`;
const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 670px;
  border: 1px solid red;
  &:last-of-type {
    @media(max-width: 1129px){
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
  font-size: 30px;
  font-weight: 300;
`;
const PromiseSectionWrapper = styled.div`
  padding: 50px 75px;
  width: 100%;
  background-color: #f1f1f1;
  overflow: hidden;
`;
const PromiseSection = styled.div`
  max-width: 1440px;
  margin: auto;
`;
const PromiseHeading = styled.h1`
  margin-bottom: 40px;
  font-size: 48px;
  letter-spacing: 2px;
`;
const PromiseContainer = styled.div`
  display: flex;
`;
const PromiseTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 30px;
  border-right: 2px solid lightgray;
`;
const PromiseTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 1px;
`;
const PromiseDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 750px;
`;
const PromiseDescription = styled.div`
  margin: 30px;
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 1px;
`;
/******************************************************************************/
/********************************* Javascript *********************************/
/******************************************************************************/

class Body extends PureComponent {
  render() {
    return (
      <BodyWrapper>
        <ImageWrapper>
          <Img src={ImagePlaceholder} />
          <Img src={ImagePlaceholder} />
          <Img src={ImagePlaceholder} />
        </ImageWrapper>
        <BodyText>
          After 6+ years of software development experience at a top 5 Department of Defense Technology Company I have learned a thing or two.
        </BodyText>
        <PromiseSectionWrapper>
          <PromiseSection>
            <PromiseHeading>What I promise to all of my clients</PromiseHeading>
            <PromiseContainer>
              <PromiseTitleContainer>
                <PromiseTitle>
                  <Icon marginRight="25px" fontColor="white" size="60px">1</Icon>
                  A website that you will love
                </PromiseTitle>
                <PromiseTitle>
                  <Icon marginRight="25px" fontColor="white" size="60px">2</Icon>
                  Excellent communication
                </PromiseTitle>
                <PromiseTitle>
                  <Icon marginRight="25px" fontColor="white" size="60px">3</Icon>
                  A reliable teammate
                </PromiseTitle>
              </PromiseTitleContainer>
              <PromiseDescriptionContainer>
                <PromiseDescription>
                Creating websites for others is my passion. I'm not happy if
                you're not happy, so I will make sure that you love the results.
                </PromiseDescription>
                <PromiseDescription>
                If there is no communication, there is no success. I make sure
                that I properly communicate everything, both good and bad so
                that you can be at ease and confident with the product that you
                will receive.
                </PromiseDescription>
                <PromiseDescription>
                At the end of the day the results are what matter. If we are
                having trouble scoring points for you and your business I will
                do whatever I can to ensure that we make a new gameplan to find
                success.
                </PromiseDescription>
              </PromiseDescriptionContainer>
            </PromiseContainer>
          </PromiseSection>
        </PromiseSectionWrapper>
      </BodyWrapper>
    );
  }
}

export default Body;