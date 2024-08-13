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
        quote: "«Dynamic Engineering har levert flere prosjekter hos oss, blant annet to store CIP anlegg, kontrollsystemer, maskinkontroll systemer og OEE. Det har vært et godt samarbeid mellom oss og Dynamic Engineering. De er raske på responstiden og de har levert og funnet gode løsninger for vår bedrift. Vi ønsker gjerne å anbefale de videre og vi i Aass bryggeri kommer selv til å fortsette å bruke deres tjenester.»",
        name: "Christian Aug. K. Aass",
        title: "Adm.direktør, Aass Bryggeri",
        imgSrc: "/img/aass-logo-neb.png",
    },
    {
        quote: "Løsningsorienterte og rett på sak. Dynamic Engieering tilpasser seg våre behov og leverer det nyeste innen digitalisering og automasjon. Sammen utfordrer vi dagens teknologi innen SCADA og andre fabrikksystemer med moderne løsninger.",
        name: "Haris Jasarevic",
        title: "Project Manager Digitalization/ Automation, Brynild",
        imgSrc: "/img/brynild_logo.png",
    },
    {
        quote: "Synnøve Finden Avd. Lier har brukt Dynamic Engineering sine tjenester. Alle jobber som er utført her er pliktoppfyllende og fagmessig utført, og til riktig tid. Alltid uført med riktig personell, raskt oppmøte og raskt utført og med HMS i høysetet.",
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
            className=" bg-gradient-to-tr from-background/10 via-slate-300/10 to-accent/10 backdrop-blur-[4px] before:blur-sm"
        >
            <div className="max-w-7xl mx-auto text-center w-full">
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
                                    className="flex flex-col md:flex-row items-center md:justify-center md:gap-12 pt-10 md:pt-4 mb-2 justify-between md:pb-4 select-none"
                                >
                                    <div className="flex-shrink-0 flex items-center h-20 mb-4 -mt-4">
                                        <Image
                                            src={testimonial.imgSrc}
                                            alt={testimonial.name}
                                            width={200}
                                            height={200}
                                            className="object-contain pointer-events-none"
                                        />
                                    </div>
                                    <div className="text-center max-w-md flex-grow text-wrap md:text-left">
                                        <p
                                            className="text-xs md:text-sm text-wrap italic text-primary mb-4 md:mb-2 select-text px-4 md:px-0 h-36 flex items-center"
                                            onMouseDown={(e) =>
                                                e.stopPropagation()
                                            }
                                        >
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                        <p
                                            className="font-semibold dark:text-gray-200 mb-4  select-text"
                                            onMouseDown={(e) =>
                                                e.stopPropagation()
                                            }
                                        >
                                            {testimonial.name}
                                        </p>
                                        <p
                                            className="text-gray-400 select-text px-4 md:px-0 pb-4"
                                            onMouseDown={(e) =>
                                                e.stopPropagation()
                                            }
                                        >
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="hidden md:block ">
                            <CarouselPrevious className="absolute inset-y-1/2 md:left-8 lg:left-40 transform -translate-y-1/2 text-primary/30 border-transparent hover:text-primary bg-transparent" />
                            <CarouselNext className="absolute inset-y-1/2 md:right-8 lg:right-40 transform -translate-y-1/2 text-primary/30 border-transparent hover:text-primary bg-transparent" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
