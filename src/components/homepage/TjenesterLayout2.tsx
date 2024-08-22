"use client";
import { PenTool, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import Synnove2 from "../../../public/img/synnove-2.png";
import Rådgivende from "./Rådgivende";
function TjenesterLayout2() {
  return (
    <div className="">
      <section className="mx-auto w-full bg-gradient-to-t from-primary/30 via-slate-200 to-transparent px-0 pb-8 backdrop-blur-[7px] before:blur-sm dark:from-background dark:to-primary-foreground/10 md:px-12 md:pt-4">
        <main className="relative m-auto w-full max-w-7xl overflow-hidden md:overflow-visible">
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
          <div className="mx-auto w-full max-w-7xl pt-4 text-center">
            <section className="text-primary">
              <div className="relative px-4">
                <div className="relative">
                  <section className="mx-auto mb-0 w-full rounded-2xl md:px-12">
                    <main className="relative m-auto w-full max-w-7xl overflow-hidden md:overflow-visible">
                      <div className="mx-auto flex w-full max-w-7xl flex-col md:flex-row">
                        <section className="flex w-full flex-col-reverse items-center gap-8 lg:flex-row">
                          <div className="-mt-20 flex-1 md:-mt-0 md:flex md:justify-end">
                            <Image
                              src={"/img/synnove.png"}
                              alt="Nøkkelferdige løsninger"
                              className="m-auto rounded-lg object-cover transition-transform duration-300 md:max-w-sm md:hover:scale-105"
                              width={400}
                              height={300}
                            />
                          </div>
                          <div className="flex-1 px-4 py-4 text-left text-primary md:text-right">
                            <div className="flex w-full justify-end text-right">
                              <h2 className="mb-2 w-fit border-b border-primary/20 pb-2 text-center text-2xl font-bold md:text-wrap md:text-4xl">
                                Nøkkelferdige løsninger
                              </h2>
                            </div>
                            <p className="text-xs md:text-base">
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
                              prosjekter, prosesskontroll og produkttransport.
                              Våre komplette tjenester inkluderer hele prosessen
                              fra engineering til installasjon og igangsetting
                              av anlegget.
                            </p>
                          </div>
                        </section>
                      </div>
                    </main>
                  </section>

                  <section className="mx-auto -mt-12 mb-12 w-full rounded-xl bg-gradient-to-b from-primary-foreground via-primary-foreground to-transparent md:-mt-0 md:bg-none md:px-12">
                    <main className="relative m-auto w-full max-w-7xl overflow-hidden md:overflow-visible">
                      <div className="mx-auto flex w-full max-w-7xl flex-col md:flex-row">
                        <section className="flex flex-col items-center md:gap-8 lg:flex-row">
                          <div className="flex-1 px-4 py-4 text-left text-primary md:ml-auto">
                            <h2 className="mb-2 w-fit border-b border-primary/20 pb-2 text-2xl font-bold md:text-4xl">
                              CIP (Clean in place)
                            </h2>
                            <p className="whitespace-wrap overflow-auto text-xs md:text-base">
                              Vi har levert komplett CIP anlegg til Synnøve
                              Finden i Alvdal. Her har vi designet, tegnet og
                              laget komplett automasjonsløsning integrert i
                              eksisterende SCADA system. Anlegget vasker
                              produksjonslinjene for gulost over 40 ganger per
                              dag. Alle vaskene er optimalisert for
                              kjemikalieforbruk for å tilfredsstille pålagte
                              miljøkrav. Kunden har vært svært fornøyd med
                              anlegget og vi skal levere et tilsvarende CIP
                              anlegg til et av deres andre meieri.
                            </p>
                          </div>
                          {/* <div className="left-0 flex-1 pb-4 md:mr-4 md:flex md:justify-center md:pb-0">
                            <Image
                              src={Synnove2}
                              alt="Nøkkelferdige løsninger"
                              className="m-auto size-40 w-full justify-start rounded-lg object-cover shadow-lg transition-transform duration-300 md:size-60 md:w-auto md:max-w-sm md:hover:scale-105"
                              width={400}
                              height={300}
                            />
                          </div> */}

                          <div className="relative flex-1 pb-4 md:flex md:justify-center md:pb-0">
                            {/* Main Image */}
                            <motion.div
                              className="relative flex flex-col pb-4 md:flex md:justify-center md:pb-0"
                              whileHover="hover" // Trigger hover effect on parent
                              initial="rest"
                              animate="rest"
                            >
                              {/* Main Image */}
                              <motion.div
                                className="relative z-30 m-auto h-full px-4" // Ensure this stays on top
                                whileHover={{ scale: 1.05 }}
                              >
                                <Image
                                  src={Synnove2}
                                  alt="Nøkkelferdige løsninger "
                                  className="rounded-lg object-cover md:max-w-sm"
                                  width={400}
                                  height={300}
                                />
                              </motion.div>
                              <p className="hidden pt-2 text-xs text-gray-500 md:block">
                                hover on the image
                              </p>
                              {/* <div className="flex justify-between gap-4 pt-2 md:hidden">
                                <Image
                                  src={"/img/aass-logo-neb.png"}
                                  alt="Card 2"
                                  className="w-30 overflow-visible rounded-lg object-cover"
                                  width={100}
                                  height={100}
                                />
                                <Image
                                  src={"/img/synnove-logo-plain.png"}
                                  alt="Card 1"
                                  className="max-w-xm mt-4 w-full rounded-lg object-cover"
                                  width={100}
                                  height={100}
                                />
                              </div> */}
                              {/* Card 1 */}
                              <motion.div
                                className="absolute left-10 top-2 z-20 max-w-full overflow-hidden" // Position slightly offset and behind main image
                                initial={{
                                  opacity: 0,
                                  scale: 0.9,
                                  rotate: "-5deg",
                                }}
                                variants={{
                                  rest: {
                                    opacity: 0,
                                    scale: 0.9,
                                    rotate: "-5deg",
                                  },
                                  hover: {
                                    opacity: 1,
                                    scale: 1,
                                    x: "50%",
                                    y: "-85%",
                                    rotate: "10deg",
                                    transition: { duration: 0.5 },
                                  },
                                }}
                              >
                                {/* THIS IMAGE IS OVERLFLOWING TO THE SIDE */}
                                <Image
                                  src={"/img/synnove-logo-plain.png"}
                                  alt="Card 1"
                                  className="max-w-xm w-full rounded-lg object-cover"
                                  width={300}
                                  height={300}
                                />
                              </motion.div>

                              {/* Card 2 */}
                              <motion.div
                                className="absolute left-12 top-4 z-10" // Position slightly offset and further behind
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                  rotate: "5deg",
                                }}
                                variants={{
                                  rest: {
                                    opacity: 0,
                                    scale: 0.8,
                                    rotate: "5deg",
                                  },
                                  hover: {
                                    opacity: 1,
                                    scale: 1,
                                    x: "-50%",
                                    y: "-120%",
                                    rotate: "-5deg",
                                    transition: { duration: 0.3 },
                                  },
                                }}
                              >
                                <Image
                                  src={"/img/aass-logo-neb.png"}
                                  alt="Card 2"
                                  className="w-30 rounded-lg object-cover"
                                  width={200}
                                  height={300}
                                />
                                {/* <p>AASS</p> */}
                                {/* <Settings size={400} /> */}
                              </motion.div>
                            </motion.div>
                          </div>
                        </section>
                      </div>
                    </main>
                  </section>
                  <Rådgivende />
                </div>
              </div>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default TjenesterLayout2;
