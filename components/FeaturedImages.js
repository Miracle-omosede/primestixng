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
import { getAllCommunities } from "@/actions/getAllCommunities";
import EachProjectForCommunitySlider from "./EachProjectForCommunitySlider";

const FeaturedImages = () => {
  const [communities, setCommunities] = useState([]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const fetchCommunities = async () => {
      let data = await getAllCommunities();
      data = data.splice(0, 3);
      setCommunities(data);
    };

    fetchCommunities();
  }, []);

  console.log(communities);

  return (
    <>
      <div className="bg-black">
        {communities.length > 0 && (
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
                Our communities - luxury homes for sale
              </motion.h1>

              <div
                className={`grid grid-cols-12 gap-6 w-full justify-center items-center`}
              >
                {/* First */}
                {communities?.map((community, i) => (
                    <EachProjectForCommunitySlider key={community?._id} communityId={community?._id} index={i}/>
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
