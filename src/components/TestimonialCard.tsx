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
        quote: "Dynamic Engineering har levert flere prosjekter hos oss...",
        name: "Christian Aug. K. Aass",
        title: "Adm.direktør, Aass Bryggeri",
        imgSrc: "/img/aass-logo-neb.png",
    },
    {
        quote: "Synnøve Finden Avd. Lier har brukt Dynamic Engineering sine tjenester...",
        name: "Widar Israelsson",
        title: "Vedlikeholdsleder, Synnøve Finden AS",
        imgSrc: "/img/brynild_logo.png",
    },
    {
        quote: "Synnøve Finden Avd. Lier har brukt Dynamic Engineering sine tjenester...",
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
        <section id="testimonials" className="bg-background py-4">
            <div className="max-w-7xl mx-auto text-center w-full">
                {/* <h2 className="text-5xl  font-bold mb-4 text-primary/90 tracking-wide">
                    Testimonials
                </h2> */}
                <div className="relative overflow-hidden">
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
                                    className="flex flex-col md:flex-row items-center md:justify-center justify-between gap-4 p-20 select-none"
                                >
                                    <div className="flex-shrink-0 md:ml-16">
                                        <Image
                                            src={testimonial.imgSrc}
                                            alt={testimonial.name}
                                            width={200}
                                            height={200}
                                            className="rounded-full object-contain  pointer-events-none"
                                        />
                                    </div>
                                    <div className="text-center max-w-md flex-grow p-4 md:p-0 md:text-left">
                                        <p
                                            className="text-xs md:text-lg text-wrap italic text-primary mb-4 select-text"
                                            onMouseDown={(e) =>
                                                e.stopPropagation()
                                            } // Prevent carousel drag when selecting text
                                        >
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                        <p
                                            className="font-semibold dark:text-gray-200 select-text"
                                            onMouseDown={(e) =>
                                                e.stopPropagation()
                                            }
                                        >
                                            {testimonial.name}
                                        </p>
                                        <p
                                            className="text-gray-400 select-text"
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
                        <div className="">
                            <CarouselPrevious className="absolute inset-y-1/2 left-8 transform -translate-y-1/2 text-primary" />
                            <CarouselNext className="absolute inset-y-1/2 right-8 transform -translate-y-1/2 text-primary" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
