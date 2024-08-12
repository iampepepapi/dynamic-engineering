import Homepage from "@/components/homepage/Homepage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TestimonialCarousel from "@/components/TestimonialCard";

const services = [
    {
        title: "Rådgivende",
        description:
            "Vi leverer tjenester innen planlegging og rådgivning i alle faser av prosjekter.",
        imgSrc: "/img/synnove.png",
    },
    {
        title: "IIOT og analyse",
        description:
            "Vi skreddersyr systemer som integrerer med eksisterende anlegg.",
        imgSrc: "/img/synnove.png",
    },
    {
        title: "IIOT og analyse",
        description:
            "Vi skreddersyr systemer som integrerer med eksisterende anlegg.",
        imgSrc: "/img/synnove.png",
    },
    // Add more services as needed
];

const testimonials = [
    {
        quote: "Dynamic Engineering har levert flere prosjekter hos oss...",
        name: "Christian Aug. K. Aass",
        title: "Adm.direktør, Aass Bryggeri",
    },
    {
        quote: "Synnøve Finden Avd. Lier har brukt Dynamic Engineering sine tjenester...",
        name: "Widar Israelsson",
        title: "Vedlikeholdsleder, Synnøve Finden AS",
    },
    // Add more testimonials as needed
];

export default function Home() {
    return (
        <>
            <Homepage />

            {/* Testimonials Section */}
            <TestimonialCarousel />

            {/* Services Section */}
            {/* <section id="services" className="py-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">Våre Tjenester</h2>
                    <div className="flex justify-center flex-wrap gap-8 mt-8">
                        {services.map((service, index) => (
                            <Card key={index} className="w-80">
                                <CardHeader>
                                    <Image
                                        src={service.imgSrc}
                                        alt={service.title}
                                        className="rounded-md"
                                        width={320}
                                        height={240}
                                    />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="text-2xl font-semibold mt-4">
                                        {service.title}
                                    </CardTitle>
                                    <p className="mt-2 text-gray-600">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
           

         
            <footer className="bg-gray-800 text-white py-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p>
                        &copy; {new Date().getFullYear()} Dynamic Engineering.
                        All rights reserved.
                    </p>
                </div>
            </footer> */}
        </>
    );
}
