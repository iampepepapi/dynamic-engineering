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
        <div className="absolute">
          <div className="inset-0 overflow-x-hidden md:overflow-visible">
            <div className="relative w-full max-w-full overflow-hidden md:overflow-visible">
              <div className="-z-10 ml-20 mt-48 w-full overflow-hidden md:m-0 md:w-fit">
                <Settings className="motion-safe:animate-gear-rotate size-96 max-w-full text-primary-foreground" />
              </div>
              <div className="-z-10 -ml-20 -mt-20 overflow-hidden">
                <Settings className="motion-safe:animate-gear-rotate-left size-64 max-w-full text-primary-foreground/70" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl pt-4 text-center">
          <section className="text-primary">
            <div className="relative px-4">
              <h2 className="mb-4 text-2xl font-medium md:text-3xl">
                Nøkkelferdige løsninger
              </h2>
              <p className="mb-8 px-2 text-sm font-light leading-relaxed md:mb-16 md:px-16 md:text-lg lg:px-44">
                Vi har lang erfaring innen EPCI (Engineering, Procurement,
                Construction and Installation) prosjekter, prosesskontroll og
                produkttransport. Våre komplette tjenester inkluderer hele
                prosessen fra engineering til installasjon og igangsetting av
                anlegget.
              </p>

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
                    x: [0, 10, 0],
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1,
                    },
                  }}
                >
                  <svg
                    className="size-8"
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
                  {/* Arrow pointing downwards (for mobile) */}
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}

export default Tjenester;
