import React from 'react';
import { useTheme } from "@emotion/react";
import Particles, { HoverMode, InteractivityDetect, MoveDirection, OutMode } from "react-tsparticles";

type Props = {
  readonly className?: string;
};
const ParallaxParticles: React.FC<Props> = ({
  className = '',
}) => {
  const theme = useTheme();
  return (
    <Particles
      id='background'
      className={className}
      options={{
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          color: theme.color.primary2[500].string(),
          number: {
            value: 120,
            density: {
              enable: true,
              area: 1024,
            },
          },
          opacity: {
            value: .64,
            random: true,
            animation: {
              enable: true,
              sync: false,
              speed: .64,
              minimumValue: .12,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: theme.color.primary1[500].string(),
            opacity: .32,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            random: false,
            straight: false,
            outMode: OutMode.out,
            direction: MoveDirection.none,
          },
        },
        interactivity: {
          detectsOn: InteractivityDetect.window,
          events: {
            resize: true,
            onHover: {
              enable: true,
              mode: HoverMode.grab,
              parallax: {
                enable: true,
                smooth: 12,
                force: 64,
              },
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: .64,
              },
            },
          },
        },
      }}
    />
  );
};

export default ParallaxParticles;
