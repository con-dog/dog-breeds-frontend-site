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
  width: 80%;
  height: 19rem;
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
          Dogs are also used to help people with disabilities, such as blindness or deafness.
        </HeroP>
      </HeroDiv>
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
