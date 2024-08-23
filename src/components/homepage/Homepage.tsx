"use client";

import React from "react";
import ParticleBackground from "../particles";

function Homepage() {
  return (
    <main className="gradient-background relative flex h-[calc(100vh-61px)] items-center justify-center">
      <div className="relative h-20">
        <ParticleBackground />
      </div>
      <h1 className="flex w-fit overflow-hidden text-wrap p-4 text-center text-2xl text-primary md:text-6xl">
        <span className="-mr-2">Everything&apos;s</span>
        &nbsp; possible
      </h1>
    </main>
  );
}

export default Homepage;
