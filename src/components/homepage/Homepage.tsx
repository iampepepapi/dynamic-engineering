"use client";

import React from "react";
import ParticleBackground from "../particles";

function Homepage() {
  return (
    <main className="gradient-background relative flex h-[calc(100vh-61px)] items-center justify-center">
      <div className="relative h-20">
        <ParticleBackground />
      </div>
      <h1 className="w-full p-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Everything&apos;s possible
      </h1>
    </main>
  );
}

export default Homepage;
