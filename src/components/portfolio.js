import React, { PureComponent } from 'react';
import styled from 'styled-components';

const PortfolioWrapper = styled.div``;
const HeadingWrapper = styled.div`
  max-width: 1100px;
  margin: 50px auto;
  text-align: center;
  
  @media (max-width: 1129px){
    max-width: 900px;
  }
  @media(max-width: 1000px) {
    max-width: 750px;
  }
  @media (max-width: 800px){
    max-width: 550px;
  }
  @media (max-width: 600px){
    max-width: 350px;
  }
`;
const Heading = styled.h1`
  margin-bottom: 25px;
  font-size: 96px;
  font-weight: bold;
  letter-spacing: -5px;
  
  @media (max-width: 1129px){
    font-size: 72px;
    letter-spacing: -4px;
  }
  @media (max-width: 800px){
    font-size: 56px;
    letter-spacing: -3px;
  }
  @media (max-width: 600px){
    font-size: 36px;
    letter-spacing: -1px;
  }
`;
const SubHeading = styled.div`
  font-size: 36px;
  font-weight: 300;
  line-height: 64px;

  @media (max-width: 1129px){
    font-size: 30px;
    line-height: 48px;
  }
  @media(max-width: 1000px) {
    font-size: 24px;
    line-height: 40px;
  }
  @media(max-width: 800px) {
    font-size: 18px;
    line-height: 32px;
  }
  @media(max-width: 600px) {
    font-size: 15px;
    line-height: 24px;
  }
`;
const PortfolioGallery = styled.div` 
  width: 100%;
  margin: 50px auto;
  padding: 50px 0;
  background-color: #f1f1f1;
`;

class Portfolio extends PureComponent {
  render() { 
    return (
      <PortfolioWrapper id={this.props.id}>
        <HeadingWrapper>
          <Heading>
            No more talking<br/>
            How about a taste
          </Heading>
          <SubHeading>
            I've done enough talking, now I want you to see what I can do.
            Here are a few projects that I have worked on, for myself or for
            clients.<br/>
            Check them out!
          </SubHeading>
        </HeadingWrapper>
        <PortfolioGallery>
          {this.props.children}
        </PortfolioGallery>
      </PortfolioWrapper>
      );
  }
}
 
export default Portfolio;