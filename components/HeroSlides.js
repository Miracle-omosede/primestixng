"use client";
import { Carousel, IconButton } from "@material-tailwind/react";

import { motion } from "framer-motion";

import { staggerContainer, textVariant } from "@/utils/motion";

import React, { useState } from "react";

// import next image
import Image from "next/image";
import "../styles/main.scss";

import Button from "./Button";

export default function HeroSlider() {
  return (
    <>
      <Carousel
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute bottom-12 left-4 md:top-2/4 md:left-4 md:-translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#a18830"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute bottom-12 right-32 md:top-2/4 md:!right-4 md:-translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#a18830"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-[#a18830]" : "w-4 bg-[#856d16]"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="h-full w-full relative">
          <Image
            alt=""
            className="slightly-zoomed-image object-cover"
            layout="fill"
            src="/pic-4.jpg"
          />
          <div className="absolute  text-white top-0  flex flex-col md:grid grid-cols-12 justify-center md:items-center w-full h-full left-[10%]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="flex md:gap-5 gap-3 flex-col md:col-span-6 col-span-12 md:items-start items-start font-raleway "
            >
              <motion.h1
                variants={textVariant(1.1)}
                className="uppercase font-bold text-5xl text-left z-10"
              >
                Insights
              </motion.h1>
              <motion.p
                variants={textVariant(1.2)}
                className="md:text-2xl capitalize z-10"
              >
                Local Insight, Global Expertise
              </motion.p>
              <Button className="z-10" />
            </motion.div>

            {/*description  */}
            <div className="font-raleway  md:col-span-6 hidden md:flex">
              <motion.p
                variants={textVariant(1.2)}
                className="text-left w-full md:w-2/4 text-md p-10 glass-bg z-10"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </span>
                Experience opulent living in our luxurious apartments located in
                the heart of the city.
              </motion.p>
            </div>
          </div>
          <div className="home__shadow"></div>
        </div>
        <div className="h-full w-full relative">
          <Image
            alt=""
            className="slightly-zoomed-image object-cover"
            layout="fill"
            src="/pic-7.jpg"
          />
          <div className="absolute z-10 text-white top-0 flex flex-col md:grid grid-cols-12 justify-center md:items-center w-full h-full left-[10%]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="flex md:gap-5 gap-3 flex-col md:col-span-6 col-span-12 md:items-start items-start font-raleway "
            >
              <motion.h1
                variants={textVariant(1.1)}
                className="uppercase font-bold text-5xl text-left"
              >
                Build your dream.
              </motion.h1>
              <motion.p
                variants={textVariant(1.2)}
                className="md:text-2xl capitalize text-left"
              >
                Building Dreams, One Home
                <br /> at a Time
              </motion.p>
              <Button className="z-10" />
            </motion.div>

            {/*description  */}
            <div className="font-raleway  md:col-span-6 hidden md:flex">
              <motion.p
                variants={textVariant(1.2)}
                className="text-left w-full md:w-2/4 text-md p-10 glass-bg"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </span>
                Experience opulent living in our luxurious apartments located in
                the heart of the city.
              </motion.p>
            </div>
          </div>
          <div className="home__shadow"></div>
        </div>

        <div className="h-full w-full relative">
          <Image
            alt=""
            className="slightly-zoomed-image object-cover"
            layout="fill"
            src="/pic-5.jpg"
          />
          <div className="absolute z-10 text-white top-0 flex flex-col md:grid grid-cols-12 justify-center md:items-center w-full h-full left-[10%]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="flex md:gap-5 gap-3 flex-col md:col-span-6 col-span-12 md:items-start items-start font-raleway "
            >
              <motion.h1
                variants={textVariant(1.1)}
                className="uppercase font-bold text-5xl text-left"
              >
                Commited <br />
                to you
              </motion.h1>
              <motion.p
                variants={textVariant(1.2)}
                className="md:text-2xl capitalize "
              >
                Your Goals, Our Commitment
              </motion.p>
              <Button className="z-10" />
            </motion.div>

            <div className="font-raleway  md:col-span-6 hidden md:flex">
              <motion.p
                variants={textVariant(1.2)}
                className="text-left w-full md:w-2/4 text-md p-10 glass-bg"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </span>
                Experience opulent living in our luxurious apartments located in
                the heart of the city.
              </motion.p>
            </div>
          </div>
          <div className="home__shadow"></div>
        </div>
      </Carousel>
    </>
  );
}
