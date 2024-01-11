import React from "react";
import Image from "next/image";
import Link from "next/link";

const category = () => {
  return (
    <div className="min-h-screen mt-20 mb-20">
     <div className="caption-section text-white font-raleway">
        <div className="max-w-[768px] lg:max-w-[1170px] mx-auto px-[15px] ">
          <h1 className="text-[53px] font-bold tracking-[2.06px] pt-[20px]">
          Projects
          </h1>
          <p className="capitalize text-lg text-gray-400 md:text-xl">
                  Discover your dream home.
                </p>
        </div>
      </div>

      <div className="max-w-[970px] mt-10 lg:max-w-[1170px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-5">
      <Link href="/projects">
      <div className="shadow-2xl font-raleway">
        <div
          style={{
            backgroundImage: `url(/suspendedpool.jpg)`,
            backgroundPosition: "50% center",
          }}
          className="h-[305px] bg-no-repeat bg-cover w-full"
        ></div>
        <div className="bg-white min-h-[225px] text-left py-[5px] px-[19px] relative">
          <h3 className="uppercase font-extrabold text-black text-[20px] h-[42px]">
            The Maison terranova
          </h3>

          {/* <div className="py-3">
            <b>N </b>
            {data?.price}
          </div> */}

          {/* <p className="text-[#4a4a4a]   text-md font-bold h-[46px] mb-[1px] ">
            {data?.description && data.description.length > 60
              ? `${data.description.substring(0, 60)}...`
              : data?.description}
          </p> */}

          <div className=" bg-[#cfba82] h-[1px] w-full mt-5" />
          <div className="h-[50px] flex items-center justify-between">
            <button className="uppercase text-[12px] text-[#cfba82] font-bold">
              Know More
            </button>

            <Image
              alt="arrow"
              src={"/arrow-search.png"}
              height={10}
              width={28}
            />
          </div>
        </div>
      </div>
    </Link>
      </div>
    </div>
  );
};

export default category;
