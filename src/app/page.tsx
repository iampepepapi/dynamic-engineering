import Homepage from "@/components/homepage/Homepage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import Tjenester from "@/components/homepage/Tjenester";
import TestimonialCarousel from "@/components/homepage/TestimonialCard";
import TjenesterLayout2 from "@/components/homepage/TjenesterLayout2";
import Rådgivende from "@/components/homepage/Rådgivende";
import IIOTSection from "@/components/homepage/IIOTSection";
import ScrollToTopButton from "@/components/ScrollToTop";
import Overvok from "@/components/homepage/Overvok";

const services = [
  {
    title: "Rådgivende",
    description:
      "Vi leverer tjenester innen planlegging og rådgivning i alle faser av prosjekter.",
    ImageSrc: "/Image/synnove.png",
  },
  {
    title: "IIOT og analyse",
    description:
      "Vi skreddersyr systemer som integrerer med eksisterende anlegg.",
    ImageSrc: "/Image/synnove.png",
  },
  {
    title: "IIOT og analyse",
    description:
      "Vi skreddersyr systemer som integrerer med eksisterende anlegg.",
    ImageSrc: "/Image/synnove.png",
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
    quote:
      "Synnøve Finden Avd. Lier har brukt Dynamic Engineering sine tjenester...",
    name: "Widar Israelsson",
    title: "Vedlikeholdsleder, Synnøve Finden AS",
  },
  // Add more testimonials as needed
];

export default function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Homepage />
      <div className="bg-background">
        <TestimonialCarousel />
        <div className="mx-auto flex min-h-screen flex-col items-center justify-center overflow-hidden">
          <TjenesterLayout2 />
          <IIOTSection />
          <Overvok />
        </div>
      </div>
    </>
  );
}
