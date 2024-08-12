"use client";

import React from "react";
import Navbar from "../navigation/Navbar";
import ParticleBackground from "../particles";

function Homepage() {
    return (
        <main className="relative gradient-background flex justify-center items-center h-[calc(100vh-61px)] w-screen ">
            {/* Particle Background */}

            {/* Content */}

            <ParticleBackground />
            <h1 className="text-2xl p-4 flex w-fit text-primary text-wrap overflow-hidden  text-center  md:text-5xl">
                Everything&apos;s possible
            </h1>
        </main>
    );
}

export default Homepage;
