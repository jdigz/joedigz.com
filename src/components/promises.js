import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from './icon';

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

class Promises extends PureComponent {
  state = {  }
  render() { 
    return (
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
      );
  }
}
 
export default Promises;