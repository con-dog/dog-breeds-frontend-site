import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

const BodyDiv = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export default function Body() {
  return (
    <div>

      <BodyDiv>
        <Sidebar />
        <Main />
      </BodyDiv>
    </div>
  );
}
