import React from "react";
import Image from "next/image";

const fourthbio = () => {
  return (
    <div className="flex mt-10 flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
      <div>
        <h1 className="font-bold text-3xl">GRACE ICHABA</h1>
        <hr className="my-5 border-black" />
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-9 col-span-12">
          Grace Ichaba is a chartered and registered Quantity Surveyor with an illustrious career spanning over twelve years. As the Head of
Engineering at Primestix Construction Limited, she brings a wealth of experience and dynamism to Primestix. Her responsibilities
encompass various facets of quantity surveying and project management, estimating, cost planning, evaluation, monitoring, and
control is a cornerstone of Primestix&apos;s commitment to delivering innovative and high-quality real estate projects.
Prior to her role at Primestix, Grace has successfully overseen and executed a multitude of construction projects, including academic
complexes, multipurpose halls, and departmental buildings in various educational institutions, civil engineering projects, including
road networks within estates, showcasing her versatility in handling diverse aspects of real estate development.
Grace is a professional member of the Nigerian Institute of Quantity Surveyors (MNIQS) and fully registered with the Quantity
Surveyors Registration Board of Nigeria (QSRBN), underlining her commitment to the highest standards of professional practice.
          </div>
          <div className="md:col-span-3 col-span-12 flex items-center justify-center">
          <Image
                      alt=""
                      src="/staffs/casual/img-11.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
          </div>
        </div>
      </div>
    </div>
  );
};

export default fourthbio;
