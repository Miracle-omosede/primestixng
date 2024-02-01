"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FirstModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = () => {
    if (e.traget.id === "wrapper") onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className="md:w-[800px] w-[256px] relative flex justify-center items-center">
        <button
          className="text-white text-2xl top-[8%] absolute right-0 m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
          onClick={() => onClose()}
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-white">
          <div className="grid grid-cols-12">
            <div className="md:col-span-4 col-span-12">
              <Image
                alt=""
                src="/staffs/casual/img-7.jpg"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="md:col-span-8 col-span-12 pt-10 px-5 pb-5">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="font-bold">Maxwell Okperi</span>
                  <span className="text-xs italic">
                    Chief Executive Officer/Founding Partner
                  </span>
                </div>
              </div>
              <hr className="border-2 border-[#A18830] my-4" />
              <p className="md:h-[300px] h-[150px] overflow-y-scroll scroller pr-3">
                Maxwell is a multi-disciplinary engineer with a strong
                background in renewable energy systems, holding a
                Bachelor&apos;s degree in Mechanical Engineering and a
                Master&apos;s in Environmental and Energy Engineering from the
                University of Sheffield. Over the past decade, he has played
                diverse roles in global development, focusing on Nigeria.
                Maxwell has actively participated in the development of
                sustainable energy solutions for SME clusters in various
                communities.<br/> He has comprehensive knowledge of current research
                and trends in renewable energy and sustainable development. His
                vast knowledge in the field has earned him recognition and
                invites to numerous inter-governmental conferences on renewable
                energy in Nigeria like “ Scaling up Renewable Energy Program
                (SREP)” Countries Roundtable (4th - 8th Dec, 2017).<br/>
                Maxwell&apos;s career journey has taken him through various
                renewable energy companies in the UK and Nigeria. Alongside his
                partners, he co-founded ICE Solar Commercial Power, where he
                served as the Chief Operating Officer (COO). Under his
                leadership, ICE Solar implemented distributed solar microgrids
                in SME clusters, providing alternative power solutions to
                businesses across the Niger Delta region. ICE has maintained a
                growing solar portfolio, with an installed capacity exceeding
                250KW in the region, with plans to reach 5MW by the end of 2023.<br/>
                More recently, Maxwell served as the Managing Director/Chief
                Executive Officer of Lucky Lumac Nig Ltd, an engineering and
                construction company. During his tenure, he oversaw the
                company&apos;s crucial appointment as the principal local
                implementation partner for the A29 Super Tucano project in
                Nigeria. This $38 million project involved designing and
                constructing a state-of-the-art aircraft hangar, runway
                construction, logistics support, and more. As CEO, he
                successfully delivered multiple construction and engineering
                projects across Nigeria. <br/>Presently, he is the Chief Executive
                officer of Primestix Construction Limited where he has the
                singular goal of disrupting the real estate space by
                intelligently and seamlessly integrating audacious architecture
                with cutting-edge technology because he believes in creating
                innovative and sustainable living spaces. His background in
                renewable energy systems and global development has equipped him
                with the knowledge and expertise to revolutionize the
                traditional real estate approach. Maxwell envisions a future
                where homes are not just structures but intelligent, energy
                efficient spaces that enhance the quality of life for residents.<br/>
                He is also a member of the Nigeria Society of Engineers (NSE),
                and the Renewable Energy Association of Nigeria (REAN) amongst
                other professional bodies. <br/>He is happily married and is an avid
                car racing enthusiast
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondModal = ({ isShowing, onClose }) => {
  if (!isShowing) return null;

  const handleClose = () => {
    if (e.traget.id === "content") onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className="md:w-[800px] w-[256px] relative flex justify-center items-center">
        <button
          className="text-white text-2xl top-[8%] absolute right-0 m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
          onClick={() => onClose()}
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-white">
          <div className="grid grid-cols-12">
            <div className="md:col-span-4 col-span-12">
              <Image
                alt=""
                src="/staffs/casual/img-1.jpg"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="md:col-span-8 col-span-12 pt-10 px-5 pb-5">
              <div className="flex flex-col">
                <div className="flex flex-col">
                <span className="font-bold">Hanim Windibiziri</span>
                        <span className="text-xs italic">
                          Executive Director / Founding Partner
                        </span>
                </div>
              </div>
              <hr className="border-2 border-[#A18830] my-4" />
              <p className="md:h-[300px] h-[150px] overflow-y-scroll scroller pr-3">
              Hanim Windibiziri is a dynamic and accomplished professional with over 20 years of extensive experience in the
insurance industry, both in the United States and Nigeria. He has a proven track record of generating and building
relationships, managing projects from concept to completion, and delivering innovative solutions. As the Executive
Director and co-founder of Primestix Construction Ltd., He leads a dynamic team dedicated to developing smart home
innovations in the real estate sector. His background in risk management and project management puts him squarely
in the saddle to lead the team of disruptors. Notably, Hanim is a director at CADG Nig. Ltd, where he partnered
with the Presidential Committee on the North-East Initiative to execute construction projects in Borno and Niger
State Nigeria.<br/>
He holds a major in Economics from St. Olaf College, Northfield, MN, and has demonstrated excellence in various
capacities, including serving on the Student Senate and representing the Multicultural Student Organization.<br/>
He started his career in the Minneapolis, Minnesota, and Boston, Massachusetts, offices of International Netherland
Group (ING), gaining extensive experience in risk management and project management.<br/>
In previous roles with Leadway Assurance Company Ltd, He showcased his expertise in relationship management,
growing insurance portfolios, and providing solutions to the insurance needs of individuals. His achievements include
managing a classified book of business and leveraging relationships within government and the private sector to acquire
new business.<br/>
Hanim&apos;s passion for excellence led him to co-found Primestix Construction Ltd. He and his partner have meticulously
curated a team dedicated to excellence and committed to bringing cutting-edge technology and timeless designs to the
real estate space. His adeptness in managing diverse teams and negotiating complex deals solidifies Primestix&apos;s position
as a leader in the industry.<br/>
Currently pursuing exams with the Chartered Insurance Institute of Nigeria (CIIN), Hanim continues to strive for
excellence in the insurance industry and in everything that he does.<br/>
Outside of his professional endeavors, Hanim is happily married and when he&apos;s not spending time with his family,
you&apos;ll find him cooking, reading nonfiction books, playing chess, and traveling the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ThirdModal = ({ isDisplaying, onClose }) => {
  if (!isDisplaying) return null;

  const handleClose = () => {
    if (e.traget.id === "wrap") onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className="md:w-[800px] w-[256px] relative flex justify-center items-center">
        <button
          className="text-white text-2xl top-[8%] absolute right-0 m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
          onClick={() => onClose()}
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-white">
          <div className="grid grid-cols-12">
            <div className="md:col-span-4 col-span-12">
              <Image
                alt=""
                src="/staffs/casual/img-2.jpg"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="md:col-span-8 col-span-12 pt-10 px-5 pb-5">
              <div className="flex flex-col">
                <div className="flex flex-col">
                <span className="font-bold">Ngozi Akubueze</span>
                        <span className="text-xs italic">
                          Head, People Operations & Administration
                        </span>
                </div>
              </div>
              <hr className="border-2 border-[#A18830] my-4" />
              <p className="md:h-[300px] h-[150px] overflow-y-scroll scroller pr-3">
              Ngozi, a graduate of Psychology from the renowned Nnamdi Azikiwe University, is a Human Resources professional
certified by the prestigious Human Resources Certification Institute in the USA. Armed with over half a decade of
professional experience, she has honed her skills as a versatile generalist across a diverse array of industries, including
Real Estate, Media and advertising, IT, and FMCG.<br/>
Her professional prowess spans a wide spectrum, encompassing Talent Acquisition and Retention, Workforce Planning,
Policy Creation and Implementation, Stakeholder Management, Advisory Services, Training and Development,
Employee Engagement, Culture Design, Counseling, Employer Branding, and Benefits Administration.
In a remarkable chapter of her career, Ngozi took the reins of the Human Resources and Compliance department in a
multinational corporation with branches stretching across major cities in Nigeria, the UK, the USA, and the UAE. In
this role, she managed a dynamic team of over 120 employees and orchestrated a significant financial ascent, driving
revenue from N700 million to a remarkable N2 billion within a single year.<br/>
Prior to her tenure at Primestix Construction, Ngozi held the pivotal role of People and operations Lead at Nigeria&apos;s
pioneering mental health tech company. Leading a dynamic team of both technical and non-technical professionals to
deliver accessible and affordable psychotherapeutic services to Africans worldwide.<br/>
Ngozi holds a pivotal role at Primestix Construction as the Head of People Operations and administration. In this
capacity, she spearheads a multitude of crucial functions that encompass the entire spectrum of the employee journey,
from onboarding to offboarding. Her expert guidance ensures the seamless and efficient operation of the organization
as this plays a key role in driving Primestix Construction toward its vision of excellence and growth.<br/>
She is a strong advocate of the belief that people are an organization&apos;s most asset. Her work revolves around harnessing
the innate potential within individuals to enhance productivity, all while ensuring job satisfaction. Her career
aspiration? To become Nigeria&apos;s and, ultimately, Africa&apos;s foremost performance coach.<br/>
When not engrossed in her professional pursuits, Ngozi&apos;s diverse interests come to the fore. You may find her
immersed in the pages of a compelling book, tuning in to music, solving intricate puzzles, crafting culinary delights in
her kitchen, or deep amid an extensive research quest on subjects that pique her curiosity.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const FourthModal = ({ isSeen, onClose }) => {
  if (!isSeen) return null;

  const handleClose = () => {
    if (e.traget.id === "closein") onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
    <div className="md:w-[800px] w-[256px] relative flex justify-center items-center">
      <button
        className="text-white text-2xl top-[8%] absolute right-0 m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
        onClick={() => onClose()}
      >
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="bg-white">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12">
            <Image
              alt=""
              src="/staffs/casual/img-15.jpg"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:col-span-8 col-span-12 pt-10 px-5 pb-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
              <span className="font-bold">Omolanke Temitayo Oni</span>
                      <span className="text-xs italic">
                        Head of Legal and Regulatory Compliance{" "}
                      </span>
              </div>
            </div>
            <hr className="border-2 border-[#A18830] my-4" />
            <p className="md:h-[300px] h-[150px] overflow-y-scroll scroller pr-3">
            As the Head of Legal and Regulatory Compliance at Primestix Construction Limited, Omolanke Temitayo Oni brings
over a decade of legal expertise and strategic leadership to the forefront of our organization. Holding a Bachelor of Law
degree from Olabisi Onabanjo University and a Barrister at Law (BL) qualification from the Nigerian Law School,
Omolanke has established herself as a top-performing professional in the corporate and commercial legal landscape.<br/>
She leads with distinction, ensuring strict adherence to regulatory requirements and corporate governance principles.
Specializing in real estate transactions, she excels in drafting legal documents and negotiating contractual Agreements,
conducting due diligence, and facilitating Joint Venture Agreements (JVA). Her expertise in risk management, contract
administration, and corporate governance significantly contributes to our success at Primestix.<br/>
Omolanke&apos;s professional journey is characterized by her seamless integration of legal acumen with a deep understanding
of regulatory compliance and her impact is evident in her achievements.<br/>
Prior to joining Primestix, she served in key roles at leading companies, where she successfully led internal
restructuring initiatives, managed legal teams for mergers and acquisitions, saved the company penalty costs, and
significantly reduced internal and external fraud incidents, showcasing her commitment to risk management.<br/>
She is a dedicated student member of the Institute of Chartered Secretaries and Administrators (ICSAN) and The
Compliance Institute of Nigeria (CIN). Her keen interest in human capital development reflects her commitment to
advancing individuals and organizations. She is passionate about harnessing the potential of effective development and
skills enhancement in employees, fostering talent, and contributing to growth in today&apos;s dynamic world.<br/>
When she&apos;s not engaged in her legal duties, she is often the heart and soul of lively celebrations (owanbe), where she
effortlessly adds a disruptive element of excitement to every event she attends.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
const FifthModal = ({ isSaw, onClose }) => {
  if (!isSaw) return null;

  const handleClose = () => {
    if (e.traget.id === "visited") onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
    <div className="md:w-[800px] w-[256px] relative flex justify-center items-center">
      <button
        className="text-white text-2xl top-[8%] absolute right-0 m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
        onClick={() => onClose()}
      >
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="bg-white">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12">
            <Image
              alt=""
              src="/staffs/casual/img-9.jpg"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:col-span-8 col-span-12 pt-10 px-5 pb-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
              <span className="font-bold">Odey Lilian Chinwe</span>
                      <span className="text-xs italic">Head of Finance</span>
              </div>
            </div>
            <hr className="border-2 border-[#A18830] my-4" />
            <p className="md:h-[300px] h-[150px] overflow-y-scroll scroller pr-3">
            Lilian is a graduate of Accountancy from the prestigious university of Abia State, Uturu, Abia State. Driven by a passion for
precision and a commitment to financial excellence, Odey Lilian Chinwe is a highly motivated and results-driven Finance/Account
Officer with a proven track record. Combining trustworthiness, reliability, meticulousness, and numeracy, Lilian possesses a
profound understanding of the intricacies of financial management.<br/>
Prior to joining Primestix, Lilian&apos;s teaching of ACCA Advanced Audit and Assurance resulted in a 100% pass rate over five
sessions and her role as a team lead on various accounting projects consistently delivered accurate results within tight deadlines. She
was also recognized as a trusted and skilled point of contact for internal cash management inquiries.<br/>
She is also a member of the Association of Chartered Certified Accountants (ACCA), Associate Member, Nigerian Institute of
Management (ANIM)  and various training programs including Professional Skill Module (ACCA), Resource Mobilization,
PMTCT, and Data Management.<br/>
When she’s not busy acting as the central Bank of Primestixng, Lilian enjoys sharing ideas, reading, and traveling.<br/>
Her comprehensive expertise, coupled with her unwavering commitment to financial excellence, makes her an invaluable asset at
Primestix. Her contributions are instrumental in maintaining the financial integrity of Primestix, ensuring transparency, and
supporting strategic decision-making through accurate financial insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
const SixthModal = ({ isThis, onClose }) => {
  if (!isThis) return null;

  const handleClose = () => {
    if (e.traget.id === "this") onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
    <div className="md:w-[800px] w-[256px] relative flex justify-center items-center">
      <button
        className="text-white text-2xl top-[8%] absolute right-0 m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
        onClick={() => onClose()}
      >
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="bg-white">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12">
            <Image
              alt=""
              src="/staffs/casual/img-11.jpg"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:col-span-8 col-span-12 pt-10 px-5 pb-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
              <span className="font-bold">Grace Ichaba</span>
                        <span className="text-xs italic">
                          Head Engineering/Construction
                        </span>
              </div>
            </div>
            <hr className="border-2 border-[#A18830] my-4" />
            <p className="md:h-[300px] h-[150px] overflow-y-scroll scroller pr-3">
            Grace Ichaba is a chartered and registered Quantity Surveyor with an illustrious career spanning over twelve years. As the Head of
Engineering at Primestix Construction Limited, she brings a wealth of experience and dynamism to Primestix. Her responsibilities
encompass various facets of quantity surveying and project management, estimating, cost planning, evaluation, monitoring, and
control is a cornerstone of Primestix&apos;s commitment to delivering innovative and high-quality real estate projects.<br/>
Prior to her role at Primestix, Grace has successfully overseen and executed a multitude of construction projects, including academic
complexes, multipurpose halls, and departmental buildings in various educational institutions, civil engineering projects, including
road networks within estates, showcasing her versatility in handling diverse aspects of real estate development.<br/>
Grace is a professional member of the Nigerian Institute of Quantity Surveyors (MNIQS) and fully registered with the Quantity
Surveyors Registration Board of Nigeria (QSRBN), underlining her commitment to the highest standards of professional practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
const SeventhModal = ({ isOn, onClose }) => {
  if (!isOn) return null;

  const handleClose = () => {
    if (e.traget.id === "currently") onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
    <div className="md:w-[800px] w-[256px] relative flex justify-center items-center">
      <button
        className="text-white text-2xl top-[8%] absolute right-0 m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
        onClick={() => onClose()}
      >
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="bg-white">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12">
            <Image
              alt=""
              src="/consultant2.jpg"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:col-span-8 col-span-12 pt-10 px-5 pb-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
              <span className="font-bold">Fredericks Emmanuel Paul</span>
              </div>
            </div>
            <hr className="border-2 border-[#A18830] my-4" />
            <p className="md:h-[300px] h-[150px] overflow-y-scroll scroller pr-3">
            Fredericks Emmanuel Paul is a dedicated Electrical Engineer with a wealth of experience and a proven track record in managing intricate electrical projects. His journey is marked by academic brilliance, a passion for innovation, and a commitment to excellence.<br/>

His thirst for knowledge led him to successfully obtain a Diploma in Electrical/Electronics Engineering at Federal Polytechnic Nasarawa, and later achieved a B.Eng. in Electrical Engineering from Ahmadu Bello University, Zaria.<br/>

Fredericks has etched his mark in various roles, beginning his career in 2008. His prowess as an Electrical Engineer is exempliﬁed through his tenure at several reputable ﬁrms. Noteworthy experiences include his role at Raymond Black Construction Limited on various projects such as the Nile University Academy building, the Nile University Student Centre complex, and then the female hostel also at Nile University. At Brazodave Concept Limited, he orchestrated the renovation of a six-storey office complex at missisipi street, Maitama, and the renovation of the NEMA office at NEMA reconstruction site in Maitama. Other projects include External Electrical Services design and installation for residential Apartment development (32 units) at Katampe Extention Abuja. Equipotential/Earthing bonding system for brookstone international schools, Mabushi and Renovation and Automation of a 5-bedroom semi-detached duplex in Wuye, Abuja.<br/>

Fredericks, as a Consultant at Arctuals Concepts Limited, Qualitrends residential development and U-Built Construction Limited, spearheaded critical projects. Notable among them are the Electrical design and installation of 500kva, 11/0.415kv substation, 200kva, 11/0.415kv substation, street lighting and 11kv overhead lines and the design and installation of electrical services in the developments of residential units at Life Camp, Dawaki District, Guzape, Wuye District and several other locations.<br/>

His job experiences are a testament to his diverse skill set. From the electrical design and installation of a 700kva generator and 1,250A Changeover panel to the whole-house automation with cutting- edge technologies, Fredericks has proven himself adept in supervising comprehensive renovation works.<br/>

As an Electrical Engineer at Excel Estate in Dutse District, Apo, Fredericks exhibited exceptional leadership. He played a pivotal role in the infrastructural project, overseeing the installation of a 33/0.415kv substation, street lighting, and plot supply. His role involved meticulous planning, surveying, quality control, and ensuring strict adherence to safety standards.<br/>

Beyond his professional endeavors, Fredericks is ﬂuent in English, Okpella and Hausa.<br/>

Fredericks Emmanuel Paul&apos;s journey in electrical engineering is characterized by a commitment to excellence, a diverse skill set, and a passion for innovation. His impactful projects and leadership in the ﬁeld make him a standout professional in the realm of electrical engineering.

            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
const EightModal = ({ isViewed, onClose }) => {
  if (!isViewed) return null;

  const handleClose = () => {
    if (e.traget.id === "itis") onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
    <div className="md:w-[800px] w-[256px] relative flex justify-center items-center">
      <button
        className="text-white text-2xl top-[8%] absolute right-0 m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
        onClick={() => onClose()}
      >
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="bg-white">
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 col-span-12">
            <Image
              alt=""
              src="/consultant1.jpg"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:col-span-8 col-span-12 pt-10 px-5 pb-5">
            <div className="flex flex-col">
              <div className="flex flex-col">
              <span className="font-bold">Chuka Odigbo</span>
              </div>
            </div>
            <hr className="border-2 border-[#A18830] my-4" />
            <p className="md:h-[300px] h-[150px] overflow-y-scroll scroller pr-3">
            Chuka Odigbo is a distinguished engineer and consultant renowned for his exceptional contributions to the field of civil engineering. As a seasoned professional he has left an indelible mark on various projects, showcasing a remarkable blend of technical expertise and visionary leadership. <br/>

His pursuit of excellence led him to the University of Nigeria Nsukka, earning a bachelor&apos;s degree in civil engineering with Honors. He solidified his commitment to the profession by becoming a corporate Member of the Nigerian Society of Engineers (NSE) and a registered engineer with COREN.
<br/>
Chuka&apos;s career commenced in 1982 during his National Youth Service Corps (NYSC) as a structural engineer and site supervisor with FROBAG (NIG) LTD. Over the years he has undertaken pivotal roles, including his tenure at Prime Engineering Construction Coy. Ltd. In Kano and Donnapolz (Nig) Ltd in Enugu, where he contributed to major projects such as the IBB Airport Link Road.<br/>

His leadership extended to Gloris Konsult in Kano and Trustcon (Nig) Ltd in Kaduna, where he orchestrated the design and construction of significant structures, leaving an enduring legacy. As a principal partner at Complete Engineering in Kano, Chuka undertook the design of  high rise and medium rise buildings, showcasing his prowess in structural engineering. <br/>


In 1999, Chuka established Shelterworks Engineering Limited, where he continues to spearhead groundbreaking projects. From the construction of the wonderland recreation park in Abuja to the design and supervision of flood/erosion control measures in Imo state, his impact is widespread and transformative. Chuka&apos;s portfolio extends beyond civil engineering. His mastery of computer aided design is complemented by a keen interest in football and reading. This multifaceted individual is not only a stalwart in his professional domain but also a well-rounded personality. <br/>

Currently involved in projects like the construction of Gwarinpa District Hospital and Doveland Schools in Abuja, Chuka Odigbo remains at the forefront of innovation and excellence. His dedication is evident in the ongoing Admin Block for the National Power Training Institute of Nigeria (NAPTIN) and the Maison Terranova Project at Primestix Construction. <br/>



            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [showsecondModal, setShowsecondModal] = useState(false);
  const [showthirdModal, setShowthirdModal] = useState(false);
  const [showfourthModal, setShowfourthModal] = useState(false);
  const [showfifthModal, setShowfifthModal] = useState(false);
  const [showsixthModal, setShowsixthModal] = useState(false);
  const [showseventhModal, setShowseventhModal] = useState(false);
  const [showeightModal, setShoweightModal] = useState(false);
  return (
    <div className="font-raleway">
      <div className="bg-black mt-20">
        <div className="flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">Meet Our Team</h1>
            <p className="capitalize text-lg text-gray-400 md:text-xl">
              Meet the diverse talents and expertise that form the heart of our
              team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mt-20 mx-auto w-full flex gap-7 mb-10 flex-col items-center justify-center">
        {/*----Heading-----*/}
        <div className="font-raleway">
          <h1 className="font-bold md:text-4xl text-2xl">Management Team</h1>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div
              className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group"
              onClick={() => setShowModal(true)}
            >
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/ceo.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Maxwell Okperi</span>
                      <span className="text-xs italic">
                        Chief Executive Officer/Founding Partner
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-7.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col items-center justify-center bg-white text-[#A18830]">
                        <span>View Bio</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group"  onClick={() => setShowsecondModal(true)}>
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                  <div className="absolute border-2 w-full h-full">
                    <Image
                      alt=""
                      src="/staffs/director.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="w-full flex items-center justify-center">
                      <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Hanim Windibiziri</span>
                        <span className="text-xs italic">
                          Executive Director / Founding Partner
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                    <div className="text-center flex flex-col items-center justify-center h-full">
                      <Image
                        alt=""
                        src="/staffs/casual/img-1.jpg"
                        width={500}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                        <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col items-center justify-center bg-white text-[#A18830]">
                        <span>View Bio</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group" onClick={() => setShowsixthModal(true)}>
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                  <div className="absolute border-2 w-full h-full">
                    <Image
                      alt=""
                      src="/staffs/grace.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="w-full flex items-center justify-center">
                      <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Grace Ichaba</span>
                        <span className="text-xs italic">
                          Head Engineering/Construction
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                    <div className="text-center flex flex-col items-center justify-center h-full">
                      <Image
                        alt=""
                        src="/staffs/casual/img-11.jpg"
                        width={500}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                        <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                          <span> View Bio
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
        <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group"  onClick={() => setShowthirdModal(true)}>
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                  <div className="absolute border-2 w-full h-full">
                    <Image
                      alt=""
                      src="/staffs/IMG--13.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="w-full flex items-center justify-center">
                      <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Ngozi Akubueze</span>
                        <span className="text-xs italic">
                          Head, People Operations & Administration
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                    <div className="text-center flex flex-col items-center justify-center h-full">
                      <Image
                        alt=""
                        src="/staffs/casual/img-2.jpg"
                        width={500}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                        <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col items-center justify-center bg-white text-[#A18830]">
                          <span>View Bio</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group"  onClick={() => setShowfourthModal(true)}>
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--2.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Omolanke Temitayo oni</span>
                      <span className="text-xs italic">
                        Head of Legal and Regulatory Compliance{" "}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-15.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col items-center justify-center bg-white text-[#A18830]">
                        <span> View Bio
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group"  onClick={() => setShowfifthModal(true)}>
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--9.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Odey Lilian Chinwe</span>
                      <span className="text-xs italic">Head of Finance</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-9.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col items-center justify-center bg-white text-[#A18830]">
                       <span>View Bio</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="font-raleway">
          <h1 className="font-bold md:text-4xl text-2xl">The Disruptors</h1>
        </div>

        <div className="grid grid-cols-12 gap-3">
        <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/zara.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                    <span>Fatima Aliyu</span>
                        <span className="text-xs italic">Sales Executive</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/zara.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Fatima Aliyu</span>
                        <span className="text-xs italic">Sales Executive</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--7.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Raphael Edet Okon</span>
                      <span className="text-xs italic">
                          Health and Safety Officer 
                        </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-16.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Raphael Edet Okon</span>
                        <span className="text-xs italic">
                          Health and Safety Officer 
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/frontdesk.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Jane Francis Odinka</span>
                      <span className="text-xs italic">Front Desk Officer</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-3.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Jane Francis Odinka</span>
                        <span className="text-xs italic">
                          Front Desk Officer
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
        
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--10.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Theresa Queen Maza</span>
                      <span className="text-xs italic">Office Assistant</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-12.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Theresa Queen Maza</span>
                        <span className="text-xs italic">Office Assistant</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--8.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Manny Bosei</span>
                      <span className="text-xs italic">
                        Brand & Comms Manager
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-8.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Manny Bosei</span>
                        <span className="text-xs italic">
                          Brand & Comms Manager
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--12.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Ngozi vera ogbogu</span>
                      <span className="text-xs italic">
                        Procurement Assistant
                      </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-4.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Ngozi vera ogbogu</span>
                        <span className="text-xs italic">
                          Procurement Assistant
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/angel.png"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Angelfortune Ogbeta</span>
                      <span className="text-xs italic">content writer</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-5.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Angelfortune Ogbeta</span>
                        <span className="text-xs italic">content writer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IMG--5.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                    <span>Gideon Olaleye</span>
                    <span className="text-xs italic">
                    Architect 

                        </span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/img-10.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Gideon Olaleye</span>
                        <span className="text-xs italic">
                        Architect 

                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/bibs.png"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Bibobra Osubu</span>
                      <span className="text-xs italic">Secretary to the CEO/ED</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/bibs.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Bibobra Osubu</span>
                      <span className="text-xs italic">Secretary to the CEO/ED</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-12 gap-3">
        <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/KehindeAwoniyi2.png"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                    <span>Kehinde Awoniyi</span>
                        <span className="text-xs italic">Surveyor</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/KehindeAwoniyi.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Kehinde Awoniyi</span>
                        <span className="text-xs italic">Surveyor</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/salamatu.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                    <span>Salamatu Solomon</span>
                        <span className="text-xs italic">Senior Sales Executive</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/salamatu.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>Salamatu Solomon</span>
                        <span className="text-xs italic">Senior Sales Executive</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/IsaTayyib.png"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                    <span>Isa Tayyib</span>
                        <span className="text-xs italic">Civil Engineer</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/IsaTayyib.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Isa Tayyib</span>
                        <span className="text-xs italic">Civil Engineer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
        <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/franci.png"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                    <span>Francisca Asuquo</span>
                        <span className="text-xs italic">Project Manager</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/franci.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Francisca Asuquo</span>
                        <span className="text-xs italic">Project Manager</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/staffs/AnthonyOkosun.png"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                    <span>Anthony Okosun</span>
                        <span className="text-xs italic">Site Engineer-Foreman</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/AnthonyOkosun.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Anthony Okosun</span>
                        <span className="text-xs italic">Site Engineer-Foreman</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

        </div>

        <div className="font-raleway">
          <h1 className="font-bold md:text-4xl text-2xl">The Consultants</h1>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group" onClick={() => setShowseventhModal(true)}>
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/consultant2.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                    <span>Fredericks Emmanuel Paul</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/staffs/casual/consultant3.png"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>View Bio</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-0"></div>
          <div className="md:col-span-4 col-span-12">
            {" "}
            <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group"  onClick={() => setShoweightModal(true)}>
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
                <div className="absolute border-2 w-full h-full">
                  <Image
                    alt=""
                    src="/consultant1.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="w-full flex items-center justify-center">
                    <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                      <span>Chuka Odigbo</span>
                    </button>
                  </div>
                </div>
                <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <Image
                      alt=""
                      src="/consultant1.jpg"
                      width={500}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                      <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[0px] items-center justify-center bg-white text-[#A18830]">
                        <span>View Bio</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <FirstModal isVisible={showModal} onClose={() => setShowModal(false)} />
      <SecondModal isShowing={showsecondModal} 
      onClose={() => setShowsecondModal(false)} />
      <ThirdModal isDisplaying={showthirdModal} 
      onClose={() => setShowthirdModal(false)} />
      <FourthModal isSeen={showfourthModal} 
      onClose={() => setShowfourthModal(false)} />
      <FifthModal isSaw={showfifthModal} 
      onClose={() => setShowfifthModal(false)} />
      <SixthModal isThis={showsixthModal} 
      onClose={() => setShowsixthModal(false)} />
      <SeventhModal isOn={showseventhModal} 
      onClose={() => setShowseventhModal(false)} />
      <EightModal isViewed={showeightModal} 
      onClose={() => setShoweightModal(false)} />
    </div>
  );
};

export default Page;
