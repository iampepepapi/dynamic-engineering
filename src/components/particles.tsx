import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { ZIndex, type Engine, type ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import tailwind from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const tw = resolveConfig(tailwind);

const ParticleBackground: React.FC = () => {
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
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
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
