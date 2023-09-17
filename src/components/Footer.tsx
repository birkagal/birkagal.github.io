import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
import { AppContext } from "../hooks/AppContext";

const fadeInRightAnimation = keyframes`${fadeInRight}`;

const FadeInRightDiv = styled.div`
  animation: 3s ${fadeInRightAnimation};
`;

const F = {
  Container: styled.div<{isMobile: boolean;}>`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.5rem;
    padding-right: ${({ isMobile }) => (isMobile ? "1.5rem" : "1rem")};
    z-index: 1;
  `,
  Text: styled.p`
    transition: color 0.5s linear;
    color: ${({ theme }) => theme.tertiaryTextColor};
  `,
  Link: styled.a`
    transition: color 0.5s linear;
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryTextColor};
  `,
};

const Footer = () => {
  const { theme, isMobile } = useContext(AppContext);

  return (
    <F.Container isMobile={isMobile}>
      <FadeInRightDiv>
        <F.Text theme={theme} aria-label="Designed and built by Gal Birka">
          Designed and built by&nbsp;
          <F.Link theme={theme} href="https://www.birkagal.com/">
            Gal Birka
          </F.Link>
          {isMobile || (
            /* display source link only if isMobile is FALSE */
            <>
              &nbsp;|&nbsp;
              <F.Link
                theme={theme}
                aria-label="Source code"
                href="https://github.com/birkagal/birkagal.github.io"
              >
                Source
              </F.Link>
            </>
          )}
        </F.Text>
      </FadeInRightDiv>
    </F.Container>
  );
};

export default Footer;
