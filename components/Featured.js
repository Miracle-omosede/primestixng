"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedImages from "./FeaturedImages";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

const Featured =  () => {
  

  return (
    <div className=" md:px-0 overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute top-0 w-full h-full">
          <Image
            alt=""
            src="/pic-2.jpg"
            className="absolute md:-right-[10rem] top-0 z-[-999] object-cover "
            width={1000}
            height={1000}
          />
          <div className="cloud"></div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="py-32 max-w-[600px] mx-auto w-full overflow-hidden flex flex-col justify-center leading-7 items-center gap-3 two alt-two px-5"
        >
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="primary-heading text-center capitalize font-[600] leading-8"
          >
            Redefining Real Estate.
            <span className="leading-3"> A new era in property development.</span>
          </motion.h1>
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 2)}
            className="text-center text-white z-[999] font- md:text-xl text-sm leading-6 font-raleway"
          >
            Embark on a revolutionary adventure with Primestix as we disrupt the real estate landscape in Abuja and revamp luxury living throughout Nigeria. Developing sophisticated and automated residential masterpieces that redefine contemporary living is our goal, ushering in a new era of opulence. At Primestix, we do not just build homes, we automate lifestyles.
          </motion.h2>
        </motion.div>
      </div>
      {/* <FeaturedSlider/> */}
      <FeaturedImages />
    </div>
  );
};

export default Featured;
