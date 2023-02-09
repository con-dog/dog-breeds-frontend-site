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
  background-color: var(--wp--preset--color--luminous-vivid-amber);
  height: 115px;
  border-bottom: 1px solid var(--wp--preset--color--black);
`;

const Logo = styled.img`
  height: 100%;
  margin: 2rem;
`;

const ContentDiv = styled.div`
  margin: 0 3rem;
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
  gap: 3rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo src={logo} />
      <ContentDiv>
        <UtilityDiv>
          <a href="#">
            <FontAwesomeIcon icon={faCalendarDays} />
            Event Search
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPaw} />
            Find a Puppy
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLaptopCode} />
            Register Your Dog
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCartShopping} />
            Shop
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTv} />
            NZKC TV
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faUser} />
            Sign In
          </a>
          <form action="#">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </UtilityDiv>
        <StyledNav>
          <StyledUl>
            <li>
              BREEDS A-Z
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li>
              EXPERT ADVICE
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li>
              PRODUCTS & SERVICES
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li>
              SPORTS & EVENTS
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li>
              CLUBS & DELEGATES
              {' '}
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
          </StyledUl>
        </StyledNav>
      </ContentDiv>
    </StyledHeader>
  );
}
