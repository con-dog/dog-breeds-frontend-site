import React from 'react';
import styled from 'styled-components';
import heroImage from './Hero.png';

const MainDiv = styled.div`
  width: 100%;
`;

const StyledH1 = styled.h1`
  margin: 0 auto 2rem auto;
  font-size: 4rem;
  font-weight: 300;
  text-align: center;
`;

const StyledH3 = styled.h3`
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  text-align: center;
`;

const HeroDiv = styled.div`
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin: 4rem auto;
  width: 85%;
  height: 24.5rem;
`;

const HeroImage = styled.img`
  width: 250px;
  object-fit: cover;
`;

const HeroP = styled.p`
  word-wrap: break-word;
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.2rem;
  font-weight: 300;
  width: 60ch;
  & > h4 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const FilterByLetter = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  width: 80%;
  gap: 0.5rem;
  margin: auto;
  & > * {
    aspect-ratio: 1/1;
    width: 50px;
    background-color: #fff;
    border: 1px solid var(--utility--color--hover);
    border-radius: 5px;
    color: var(--utility--color);
    font-size: 1rem;
    font-weight: 700;
    padding: 0;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--default--color--blue);
      border: 1px solid var(--default--color--blue);
    }
  }
`;

export default function Main() {
  return (
    <MainDiv>
      <StyledH1>Dog Breeds</StyledH1>
      <StyledH3>This is the official list of all American Kennel Club dog breeds</StyledH3>
      <HeroDiv>
        <HeroImage src={heroImage} alt="hero" />
        <HeroP>
          <h4>Whats a Dog Breed?</h4>
          <br />
          <br />
          People have been breeding dogs since prehistoric times.
          <br />
          The earliest dog breeders used wolves to create domestic dogs.
          Dogs were bred for their useful behaviors, such as herding or hunting,
          and their physical attributes, such as size or color.
          <br />
          <br />
          Today, people mostly use dogs for companionship and entertainment.
          Dogs are also used to help people with disabilities,
          such as blindness or deafness.
          They are also used for search and rescue operations, and as service animals
          for law enforcement.
        </HeroP>
      </HeroDiv>
      <FilterByLetter>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
          <button key={letter} type="button">{letter}</button>
        ))}
      </FilterByLetter>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>

    </MainDiv>
  );
}
