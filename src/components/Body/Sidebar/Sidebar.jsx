import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
  width: 350px;
  //   position: sticky;
  background-color: #4caf50;
  align-self: flex-start;
  top: 0;
  height: 300px;
`;

export default function Sidebar() {
  return (
    <StyledAside>
      <h1>Sidebar</h1>
      <h2>FIND BREED BY NAME</h2>
      <input type="text" placeholder="Select A Breed" />
    </StyledAside>
  );
}
