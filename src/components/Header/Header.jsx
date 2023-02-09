import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faPaw,
  faLaptopCode,
  faCartShopping,
  faTv,
  faUser,
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import logo from './AKC-LOGO.png';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 115px;
  border-bottom: 1px solid var(--wp--preset--color--black);
`;

const Logo = styled.img`
  height: 100%;
  margin: 2rem;
`;

const ContentDiv = styled.div`
  margin: 0 3rem;
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UtilityDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledA = styled.a`
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: var(--utility--color);
  text-decoration: none;
  &:hover {
    color: var(--utility--color--hover);
  }
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  & > * {
    text-style: italic;
    font-size: 1rem;
    font-style: italic;
    border: 1px solid var(--utility--color--hover);
  }
  & > input {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  & > button {
    background-color: var(--utility--color--hover);
    color: #fff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const StyledSearch = styled.input``;

const StyledNav = styled.nav`
  display: flex;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  list-style: none;
`;

const StyledLi = styled.li`
  white-space: nowrap;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo src={logo} />
      <ContentDiv>
        <UtilityDiv>
          <StyledA href="#">
            <FontAwesomeIcon icon={faCalendarDays} />
            Event Search
          </StyledA>
          <StyledA href="#">
            <FontAwesomeIcon icon={faPaw} />
            Find a Puppy
          </StyledA>
          <StyledA href="#">
            <FontAwesomeIcon icon={faLaptopCode} />
            Register Your Dog
          </StyledA>
          <StyledA href="#">
            <FontAwesomeIcon icon={faCartShopping} />
            Shop
          </StyledA>
          <StyledA href="#">
            <FontAwesomeIcon icon={faTv} />
            NZKC TV
          </StyledA>
          <StyledA href="#">
            <FontAwesomeIcon icon={faUser} />
            Sign In
          </StyledA>
          <StyledForm action="#">
            <StyledSearch type="text" placeholder="Search" />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </StyledForm>
        </UtilityDiv>
        <StyledNav>
          <StyledUl>
            <StyledLi>
              BREEDS A-Z
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
            <StyledLi>
              EXPERT ADVICE
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
            <StyledLi>
              PRODUCTS & SERVICES
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
            <StyledLi>
              SPORTS & EVENTS
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
            <StyledLi>
              CLUBS & DELEGATES
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </ContentDiv>
    </StyledHeader>
  );
}
