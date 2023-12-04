"use client";

import Divider from "@/components/Divider";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFoundersMessage } from "@/actions/getFoundersMessage";
import Link from "next/link";

const About = () => {
  const [founder, setFounder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFounderMessage = async () => {
      try {
        setIsLoading(true);
        const data = await getFoundersMessage();
        setFounder(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFounderMessage();
  }, []);

  return (
    <div className="mt-10">
      <div className="bg-black">
        <div className="flex flex-col font-raleway px-5 md:px-0 max-w-[1100px] w-full mx-auto py-20">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">About PRIMESTIX</h1>
            <p className="capitalize text-2xl text-gray-400 md:text-2xl">Our story</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] w-full mx-auto px-5 mb-20 md:px-0 font-raleway">
        <p className="py-5">
Introducing <b>Primestix</b>, where Design meets innovation, Automation transforms living, and 
Disruption reshapes the future. Our mantra,<blockquote>Design, Automate, Disrupt,</blockquote>  isn&apos;t just a slogan—it&apos;s 
our very essence.
At Primestix, we reset the boundaries of luxury living, setting new standards that are not just 
timeless but revolutionary. We don&apos;t just build homes; we craft living experiences that stand as 
timeless pieces of architectural artistry. Every detail, every curve carved, and every innovation is 
meticulously curated to reflect our commitment to state-of-the-art living.
Our commitment remains steadfast: Primestix embodies only what is timeless, cutting-edge, state-of-the-art, and exceptional. We don&apos;t conform to trends; we establish them. Our residences 
transcend mere dwellings; they represent pioneering statements of unmatched craftsmanship and 
technological brilliance.
With a focus on sustainability and eco-conscious practices, we seamlessly integrate the latest 
automation technologies, ensuring that our residents experience the epitome of comfort, 
convenience, and efficiency. From smart home systems that anticipate your needs to eco-friendly 
features that minimize our ecological footprint, Primestix residences are pioneering the future of
However, our efforts don&apos;t end there. Primestix is a force of change, disrupting the real estate 
domain, questioning norms and envisioning & designing new possibilities. Our developments go 
beyond mere properties; they serve as lifestyle statements, turning spaces into lively communities 
and residences into dream homes. We take the lead, and others follow—because, at Primestix, 
we&apos;re not just constructing homes; we&apos;re enlarging the possibilities of timeless sophistication.
Join us on a journey where architectural brilliance, cutting-edge technology, and timeless design 
converge. Primestix is more than a builder; we are the architects of your future, the innovators of 
your living experience, and the disruptors of the ordinary. 
Welcome to Primestix, where excellence is not an option—it&apos;s our standard.
        </p>
      </div>
    </div>
  );
};

export default About;
