import React, { PureComponent } from 'react';
import Facebook from './facebookIcon';
import LinkedIn from './linkedInIcon';
import GitHub from './githubIcon';
import styled from 'styled-components';

const SocialList = styled.ul`
  display: flex;
  margin: 10px 150px;
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
      <SocialList>
          <SocialItem>
            <a href="https://www.facebook.com/joedigz/" target="_blank" rel="noreferrer">
              <Facebook size='50px'/>
            </a>
          </SocialItem>
          <SocialItem>
            <a href="https://www.linkedin.com/in/joseph-digregorio-97907260/" target="_blank" rel="noreferrer">
              <LinkedIn size='50px'/>
            </a>
          </SocialItem>
          <SocialItem>
            <a href="https://github.com/jdigz" target="_blank" rel="noreferrer">
              <GitHub size='50px'/>
            </a>
          </SocialItem>
      </SocialList>
    );
  }
}
 
export default SocialLinks;