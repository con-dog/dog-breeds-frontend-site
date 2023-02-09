import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const BrandDiv = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UtilityDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledNav = styled.nav`
  display: flex;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <BrandDiv>
        <Logo />
        <H1>
          New Zealand
          <br />
          Kennel Club
        </H1>
      </BrandDiv>
      <ContentDiv>
        <UtilityDiv>
          <a href="#">
            <i />
            Event Search
          </a>
          <a href="#">
            <i />
            Find a Puppy
          </a>
          <a href="#">
            <i />
            Register Your Dog
          </a>
          <a href="#">
            <i />
            Shop
          </a>
          <a href="#">
            <i />
            NZKC TV
          </a>
          <a href="#">
            <i />
            Sign In
          </a>
          <form action="#">
            <input type="text" placeholder="Search" />
            <button type="submit"><i /></button>
          </form>
        </UtilityDiv>
        <StyledNav>
          <StyledUl>
            <li>BREEDS A-Z</li>
            <li>EXPERT ADVICE</li>
            <li>PRODUCTS & SERVICES</li>
            <li>SPORTS & EVENTS</li>
            <li>CLUBS & DELEGATES</li>
          </StyledUl>
        </StyledNav>
      </ContentDiv>
    </StyledHeader>
  );
}
