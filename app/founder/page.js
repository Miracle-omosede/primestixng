"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFoundersMessage } from "@/actions/getFoundersMessage";


const Founder = () => {
  const [founders, setFounder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFoundersMessage = async () => {
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

    fetchFoundersMessage();
  }, []);

  return (
    <>
      {isLoading ? (
        <>LOADING</>
      ) : (
        <>
          <div className="mb-20">
            <div className="bg-black mt-20">
              <div className="flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20 justify-center">
                <div className="text-white">
                  <h1 className="text-4xl font-semibold">About Primestix</h1>
                  <p className="capitalize text-2xl w-full text-gray-400 md:text-2xl">
                    Founder&apos;s message
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:items-center md:justify-center pt-4 md:px-0 px-5 font-raleway max-w-[1100px] md:mt-5 w-full mx-auto md:py-20 relative">
                <div className="grid grid-cols-12 md:gap-7 ">
                  <div className="md:col-span-12 col-span-12 flex flex-row gap-2">
                    <div className="grid grid-cols-12 gap-3 w-full ">
                      <div className="md:col-span-12 col-span-12 flex flex-col items-center justify-center mb-5">
                        <Image
                          className="w-[500px] relative object-cover h-[400px]"
                          src="/founders.png"
                          width={500}
                          height={500}
                          alt="ceos"
                        />
                        <div>
                          <span className="text-slate-600 italic font-bold">
                            Maxwell Okperi & Hanim Windibiziri
                          </span>
                          <br />
                         
                        </div>
                      </div>
            
                    </div>
                  </div>
                  <div className="md:col-span-12 col-span-12 flex flex-col">
                    {/* Founder message */}
                    <p>
                      <b className="text-xl py-2">Dear Friends and Future Homeowners,</b>
                      <br />
                      Welcome! Ndewo!! Ekaabo!!! Barka Da Zuwa!!!!
                      <br />
                      At Primestix Construction, we believe that every step into
                      a new home should be marked by excitement, innovation, and
                      the promise of a brighter future. Fundamental to our
                      mission is a passion for redefining the real estate
                      landscape in Nigeria through design, automation, and a
                      relentless commitment to disruption. As the founding
                      partners, we extend a warm welcome to you, and we are
                      thrilled that you want to embark on this journey with us.
                      Our Vision: Redefining Luxurious Living From the inception
                      of Primestix Construction, our vision has been clear – to
                      redefine luxurious living. We believe that a home is not
                      just a space; it&apos;s a canvas for your dreams, a
                      sanctuary of comfort, and a testament to your aspirations.
                      Our mission is to craft unparalleled homeownership
                      experiences that transcend the ordinary. Innovation
                      Through Design: Crafting Dreams into Reality At Primestix,
                      design is beyond bricks and mortar; it&apos;s about
                      understanding your desires and breathing life into your
                      vision. We are dedicated to designing homes that resonate
                      with your unique lifestyle. Our commitment to innovation
                      is not just about aesthetics; it&apos;s about creating
                      homes that adapt to your needs, embrace sustainability,
                      and reflect the spirit of contemporary living. Automation:
                      Transforming Experiences In this era of technology, we
                      embrace automation as a catalyst for change. We are not
                      just a real estate company; we are pioneers in leveraging
                      cutting-edge automation to streamline processes, enhance
                      efficiency, and provide you with a seamless experience.
                      From turning on lights to controlling weather, every
                      interaction is infused with the precision and ease that
                      automation brings. At Primestix, we are not just building
                      homes, we are automating lifestyles. Disruption:
                      Redefining the Norms of Real Estate Disruption isn&apos;t
                      just a buzzword for us; it&apos;s the essence of our DNA.
                      We&apos;re here to challenge norms, break boundaries, and
                      redefine the standards of excellence in real estate. From
                      the way we operate as a company, to the homes we design;
                      our mission is clear: to disrupt norms in the real estate
                      industry. Join Us on this Extraordinary Adventure: To our
                      future homeowners, partners, and dreamers, we invite you
                      to be part of something extraordinary. Explore our
                      website, discover the innovation that fuels our mission,
                      and witness the future of real estate unfold. From
                      designing homes that adapt to your lifestyle to automating
                      processes for your convenience, every facet of our company
                      is designed with you in mind. Whether you are seeking your
                      dream home or envisioning an investment that aligns with
                      your goals, Primestix is more than a service – it is a
                      promise to deliver excellence, innovation, and a future
                      where your dreams find their home. Thank you for trusting
                      us with your dreams. Let&apos;s embark on this journey
                      together!
                      <br />
                      Warm regards,
                      <br />
                      <span className="mt-10">
                        <b className="italic">Maxwell and Hanim.</b>
                        <br />
                        Founding Partners,
                        <br />
                        Primestix Construction
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col font-raleway max-w-[1100px] w-full px-5 md:px-0 mx-auto py-5 font-[400] pb-5 md:pb-20 text-xl text-md leading-8">
                  <p>
                    <br />
                    {founder?.message}
                    <br />
                    <span className="text-slate-600 italic font-bold">
                      {founder?.name}
                    </span>
                    <br />
                    <span className="text-slate-500 font-bold">
                      {founder?.position}
                    </span>
                  </p>
                </div> */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Founder;
