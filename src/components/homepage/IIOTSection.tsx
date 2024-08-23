"use client";
import Image from "next/image";
import React from "react";

export default function IIOTSection() {
  const points = [
    {
      title: "Bedre innsikt",
      description:
        "Full oversikt over alle enheter og data. Få bedre kjennskap til hvordan organisasjonen din fungerer.",
      imgSrc: "/img/innsikt.png", // Replace with actual image paths
    },
    {
      title: "Økt vekst",
      description:
        "Analyser og rapporter hjelper deg å effektivisere og øke kapasiteten, ta bedre beslutninger og se hvor du burde investere mer.",
      imgSrc: "/img/increase_transparent.png", // Replace with actual image paths
    },
    {
      title: "Spar tid og penger",
      description:
        "Automatiserer arbeidsoppgaver, integrerer applikasjoner og hjelper deg å handle raskt på hendelser.",
      imgSrc: "/img/timemoney_transparent.png", // Replace with actual image paths
    },
  ];

  return (
    <section className="relative z-20 mx-auto w-full max-w-7xl px-0 pt-8 text-primary md:px-12">
      <div className="px-4">
        <h2 className="mb-4 text-center text-2xl font-bold md:text-4xl">
          Effektivisering gjennom IIOT og analyse
        </h2>
        <h3 className="text-center">
          Vi skreddersyr systemer som integrerer med eksisterende anlegg for å
          effektivisere digitale sjekklister, rapporter og analyse av
          prosessdata.
        </h3>
      </div>
      <div className="dynamic-gradient-paint-1 relative mt-4 grid grid-cols-1 gap-4 bg-contain p-8 md:grid-cols-3 md:gap-12">
        {/* Background with blur effect */}

        {/* Content in front of the blurred background */}
        {points.map((point, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-4 py-8 text-center text-secondary-foreground transition-transform duration-300 hover:scale-105"
          >
            <div className="blur-xs absolute inset-0 rounded-3xl bg-gradient-to-tl from-gray-500/30 via-transparent to-primary/5 bg-contain filter dark:bg-gradient-to-tr dark:via-primary-foreground dark:to-primary-foreground"></div>
            <Image
              src={point.imgSrc}
              alt={point.title}
              className="z-10 mb-4 h-48 w-48 rounded-full bg-white object-cover"
              width={200}
              height={200}
            />
            <h3 className="z-10 mb-2 text-xl font-semibold">{point.title}</h3>
            <p className="z-10 px-2 text-left text-sm md:text-base">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
