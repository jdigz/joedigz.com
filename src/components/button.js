import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.a`
/* Adapted based on props */
  ${props => props.color ? "border-color: transparent;": ""}
/* Display and Alignment */
  display: inline-flex;
  justify-content: center;
  align-items: center;
/* Sizing */
  width: 250px;
  height: 65px;
/* Color and Shape */
  background-color: ${props => props.color ? props.color: "var(--primary)"};
  filter: drop-shadow(0px 10px 5px ${props => props.color ? "lightgray" : "var(--primary-shadow)"});
  border-radius: 32px;
/* Typography */
  font-size: 20px;
  letter-spacing: -1px;

  &:hover {
    filter: drop-shadow(0px 5px 2px ${props => props.color ? "lightgray" : "var(--primary-shadow)"});
  }
`;

class Button extends PureComponent {
  render() { 
    console.log(this.props)
    return (
      <ButtonStyled color={this.props.color} href="." className="btn btn-primary">
        {this.props.children}
      </ButtonStyled>
      );
  }
}
 
export default Button;