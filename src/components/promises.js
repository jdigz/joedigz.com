import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from './icon';

const PromiseSectionWrapper = styled.div`
  padding: 50px 75px;
  width: 100%;
  background-color: #f1f1f1;
  overflow: hidden;
  
  @media(max-width: 1129px) {
    padding: 36px 25px;
  }
`;
const PromiseSection = styled.div`
  max-width: 1440px;
  margin: auto;
`;
const PromiseSectionHeading = styled.h1`
  margin-bottom: 40px;
  font-size: 48px;
  letter-spacing: 2px;

@media (max-width: 1439px){
  font-size: 40px;
}
@media (max-width: 1129px){
  font-size: 32px;
  letter-spacing: 1px;
}
@media (max-width: 800px){
  font-size: 24px;
  letter-spacing: 0px;
}
@media (max-width: 600px){
  font-size: 22px;
  letter-spacing: 0px;
}
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
  min-width: 550px;

  @media (max-width: 1439px){
    padding-right: 25px;
    min-width: 470px;
  }
  @media (max-width: 1129px){
    padding-right: 20px;
    min-width: 375px;
  }
  @media (max-width: 1000px){
    margin: auto;
    max-width: 750px;
    border-right: none;
  }
  @media (max-width: 800px){
    padding-right: 15px;
    min-width: 336px;
  }
  @media (max-width: 600px){
    padding-right: 10px;
  }
`;
const PromiseNumber = styled.div`
  min-width: 65px;
  min-height: 65px;
  max-width: 65px;
  max-height: 65px;
  margin-right: 25px;
  line-height: 65px;
  font-size: calc(65px * 0.7);

  @media (max-width: 1439px){
    min-width: 56px;
    min-height: 56px;
    max-width: 56px;
    max-height: 56px;
    margin-right: 20px;
    line-height: 56px;
    font-size: calc(56px * 0.7);
  }
  @media (max-width: 1129px){
    min-width: 44px;
    min-height: 44px;
    max-width: 44px;
    max-height: 44px;
    margin-right: 15px;
    line-height: 44px;
    font-size: calc(44px * 0.7);
  }
  @media (max-width: 800px){
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    margin-right: 10px;
    line-height: 40px;
    font-size: calc(40px * 0.7);
  }
  @media (max-width: 600px){
    min-width: 36px;
    min-height: 36px;
    max-width: 36px;
    max-height: 36px;
    margin-right: 5px;
    line-height: 36px;
    font-size: calc(36px * 0.7);
  }
`;
const PromiseTitle = styled.h4`
  display: flex;
  align-items: center;
  font-size: 33px;
  font-weight: 400;
  letter-spacing: 1px;

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
const PromiseDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 750px;

  @media(max-width: 1000px){
    display: none;
  }
`;
const PromiseDescription = styled.div`
  margin: 30px 5px 30px 30px;
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 1px;
  
  h4+&{
    display:none;
    @media(max-width: 1000px){
      display: unset;
    }
  }

  @media (max-width: 1439px){
    font-size: 20px;
  }
  @media (max-width: 1129px){
    font-size: 17px;
    letter-spacing: 1px;
    line-height: 28px;
  }
  @media (max-width: 800px){
    font-size: 16px;
    letter-spacing: 0px;
  }
  @media (max-width: 600px){
    font-size: 15px;
    letter-spacing: 0px;
  }
`;

class Promises extends PureComponent {
  state = {  }
  render() { 
    return (
      <PromiseSectionWrapper>
          <PromiseSection>
            <PromiseSectionHeading>What I promise to all of my clients</PromiseSectionHeading>
            <PromiseContainer>
              <PromiseTitleContainer>
                <PromiseTitle>
                  <PromiseNumber as={Icon} fontColor="white">1</PromiseNumber>
                  A website that you will love
                </PromiseTitle>
                <PromiseDescription>
                  Creating websites for others is my passion. I'm not happy if
                  you're not happy, so I will make sure that you love the results.
                </PromiseDescription>
                <PromiseTitle>
                  <PromiseNumber as={Icon} fontColor="white">2</PromiseNumber>
                  Excellent communication
                </PromiseTitle>
                <PromiseDescription>
                  If there is no communication, there is no success. I make sure
                  that I properly communicate everything, both good and bad so
                  that you can be at ease and confident with the product that you
                  will receive.
                </PromiseDescription>
                <PromiseTitle>
                  <PromiseNumber as={Icon} fontColor="white">3</PromiseNumber>
                  A reliable teammate
                </PromiseTitle>
                <PromiseDescription>
                  At the end of the day the results are what matter. If we are
                  having trouble scoring points for you and your business I will
                  do whatever I can to ensure that we make a new gameplan to find
                  success.
                </PromiseDescription>
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
      );
  }
}
 
export default Promises;