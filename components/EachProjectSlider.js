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
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import Recents from "./Recents";
import { getLatestFeatured } from "@/actions/getLatestFeatured";
import { formatLocation } from "@/lib/helpers";
import { getAllCommunityProjects } from "@/actions/getAllProjectsInCommunity";

const EachProjectSlider = ({ project, index }) => {
  
  // Please check why the progress Circle is not working
  console.log(project?.gallery);

  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      className={`${
        index === 0
          ? "col-span-12 flex flex-col h-full w-full justify-center items-center"
          : "col-span-12 md:col-span-6"
      }`}
    >
      {project?.gallery?.length > 0 && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect={"fade"}
          navigation={false}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {project?.gallery?.map((projectGalleryImage, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <Image
                  src={projectGalleryImage?.imageUrl?.asset?.url}
                  className="object-cover absolute top-0 left-0"
                  layout="fill"
                  alt=""
                />
                <div className="home__overlay2"></div>
                <motion.div className="w-full text-left absolute bottom-0 font-raleway text-white flex flex-col" variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.25 }} >
                  <div className="px-5">
                    <motion.h1 variants={textVariant(1.1)} className="text-3xl font-[600]">{project?.name}.</motion.h1>
                    {/* sub-heading */}
                    <motion.h2 variants={textVariant(1.2)} className="font-[300] flex items-center tracking-wider">
                    <span className="flex">
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
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </span>
                     <span>
                     {formatLocation(
                        project?.city?.name,
                        project?.country?.name
                      )}
                     </span>
                    </motion.h2>
                    <motion.p variants={textVariant(1.3)} className="text-sm w-full font-raleway py-2 font-[500]">
  {project?.description && project?.description.length > 150
    ? `${project.description.substring(0, 150).trim()}...`
    : project?.description}
</motion.p>
                  </div>

                  <div className="divider w-full bg-[#AD8F31] h-[1px]"></div>
                  <motion.div className="w-full font-raleway px-5" variants={textVariant(1.4)}>
                    <Link
                      href={`/projects/${project._id}`}
                      className="w-full flex items-center justify-between py-3"
                    >
                      <span className="uppercase">Learn more</span>
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
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>

                <div className="glass-bg2 font-raleway absolute py-3 my-5 mx-5 px-5 top-0 right-0 text-white rounded-[50px]">
                  <Link
                    href={`/projects/${project._id}`}
                    className="flex items-center justify-between gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                    </svg>
                    <span className="font-raleway">Take a 3D Tour</span>
                  </Link>
                </div>
                {/* <div className="absolute left-0 flex w-full items-end justify-start bottom-0 py-5 md:py-10 my-auto px-16 md:h-40 glass-bg2 text-white">
                  <div className="flex justify-between gap-3 md:text-center text-left md:gap-0 flex-col w-full ">
                    <motion.div
                      className="font-raleway flex flex-col gap-2 items-start justify-between"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.25 }}
                    >
                      <motion.span
                        variants={textVariant(1.1)}
                        className="font-bold md:text-4xl text-2xl capitalize"
                      >
                        {project?.name}
                      </motion.span>
                      <motion.span
                        variants={textVariant(1.2)}
                        className="capitalize gap-2 flex items-center justify-center md:text-xl text-md font-semibold"
                      >
                        <span className="hidden md:flex">
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
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </span>
                        <motion.span variants={textVariant(1.3)}>
                          {formatLocation(
                            project?.city?.name,
                            project?.country?.name
                          )}
                        </motion.span>
                      </motion.span>
                    </motion.div>
                    <div>
                      <Link
                        href={`/projects/${project._id}`}
                        className="w-full flex items-center justify-start gap-3 my-2 hover:gap-6 font-bold font-raleway transition-all duration-300 text-sm text-white"
                      >
                        <span className="capitalize">Learn more</span>
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
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </motion.div>
  );
};

export default EachProjectSlider;
