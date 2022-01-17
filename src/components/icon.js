import React, { PureComponent } from 'react';
import styled from 'styled-components';

const IconDiv = styled.div`
  /* Size */
  width: ${props => props.size || '65px'};
  height: ${props => props.size || '65px'};
  /* Background Image and Color */
  background-image: url(${props=> props.logo});
  background-color: ${props => props.backgroundColor || 'var(--primary)'};
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid lightgray;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  /* Font */
  text-align: center;
  color: ${props => props.fontColor || ""};
  font-size: calc(${props => props.size || '65px'} * 0.70);
  font-weight: 500;
`;
class Icon extends PureComponent {
  render() {
    return (
      <IconDiv
        className={this.props.className}
        margin={this.props.margin}
        marginTop={this.props.marginTop}
        marginRight={this.props.marginRight}
        marginBottom={this.props.marginBottom}
        marginLeft={this.props.marginLeft}
        logo={this.props.logo}
        size={this.props.size}
        fontColor={this.props.fontColor}
      >
        {this.props.children}
      </IconDiv>
    );
  }
}
 
export default Icon;