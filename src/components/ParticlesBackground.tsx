import React, { useCallback } from 'react';
import { useContainer } from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.3
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
        data-particles
        data-particles-init={particlesInit}
        data-particles-loaded={particlesLoaded}
        data-particles-options={{
          background: {
            color: {
              value: 'transparent'
            }
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: '#667eea'
            },
            links: {
              color: '#667eea',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce'
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.3
            },
            shape: {
              type: 'circle'
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
};

export default ParticlesBackground; 