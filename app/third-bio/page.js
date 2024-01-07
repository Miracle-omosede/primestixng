import React from "react";
import Image from "next/image";

const thirdbio = () => {
  return (
    <div className="flex mt-10 flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
      <div>
        <h1 className="font-bold text-3xl">NGOZI AKUBUEZE
</h1>
        <hr className="my-5 border-black" />
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-9 col-span-12">
          Ngozi, a graduate of Psychology from the renowned Nnamdi Azikiwe University, is a Human Resources professional
certified by the prestigious Human Resources Certification Institute in the USA. Armed with over half a decade of
professional experience, she has honed her skills as a versatile generalist across a diverse array of industries, including
Real Estate, Media and advertising, IT, and FMCG.
Her professional prowess spans a wide spectrum, encompassing Talent Acquisition and Retention, Workforce Planning,
Policy Creation and Implementation, Stakeholder Management, Advisory Services, Training and Development,
Employee Engagement, Culture Design, Counseling, Employer Branding, and Benefits Administration.
In a remarkable chapter of her career, Ngozi took the reins of the Human Resources and Compliance department in a
multinational corporation with branches stretching across major cities in Nigeria, the UK, the USA, and the UAE. In
this role, she managed a dynamic team of over 120 employees and orchestrated a significant financial ascent, driving
revenue from N700 million to a remarkable N2 billion within a single year.
Prior to her tenure at Primestix Construction, Ngozi held the pivotal role of People and operations Lead at Nigeria&apos;s
pioneering mental health tech company. Leading a dynamic team of both technical and non-technical professionals to
deliver accessible and affordable psychotherapeutic services to Africans worldwide.
Ngozi holds a pivotal role at Primestix Construction as the Head of People Operations and administration. In this
capacity, she spearheads a multitude of crucial functions that encompass the entire spectrum of the employee journey,
from onboarding to offboarding. Her expert guidance ensures the seamless and efficient operation of the organization
as this plays a key role in driving Primestix Construction toward its vision of excellence and growth.
She is a strong advocate of the belief that people are an organization&apos;s most asset. Her work revolves around harnessing
the innate potential within individuals to enhance productivity, all while ensuring job satisfaction. Her career
aspiration? To become Nigeria&apos;s and, ultimately, Africa&apos;s foremost performance coach.
When not engrossed in her professional pursuits, Ngozi&apos;s diverse interests come to the fore. You may find her
immersed in the pages of a compelling book, tuning in to music, solving intricate puzzles, crafting culinary delights in
her kitchen, or deep amid an extensive research quest on subjects that pique her curiosity.
          </div>
          <div className="md:col-span-3 col-span-12 flex items-center justify-center">
          <Image
                      alt=""
                      src="/staffs/casual/img-2.jpg"
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

export default thirdbio;