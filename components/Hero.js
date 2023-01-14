import React from "react";

import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <div className="bg-hero h-[712px]">
      <div className="container mx-auto ">
        <Navbar />
        <div className="text-center ">
          <h1 className="text-3xl text-white font-semibold font-mono w-8/12 mx-auto mt-28 leading-relaxed">
            Saya seorang calon front-end engineer, calon back-end engineer, dan
            juga calon UI designer
          </h1>
          <p className="text-white w-4/12 text-opacity-60 text-lg mx-auto mt-6 leading-relaxed">
            Sejak 3 tahun saya memulai programming. Sejak 1 tahun memulai UI
            design.
          </p>
          <Button className="mt-14" variant="filled-yellow">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
