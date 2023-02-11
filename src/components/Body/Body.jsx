import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
// import Main from './Main/Main';

const BodyDiv = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const StyledBreadcrumbs = styled.ul`
  padding: 0;
  width: 90%;
  font-size: 1.2rem;
  color: grey;
  cursor: pointer;
  margin: 2rem auto;
  display: flex;
  list-style: none;
  & > li:not(:last-child) {
    color: var(--utility--color);
  }
  & > li:not(:last-child)::after {
    content: ' /';
  }
`;

const StyledMain = styled.main`
  background-color: #f1f1f1;
  width: 100%;
`;

export default function Body() {
  return (
    <div>
      <StyledBreadcrumbs>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Dog Breeds</a>
        </li>
      </StyledBreadcrumbs>
      <BodyDiv>
        <Sidebar />
        <StyledMain>
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
          ;
          <h1> Dog Breeds</h1>
        </StyledMain>
      </BodyDiv>
    </div>
  );
}
