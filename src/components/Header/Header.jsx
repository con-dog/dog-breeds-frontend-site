import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import logo from './AKC-LOGO.png';

const Wrapper = styled.div`
  background-color: #fff;
  padding-bottom: 3rem;
  position: sticky;
  top: 0;
`;

const StyledHeader = styled.header`
  background-color: var(--wp--preset--color--white);
  display: flex;
  justify-content: space-between;
  height: 115px;
  border-bottom: 1px solid var(--wp--preset--color--black);
`;

const Logo = styled.img`
  height: 100%;
  margin: 2rem;
`;

export default function Header() {
  return (
    <Wrapper>
      <StyledHeader>
        <Logo src={logo} />
        <Navbar />
      </StyledHeader>
    </Wrapper>
  );
}
