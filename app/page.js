"use client";
import { useState, useEffect, useRef } from "react";

import { ThemeProvider } from "@material-tailwind/react";

import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import News from "@/components/News";
import OurTeam from "@/components/OurTeam";
import Slider from "@/components/Slides";
import HeroSlider from "@/components/HeroSlides";
import Image from "next/image";

import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeHighSharp } from "react-icons/io5";

export default function Home() {
  const [hasPreloader, sethasPreloader] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoIsMuted, setVideoIsMuted] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    // setVideoLoaded(true);
    const videoLoadingTimeout = setTimeout(() => {
      setVideoLoaded(true);
    }, 5000);

    // Simulating preloader delay for 10 seconds
    const preloaderTimeout = setTimeout(() => {
      // sethasPreloader(false);
      console.log("Done");
      setVideoIsMuted(true);
      clearTimeout(videoLoadingTimeout);
    }, 10000);

    return () => {
      clearTimeout(videoLoadingTimeout);
      clearTimeout(preloaderTimeout);
    };
  }, []);
  // Add this useEffect to start playing the video when it's loaded

  const toggleMute = () => {
    if (videoRef.current.muted) {
      setVideoIsMuted(false);
      videoRef.current.muted = false;
    } else {
      setVideoIsMuted(true);
      videoRef.current.muted = true;
    }
  };

  const exitPreloader = () => {
    sethasPreloader(false);
    setVideoIsMuted(true);
    setVideoIsMuted(true);
    videoRef.current.muted = true;
  };

  return (
    <ThemeProvider>
      <main className="flex flex-col relative overflow-x-hidden">
        {/* Preloader Video */}
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-[100000] transition-all duration-[1s] ${
            hasPreloader ? "translate-y-0" : "-translate-y-[100%]"
          }`}
        >
          <div className="absolute top-0 right-0 left-0 bottom-0 ">
            {!videoLoaded && (
              <div className="loading-indicator text-black flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
                <Image
                  src="/horizontal-logo-removebg-preview.png"
                  className="animate-bounce ease-in-out duration-1000 w-auto h-20 md:h-28"
                  height={796}
                  width={313}
                  alt="preview"
                />
              </div>
            )}
            <div
              onClick={exitPreloader}
              className="border-white border-[0.5px] font-raleway text-white w-36 h-10 flex items-center justify-center 
            absolute z-30 left-[50%] -translate-x-[50%] bottom-5 rounded-[50px] cursor-pointer text-sm"
            >
              Skip Intro
            </div>
            {/* Volume */}
            <div
              onClick={toggleMute}
              className="absolute top-5 left-5 border-white cursor-pointer border rounded-full h-9 w-9 flex items-center justify-center z-50"
            >
              {videoIsMuted ? (
                <IoVolumeMute color="white" />
              ) : (
                <IoVolumeHighSharp color="white" />
              )}
            </div>
          </div>
          <video
            muted
            ref={videoRef}
            autoPlay={true}
            controls={false}
            loop
            className={`w-full h-full object-cover ${
              videoLoaded ? "visible" : "hidden"
            }`}
          >
            https://res.cloudinary.com/dulduri72/video/upload/v1701495630/lwkvp4gkn7sgvt59vyeg.mp4
            Done with the video
            <source
              src="https://res.cloudinary.com/dulduri72/video/upload/v1701495630/lwkvp4gkn7sgvt59vyeg.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="carousel">
          {/* <ImageSlider /> */}
          <HeroSlider />
        </div>
        <div className="w-full h-auto">
          <Featured />
        </div>
        {/* <div className="relative w-full bg-pattern h-auto px-5 md:py-40 py-10">
          <Slider />
        </div> */}
        <div className="relative bg-[black] md:pt-52 pt-10 ">
          <News />
        </div>
        {/* <OurTeam /> */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
