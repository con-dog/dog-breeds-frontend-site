import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const StyledHeader = styled.header`
  background-color: var(--logo-color);
  display: flex;
  align-items: center;
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
`;

const ContentDiv = styled.div`

`;

const UtilityDiv = styled.div`
`;

const NavDiv = styled.div`
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
      <ContentDiv>
        <UtilityDiv>
          <a href="#"><i /></a>
          <a href="#"><i /></a>
          <a href="#"><i /></a>
          <a href="#"><i /></a>
          <a href="#"><i /></a>
          <a href="#"><i /></a>
          <form action="#">
            <input type="text" />
            <button type="submit"><i /></button>
          </form>
        </UtilityDiv>
        <NavDiv>
          <ul>
            <li>BREEDS A-Z</li>
            <li>EXPERT ADVICE</li>
            <li>PRODUCTS & SERVICES</li>
            <li>SPORTS & EVENTS</li>
            <li>CLUBS & DELEGATES</li>
          </ul>
        </NavDiv>
      </ContentDiv>
    </StyledHeader>
  );
}
