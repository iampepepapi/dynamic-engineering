// components/MonitorSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "../Modal";
import CustomModalShadcn from "../CustomModalShadcn";

export default function MonitorSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <section className="relative">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center md:flex-row">
          <div className="relative">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Overvåk dine enheter
            </h2>
            <p className="mb-8 text-left text-lg text-gray-700 dark:text-gray-300">
              Enten det er en maskin, et lokomotiv, en kontainer, en sensor
              osv... så kan det overvåkes i plattformen. Sett opp alarmer hvis
              temperaturen endrer seg, eller om enheten beveger seg utenfor et
              geografisk område. Du kan også sende beskjeder til enhetene dine,
              som for eksempel å skru på en dieselvarmer eller en pumpe.
            </p>
            {/* Uncomment and use Button if needed */}
            {/* <Button className="transition-colors duration-300">Lær mer</Button> */}
          </div>

          <Image
            src="/img/imgMonitoring.png"
            width={500}
            height={500}
            alt="Monitoring Image"
            className="transform cursor-pointer transition-transform md:hover:scale-105"
            onClick={() => openModal("/img/imgMonitoring.png")}
          />
        </div>
        <CustomModalShadcn
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={selectedImage}
        />
      </section>
    </>
  );
}
