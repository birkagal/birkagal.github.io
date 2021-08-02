import React, { useContext } from "react";
import styled, { css, keyframes } from "styled-components";
import Typical from "react-typical";
import { fadeIn, fadeInDownBig } from "react-animations";
import { AppContext } from "../hooks/AppContext";
/* Heading component. Name and Title are shown with some animation. */

const fadeInDownAnimation = keyframes`${fadeInDownBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDownDiv = styled.div`
  animation: 2s ${fadeInDownAnimation};
`;
const FadeInDiv = styled.div`
  animation: 4s ${fadeInAnimation};
`;

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.h1`
    ${sharedStyles};
    font-size: 6rem;
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) {
      font-size: 4.5rem;
    }
  `,
  Title: styled.h2`
    ${sharedStyles};
    font-size: 3.5rem;
    margin: 0 0 4rem;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) {
      font-size: 2.5rem;
    }
  `,
};

const Content = () => {
  const { theme } = useContext(AppContext);
  return (
    <>
      <C.Name theme={theme} aria-label="My name is Gal Birka">
        <FadeInDownDiv>Gal Birka</FadeInDownDiv>
      </C.Name>

      <C.Title theme={theme} aria-label="I am a software engineer">
        <FadeInDiv>
          <Typical steps={[3000, "Software Engineer;"]} loop={1} wrapper="b" />
        </FadeInDiv>
      </C.Title>
    </>
  );
};

export default Content;
