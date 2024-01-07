import React from "react";
import Image from "next/image";

const firstbio = () => {
  return (
    <div className="flex mt-10 flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
      <div>
        <h1 className="font-bold text-3xl">MAXWELL OKPERI</h1>
        <hr className="my-5 border-black" />
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-9 col-span-12">
            Maxwell is a multi-disciplinary engineer with a strong background in
            renewable energy systems, holding a Bachelor&apos;s degree in
            Mechanical Engineering and a Master&apos;s in Environmental and
            Energy Engineering from the University of Sheffield. Over the past
            decade, he has played diverse roles in global development, focusing
            on Nigeria. Maxwell has actively participated in the development of
            sustainable energy solutions for SME clusters in various
            communities. He has comprehensive knowledge of current research and
            trends in renewable energy and sustainable development. His vast
            knowledge in the field has earned him recognition and invites to
            numerous inter-governmental conferences on renewable energy in
            Nigeria like “ Scaling up Renewable Energy Program (SREP)” Countries
            Roundtable (4th - 8th Dec, 2017). Maxwell&apos;s career journey has
            taken him through various renewable energy companies in the UK and
            Nigeria. Alongside his partners, he co-founded ICE Solar Commercial
            Power, where he served as the Chief Operating Officer (COO). Under
            his leadership, ICE Solar implemented distributed solar microgrids
            in SME clusters, providing alternative power solutions to businesses
            across the Niger Delta region. ICE has maintained a growing solar
            portfolio, with an installed capacity exceeding 250KW in the region,
            with plans to reach 5MW by the end of 2023. More recently, Maxwell
            served as the Managing Director/Chief Executive Officer of Lucky
            Lumac Nig Ltd, an engineering and construction company. During his
            tenure, he oversaw the company&apos;s crucial appointment as the
            principal local implementation partner for the A29 Super Tucano
            project in Nigeria. This $38 million project involved designing and
            constructing a state-of-the-art aircraft hangar, runway
            construction, logistics support, and more. As CEO, he successfully
            delivered multiple construction and engineering projects across
            Nigeria. Presently, he is the Chief Executive officer of Primestix
            Construction Limited where he has the singular goal of disrupting
            the real estate space by intelligently and seamlessly integrating
            audacious architecture with cutting-edge technology because he
            believes in creating innovative and sustainable living spaces. His
            background in renewable energy systems and global development has
            equipped him with the knowledge and expertise to revolutionize the
            traditional real estate approach. Maxwell envisions a future where
            homes are not just structures but intelligent, energy efficient
            spaces that enhance the quality of life for residents. He is also a
            member of the Nigeria Society of Engineers (NSE), and the Renewable
            Energy Association of Nigeria (REAN) amongst other professional
            bodies. He is happily married and is an avid car racing enthusiast.
          </div>
          <div className="md:col-span-3 col-span-12 flex items-center justify-center">
            <Image
              alt=""
              src="/staffs/casual/img-7.jpg"
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

export default firstbio;
