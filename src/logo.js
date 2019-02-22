import React from "react";
import styled from "styled-components";

const Letter = styled.span`
  font-size: ${props => props.size}px;
  font-weight: 700;
  color: ${props => props.color};
`;

export default function Logo({ size = 45 }) {
  return (
    <div>
      <Letter color="#001c35" size={size}>
        D
      </Letter>
      <Letter color="#001c35" size={size}>
        o
      </Letter>
      <Letter color="#001c35" size={size}>
        c
      </Letter>
      <Letter color="#001c35" size={size}>
        u
      </Letter>
      <Letter color="#FF1F1F" size={size}>
        saurus
      </Letter>
    </div>
  );
}
