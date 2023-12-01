"use client";
import { useState, useEffect } from "react";

import { ThemeProvider } from "@material-tailwind/react";

import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import News from "@/components/News";
import OurTeam from "@/components/OurTeam";
import Slider from "@/components/Slides";
import HeroSlider from "@/components/HeroSlides";

export default function Home() {
  const [hasPreloader, sethasPreloader] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      sethasPreloader(false);
    }, 10000);

    return () => clearTimeout(interval);
  }, []);

  return (
    <ThemeProvider>
      <main className="flex flex-col relative overflow-x-hidden">
        {/* Preloader Video */}
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-black z-[100000] transition-all duration-[1s] ${
            hasPreloader ? "translate-y-0" : "-translate-y-[100%]"
          }`}
        >
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/60">
            <div
              onClick={() => sethasPreloader(false)}
              className="border-white border-[0.5px] text-white w-36 h-10 flex items-center justify-center 
            absolute z-30 left-[50%] -translate-x-[50%] bottom-5 rounded-2xl cursor-pointer text-sm"
            >
              Skip Intro
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            className="preloader-video w-full h-full object-cover"
          >
            <source src="/combat.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="carousel">
          {/* <ImageSlider />
           */}
          <HeroSlider />
        </div>
        <div className="w-full h-auto">
          <Featured />
        </div>
        <div className="relative w-full bg-pattern h-auto px-5 md:py-40 py-10">
          <Slider />
        </div>
        <div className="relative bg-[black] md:pt-52 pt-10 ">
          <News />
        </div>
        {/* <OurTeam /> */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
