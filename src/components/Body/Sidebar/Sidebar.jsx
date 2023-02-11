import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const StyledAside = styled.aside`
  width: 350px;
  position: sticky;
  background-color: #FFF;
  align-self: flex-start;
  top: 250px;
  height: 500px;
`;

const StyledLabelSelect = styled.label`
  display: flex;
  color: var(--default--color--blue);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SelectBreed = styled.select`
  width: 100%;
  height: 3rem;
  background-color: var(--default--color--white);
  border: 1px solid var(--utility--color);
  border-radius: 5px;
  color: gray;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
  padding: 0 0.5rem;
  & > *:not(:first-child) {
    color: black;
    font-style: normal;
  }
`;

export default function Sidebar() {
  return (
    <StyledAside>
      <StyledLabelSelect htmlFor="breeds">
        FIND BY BREED NAME
      </StyledLabelSelect>
      <SelectBreed name="breeds" id="breeds">
        <option value="" disabled selected>Select a Breed</option>
        <option value="Affenpinscher">Affenpinscher</option>
        <option value="Afghan Hound">Afghan Hound</option>
        <option value="Airedale Terrier">Airedale Terrier</option>
        <option value="Akita">Akita</option>
      </SelectBreed>

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
