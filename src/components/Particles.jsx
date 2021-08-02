import React, { useContext } from "react";
import styled from "styled-components";
import { Particles as ReactParticles } from "react-particles-js";
import { AppContext } from "../hooks/AppContext";
/* particles-js component used to create beautiful background. */

const P = {
  Container: styled.div`
    transition: background-color 0.8s linear;
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  `,
};

const Particles = () => {
  const { theme } = useContext(AppContext);
  /* particles-js params. Generated json configuration file after tweaking and playing around this website.
   * source: https://vincentgarreau.com/particles.js */
  const params = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      // rainbow colors, source: https://www.krishnamani.in/color-codes-for-rainbow-vibgyor-colours/
      color: {
        value: ["4B0082", "0000FF", "00FF00", "FFFF00", "FF7F00", "FF0000"],
      },
      opacity: {
        value: 0.9,
        random: false,
        anim: {
          enable: false,
        },
      },
      size: {
        value: 5,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "808080",
      },
      move: {
        enable: true,
        speed: 1.5,
        out_mode: "bounce",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 250,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <P.Container theme={theme}>
      <ReactParticles width="100vw" height="100vh" params={params} />
    </P.Container>
  );
};

export default Particles;
