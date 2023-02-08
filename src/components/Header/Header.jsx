import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const StyledHeader = styled.header`
  background-color: var(--logo-color);
`;

const Logo = styled.img`
  width: 115px;
  height: 115px;
  background-image: url(${logo});
  background-size: cover;
  border: 0px;
`;

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <H1>
        New Zealand
        <br />
        Kennel Club
      </H1>
    </StyledHeader>
  );
}
