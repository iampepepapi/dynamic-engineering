"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import Synnove2 from "../../../public/img/synnove-2.png";

function Tjenester() {
  return (
    <section className="mx-auto w-full bg-gradient-to-t from-primary/30 via-slate-200 px-0 backdrop-blur-[7px] before:blur-sm dark:from-background dark:to-primary-foreground/10 md:px-12 md:pt-4">
      <main className="relative m-auto w-full max-w-7xl overflow-hidden md:overflow-visible">
        {/* Gear Icons */}
        <div className="absolute">
          <div className="inset-0 overflow-x-hidden md:overflow-visible">
            <div className="relative w-full max-w-full overflow-hidden md:overflow-visible">
              <div className="-z-10 ml-20 mt-48 w-full overflow-hidden md:m-0 md:w-fit">
                <Settings className="size-96 max-w-full text-primary-foreground motion-safe:animate-gear-rotate" />
              </div>
              <div className="-z-10 -ml-20 -mt-20 overflow-hidden">
                <Settings className="size-64 max-w-full text-primary-foreground/70 motion-safe:animate-gear-rotate-left" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto w-full max-w-7xl pt-4 text-center">
          <section className="text-primary">
            <div className="relative px-4">
              <h2 className="mb-4 text-2xl font-medium md:text-3xl">
                Nøkkelferdige løsninger
              </h2>
              <p className="mb-8 px-2 text-sm font-light leading-relaxed md:mb-16 md:px-16 md:text-lg lg:px-44">
                Vi har lang erfaring innen <b>EPCI</b> {"- ("}
                <span className="font-normal text-cyan-800 underline underline-offset-2 dark:text-cyan-100">
                  Engineering
                </span>
                {", "}
                <span className="font-normal text-cyan-800 underline underline-offset-2 dark:text-cyan-100">
                  Procurement
                </span>
                {", "}
                <span className="font-normal text-cyan-800 underline underline-offset-2 dark:text-cyan-100">
                  Construction and Installation
                </span>
                {") "}
                prosjekter, prosesskontroll og produkttransport. Våre komplette
                tjenester inkluderer hele prosessen fra engineering til
                installasjon og igangsetting av anlegget.
              </p>

              {/* Image Grid */}
              <div className="relative grid grid-cols-1 gap-4 pb-12 md:grid-cols-2 md:gap-16">
                <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                  <Image
                    src="/img/synnove.png"
                    alt="Nøkkelferdige løsninger"
                    className="m-auto size-60 transform items-center rounded-lg object-cover shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out before:blur-md dark:shadow-white/5 md:h-full md:w-full md:hover:scale-105 lg:flex lg:size-96"
                    width={400}
                    height={300}
                  />
                </motion.div>
                <motion.div
                  className="absolute -top-2 hidden h-full w-full scale-0 items-center justify-center md:flex"
                  animate={{
                    x: [0, 5, 0],
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 5,
                    },
                  }}
                >
                  <svg
                    className="size-8 text-primary-foreground dark:text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  className="relative flex flex-col"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={Synnove2}
                    alt="Nøkkelferdige løsninger"
                    className="ease-int m-auto size-60 transform items-center rounded-lg object-cover shadow-lg transition-transform duration-300 md:h-full md:w-full md:hover:scale-100 lg:flex lg:size-96"
                    width={400}
                    height={300}
                  />
                </motion.div>
              </div>

              {/* New Section for CIP (Clean in place) */}
              <div className="py-18 relative px-8 pb-8 text-left text-primary md:flex md:flex-row-reverse md:items-center md:gap-8">
                <div className="z-10">
                  <h3 className="mb-4 text-xl font-medium md:text-2xl">
                    CIP (Clean in place)
                  </h3>
                  <p className="text-sm font-light leading-relaxed md:text-lg">
                    Vi har levert komplett CIP anlegg til Synnøve Finden i
                    Alvdal. Her har vi designet, tegnet og laget komplett
                    automasjonsløsning integrert i eksisterende SCADA system.
                    Anlegget vasker produksjonslinjene for gulost over 40 ganger
                    per dag. Alle vaskene er optimalisert for kjemikalieforbruk
                    for å tilfredsstille pålagte miljøkrav. Kunden har vært
                    svært fornøyd med anlegget og vi skal levere et tilsvarende
                    CIP anlegg til et av deres andre meieri.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}

export default Tjenester;
