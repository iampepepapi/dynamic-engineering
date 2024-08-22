import Image from "next/image";
import React from "react";

function Rådgivende() {
  return (
    <div className="">
      {/* Rådgivende Section */}
      <section className="mx-auto w-full max-w-7xl rounded-2xl px-6 md:px-20">
        <div className="flex items-center justify-center md:justify-start">
          <div className="flex-grow border-t border-transparent bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"></div>
          <h2 className="whitespace-nowrap text-center text-3xl font-bold text-primary md:text-4xl">
            Rådgivende
          </h2>
          <div className="flex-grow border-t border-transparent bg-gradient-to-l from-primary/50 via-primary/20 to-transparent"></div>
        </div>
        <p className="mt-4 flex w-full justify-center text-center text-sm leading-relaxed text-muted-foreground md:text-left md:text-base">
          Vi leverer tjenester innen planlegging og rådgivning i alle faser av
          prosjekter; fra idé, planlegging til igangsetting.
        </p>
      </section>

      {/* Text and Image Section */}
      <section className="mx-auto mt-12 max-w-7xl rounded-2xl px-6 md:px-12">
        <div className="flex flex-col justify-center gap-x-4 md:flex-row-reverse">
          <div className="relative top-0 mt-0 justify-start pt-0 md:w-1/2">
            <p className="text-shadow-lg text-left text-sm leading-relaxed tracking-wide text-foreground md:text-base md:tracking-normal">
              Selv om vi er en liten bedrift, har vi allerede opparbeidet oss et
              godt rykte med flere tunge aktører som blant annet Schlumberger,
              Peregrino, Brynhild, Aass, Synnøve Finden, Subsea7 og Nordisk
              Vannteknikk, med meget tilfredstillende resultater, i inn -og
              utland. Med utmerkede referanser og erfaring fra en rekke bransjer
              som maritimt, industrielt og offshore, vet vi akkurat hva som skal
              til for å nå deres målsettinger.
            </p>
          </div>
          <div className="m-auto flex justify-center pt-4 md:w-1/2 md:pt-0">
            <Image
              src="/img/consulting-woodtech.jpg"
              alt="Nøkkelferdige løsninger"
              className="h-auto max-h-48 w-fit rounded-lg object-cover md:max-h-64"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rådgivende;
