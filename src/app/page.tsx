import Homepage from "@/components/homepage/Homepage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import Tjenester from "@/components/homepage/Tjenester";
import TestimonialCarousel from "@/components/homepage/TestimonialCard";

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
      <Homepage />

      {/* Testimonials Section */}
      <TestimonialCarousel />
      <Tjenester />
    </>
  );
}
