"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Dynamic Engineering har levert flere prosjekter hos oss, blant annet to store CIP anlegg, kontrollsystemer, maskinkontroll systemer og OEE. Det har vært et godt samarbeid mellom oss og Dynamic Engineering. De er raske på responstiden og de har levert og funnet gode løsninger for vår bedrift. Vi ønsker gjerne å anbefale de videre og vi i Aass bryggeri kommer selv til å fortsette å bruke deres tjenester.",
    name: "Christian Aug. K. Aass",
    title: "Adm.direktør, Aass Bryggeri",
    imgSrc: "/img/aass-logo-neb.png",
  },
  {
    quote:
      "Løsningsorienterte og rett på sak. Dynamic Engieering tilpasser seg våre behov og leverer det nyeste innen digitalisering og automasjon. Sammen utfordrer vi dagens teknologi innen SCADA og andre fabrikksystemer med moderne løsninger.",
    name: "Haris Jasarevic",
    title: "Project Manager Digitalization/ Automation, Brynild",
    imgSrc: "/img/brynild_logo.png",
  },
  {
    quote:
      "Synnøve Finden Avd. Lier har brukt Dynamic Engineering sine tjenester. Alle jobber som er utført her er pliktoppfyllende og fagmessig utført, og til riktig tid. Alltid uført med riktig personell, raskt oppmøte og raskt utført og med HMS i høysetet.",
    name: "Widar Israelsson",
    title: "Vedlikeholdsleder, Synnøve Finden AS",
    imgSrc: "/img/synnove-logo-plain.png",
  },
  // Add more testimonials as needed
];

export default function TestimonialCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Detect if the device is mobile based on the screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-t from-background/10 via-slate-300/10 to-accent/10 backdrop-blur-[7px] before:blur-sm"
    >
      <div className="mx-auto w-full max-w-7xl text-center">
        {/* <h2 className="text-5xl  font-bold mb-4 text-primary/90 tracking-wide">
                    Testimonials
                </h2> */}
        <div className="relative overflow-hidden pt-4">
          <Carousel
            ref={carouselRef} // Attach the ref to the Carousel component
            plugins={[
              Autoplay({
                delay: 5000, // Set the delay for auto-slide
              }),
            ]}
            opts={{ loop: true }} // Loop through the items
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="flex select-none flex-col items-center justify-between pt-10 md:flex-row md:justify-center md:gap-12 md:pb-4 md:pt-4"
                >
                  <div className="-mt-4 mb-4 flex h-20 flex-shrink-0 items-center">
                    <Image
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      width={200}
                      height={200}
                      className="pointer-events-none object-contain"
                    />
                  </div>
                  <div className="max-w-md flex-grow text-wrap text-center md:text-left">
                    <p
                      className="mb-4 flex h-36 select-text items-center text-wrap px-4 text-xs italic text-primary md:mb-2 md:px-0 md:text-sm"
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p
                      className="mb-4 select-text font-semibold dark:text-gray-200"
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="select-text px-4 pb-4 text-gray-400 md:px-0"
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="absolute inset-y-1/2 -translate-y-1/2 transform border-transparent bg-transparent text-primary/30 hover:text-primary md:left-8 lg:left-40" />
              <CarouselNext className="absolute inset-y-1/2 -translate-y-1/2 transform border-transparent bg-transparent text-primary/30 hover:text-primary md:right-8 lg:right-40" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
