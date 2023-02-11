import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const StyledAside = styled.aside`
  width: 350px;
  position: sticky;
  background-color: #4caf50;
  align-self: flex-start;
  top: 250px;
  height: 500px;
`;

export default function Sidebar() {
  return (
    <StyledAside>
      <h1>Sidebar</h1>
      <h2>FIND BY BREED NAME</h2>
      <select name="breeds" id="breeds">
        <option value="Affenpinscher">Affenpinscher</option>
        <option value="Afghan Hound">Afghan Hound</option>
        <option value="Airedale Terrier">Airedale Terrier</option>
        <option value="Akita">Akita</option>
      </select>
      <form>
        <div>
          <h3>FILTER BREEDS</h3>
          <button type="button">CLEAR ALL</button>
        </div>
        <hr />
        <div>
          <button type="button">
            <span>GROUP</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button">
            <span>ACTIVITY LEVEL</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button">
            <span>BARKING LEVEL</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button">
            <span>CHARACTERISTICS</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button">
            <span>COAT TYPE</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button">
            <span>SHEDDING</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button">
            <span>SIZE</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button">
            <span>TRAINABILITY</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <hr />
        </div>
        <div>
          <button type="button">
            SUBMIT
          </button>
        </div>
      </form>
    </StyledAside>
  );
}
