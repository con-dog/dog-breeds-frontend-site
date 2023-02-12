import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  max-width: 260px;
    background-color: #fff;
    outline: 1px solid gray;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 430px;
    overflow: hidden;
    border-bottom: 5px solid var(--default--color--blue);
`;

const CardImage = styled.img`
    margin: 0 auto;
    width: 260px;
    height: auto;
    object-fit: cover;
`;

const CardHeader = styled.h3`
  max-width: 260px;
  word-wrap: break-word;
    padding: 0.5rem;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    text-align: center;
    color: var(--default--color--blue);
`;

const CardDetail = styled.p`
    margin: auto;
    text-align: justify;
    text-justify: inter-word;
    font-size: 1rem;
    font-weight: 300;
    width: 25ch;
`;

const StyledSpan = styled.span`
    display: flex;
    justify-content: center;
    color: var(--utility--color);
    align-items: center;
    padding: 0.5rem;
    margin: 1rem auto;
    gap: 0.25rem;
    font-size: 1rem;
    font-weight: 700;
    width: 80%;
    & > input {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export default function Card({ image, name, description }) {
  return (
    <CardDiv>
      <CardImage src={image} alt="image" />
      <CardHeader>{name}</CardHeader>
      <CardDetail>
        {description}
      </CardDetail>
      <StyledSpan>
        <input type="checkbox" />
        COMPARE
      </StyledSpan>
    </CardDiv>
  );
}
