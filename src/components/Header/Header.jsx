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
  margin: 0 1rem;
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UtilityDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  & > :nth-child(6) {
    padding 0 1.5rem;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
  }
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
    width: 7rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  & > button {
    background-color: var(--utility--color--hover);
    color: #fff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
  }
  & > button:hover {
    background-color: var(--utility--color);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  flex: 1;
  height: 60px;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  white-space: nowrap;
  & > * {
    color: var(--utility--color);
  }
  &:hover {
    border: 1px solid gray;
    color: var(--utility--color--hover);
  }
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
            <input type="text" placeholder="Search" />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </StyledForm>
        </UtilityDiv>
        <StyledNav>
          <StyledUl>
            <StyledLi>
              BREEDS A-Z
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
            <StyledLi>
              EXPERT ADVICE
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
            <StyledLi>
              PRODUCTS & SERVICES
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
            <StyledLi>
              SPORTS & EVENTS
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
            <StyledLi>
              CLUBS & DELEGATES
              <FontAwesomeIcon icon={faChevronDown} />
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </ContentDiv>
    </StyledHeader>
  );
}
