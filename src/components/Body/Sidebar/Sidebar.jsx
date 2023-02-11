import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const StyledBreadcrumbs = styled.ul`
  padding: 0;
  width: 90%;
  font-size: 1.2rem;
  color: grey;
  cursor: pointer;
  margin: 0 0 4rem 0;
  display: flex;
  list-style: none;
  & > li:not(:last-child) {
    color: var(--utility--color);
  }
  & > li:not(:last-child)::after {
    content: ' /';
  }
`;

const StyledAside = styled.aside`
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
  width: 300px;
  min-width: 300px;
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
  border: 1px solid var(--utility--color--hover);
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

const FilterFormHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    font-weight: 700;
    margin: 1.5rem 0 0 0;
  }

  }
`;

const FilterFormHeader = styled.h3`
  font-size: 1rem;
  color: var(--default--color--blue);
`;

const FilterButtonClearAll = styled.button`
  background-color: transparent;
  border: none;
  color: var(--utility--color);
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: var(--default--color--blue);
  }
`;

const FormBodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
`;

const AccordianButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border: none;
  padding: 0.25rem;
  & > * {
    font-size: 1rem;
    font-weight: 300;
    color: var(--utility--color);
  }
  & > *:hover {
    color: var(--default--color--blue);
  }
`;

const SubmitDiv = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.button`
  background-color: var(--utility--color);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: var(--default--color--blue);
  }
`;

export default function Sidebar() {
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
          <FilterFormHeaderDiv>
            <FilterFormHeader>FILTER BREEDS</FilterFormHeader>
            <FilterButtonClearAll type="button">CLEAR ALL</FilterButtonClearAll>
          </FilterFormHeaderDiv>
          <hr />
          <FormBodyDiv>
            <AccordianButton type="button">
              <span>GROUP</span>
              <FontAwesomeIcon icon={faPlus} />
            </AccordianButton>
            <AccordianButton type="button">
              <span>ACTIVITY LEVEL</span>
              <FontAwesomeIcon icon={faPlus} />
            </AccordianButton>
            <AccordianButton type="button">
              <span>BARKING LEVEL</span>
              <FontAwesomeIcon icon={faPlus} />
            </AccordianButton>
            <AccordianButton type="button">
              <span>CHARACTERISTICS</span>
              <FontAwesomeIcon icon={faPlus} />
            </AccordianButton>
            <AccordianButton type="button">
              <span>COAT TYPE</span>
              <FontAwesomeIcon icon={faPlus} />
            </AccordianButton>
            <AccordianButton type="button">
              <span>SHEDDING</span>
              <FontAwesomeIcon icon={faPlus} />
            </AccordianButton>
            <AccordianButton type="button">
              <span>SIZE</span>
              <FontAwesomeIcon icon={faPlus} />
            </AccordianButton>
            <AccordianButton type="button">
              <span>TRAINABILITY</span>
              <FontAwesomeIcon icon={faPlus} />
            </AccordianButton>
          </FormBodyDiv>
          <hr />
          <SubmitDiv>
            <SubmitButton type="button">
              SUBMIT
            </SubmitButton>
          </SubmitDiv>
        </form>
      </StyledAside>
    </div>
  );
}
