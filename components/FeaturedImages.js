"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "./swiper-slider.modules.css"
import Link from "next/link";
import "../styles/main.scss";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  slideIn,
  textVariant2,
  staggerContainer,
  textVariant,
  fadeIn,
  planetVariants,
} from "@/utils/motion";

// import required modules
import EachProjectSlider from "./EachProjectSlider";
import { getAllProjects } from "@/actions/getAllProjects";

const FeaturedImages = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let data = await getAllProjects();
      data = data.splice(0, 3);
      setProjects(data);
    };
    fetchProjects();
  }, []);



  return (
    <>
      <div className="bg-black">
        {projects.length > 0 && (
          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="max-w-[1100px] mx-auto w-full flex flex-col items-center justify-center py-5 px-5 three"
            >
              <motion.h1
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                className="capitalize heading text-white font-raleway mb-6"
              >
                Our Featured Homes - luxury homes for sale
              </motion.h1>

              <div
                className={`grid grid-cols-12 gap-6 w-full justify-center items-center`}
              >
                {/* First --- Continue from here */}
                {projects?.map((project, i) => (
                  <EachProjectSlider
                    key={project?._id}
                    project={project}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default FeaturedImages;
