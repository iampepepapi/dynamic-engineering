import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import tailwind from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const tw = resolveConfig(tailwind);

const ParticleBackground: React.FC = () => {
  const [particleLimit, setParticleLimit] = useState(100); // Default limit

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: ISourceOptions = {
    fpsLimit: 60,
    particles: {
      color: {
        value: tw.theme.colors.cyan[900],
      },
      links: {
        color: tw.theme.colors.cyan[500],
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        outModes: {
          default: "out",
        },
      },
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
        limit: particleLimit, // Dynamically adjust limit
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const handleZoomChange = useCallback(() => {
    const zoomLevel = window.outerWidth / window.innerWidth;
    if (zoomLevel > 1.2) {
      setParticleLimit(50); // Reduce particle limit at higher zoom levels
    } else {
      setParticleLimit(100); // Default particle limit
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleZoomChange);
    return () => {
      window.removeEventListener("resize", handleZoomChange);
    };
  }, [handleZoomChange]);

  return (
    <div className="">
      <Particles
        id="tsparticles"
        className=""
        init={particlesInit}
        options={particlesOptions}
      />
    </div>
  );
};

export default ParticleBackground;
