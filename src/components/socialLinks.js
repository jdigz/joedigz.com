import React, { PureComponent } from 'react';
import FacebookIcon from '../assets/static/images/facebook-icon.svg';
import LinkedInIcon from '../assets/static/images/linkedin-icon.svg';
import GitHubIcon from '../assets/static/images/github-icon.svg';
import SVG from './svg';
import styled from 'styled-components';

const SocialList = styled.ul`
  width: ${props => props.width ? props.width : ""};
  display: flex;
  margin: 10px 0;
  padding: 0;
  justify-content: space-around;
  list-style-type: none;
`;
const SocialItem = styled.li`
  display: inline;
  border-radius: 50%;
  &:hover{
    box-shadow: 0 0 20px ${props => props.color ? "lightgray" : "var(--primary-shadow)"};
  }
`;
class SocialLinks extends PureComponent {
  render() { 
    return (
      <SocialList className={this.props.className} width={this.props.width}>
          <SocialItem>
            <a href="https://www.facebook.com/joedigz/" target="_blank" rel="noreferrer">
              <SVG size={this.props.size} svg={FacebookIcon} alt="Facebook Icon"/>
            </a>
          </SocialItem>
          <SocialItem>
            <a href="https://www.linkedin.com/in/joe-digz/" target="_blank" rel="noreferrer">
              <SVG size={this.props.size} svg={LinkedInIcon} alt="LinkedIn Icon"/>
            </a>
          </SocialItem>
          <SocialItem>
            <a href="https://github.com/jdigz" target="_blank" rel="noreferrer">
              <SVG size={this.props.size} svg={GitHubIcon} alt="Github Icon"/>
            </a>
          </SocialItem>
      </SocialList>
    );
  }
}
 
export default SocialLinks;