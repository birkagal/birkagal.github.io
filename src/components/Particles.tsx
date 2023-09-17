import { useContext, useCallback } from "react";
import styled from "styled-components";
// import { Particles as ReactParticles } from "react-particles-js";
import { Particles as Aaa } from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

import { AppContext } from "../hooks/AppContext";
// import { params } from "../configs/tsparticles";

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

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);


  return (
    <P.Container theme={theme}>
      <Aaa
        width="100vw"
        height="100vh"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: theme.background,
            },
          },
          fpsLimit: 120,
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
              value: [
                "4B0082",
                "0000FF",
                "00FF00",
                "FFFF00",
                "FF7F00",
                "FF0000",
              ],
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
          detectRetina: true,
        }}
      />
    </P.Container>
  );
};

export default Particles;
