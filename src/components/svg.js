import React, { PureComponent } from 'react';
import styled from 'styled-components';

const SVGImg = styled.img`
  height: ${props => props.size ? props.size : '50px'};
  width: ${props => props.size ? props.size : '50px'};
`;

class SVG extends PureComponent {
  render() {
    return (
      <SVGImg
        className={this.props.className}
        src={this.props.svg}
        size={this.props.size}
        alt={this.props.alt ? this.props.alt : ""}
      />
    );
  }
}

export default SVG;