import React from "react";
import Image from "next/image";

const secondbio = () => {
  return (
    <div className="flex mt-10 flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
      <div>
        <h1 className="font-bold text-3xl">HANIM WINDIBIZI</h1>
        <hr className="my-5 border-black" />
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-9 col-span-12">
            Hanim Windibiziri is a dynamic and accomplished professional with
            over 20 years of extensive experience in the insurance industry,
            both in the United States and Nigeria. He has a proven track record
            of generating and building relationships, managing projects from
            concept to completion, and delivering innovative solutions. As the
            Executive Director and co-founder of Primestix Construction Ltd., He
            leads a dynamic team dedicated to developing smart home innovations
            in the real estate sector. His background in risk management and
            project management puts him squarely in the saddle to lead the team
            of <blockquote>disruptors</blockquote>. Notably, Hanim is a director
            at CADG Nig. Ltd, where he partnered with the Presidential Committee
            on the North-East Initiative to execute construction projects in
            Borno and Niger State Nigeria. He holds a major in Economics from
            St. Olaf College, Northfield, MN, and has demonstrated excellence in
            various capacities, including serving on the Student Senate and
            representing the Multicultural Student Organization. He started his
            career in the Minneapolis, Minnesota, and Boston, Massachusetts,
            offices of International Netherland Group (ING), gaining extensive
            experience in risk management and project management. In previous
            roles with Leadway Assurance Company Ltd, He showcased his expertise
            in relationship management, growing insurance portfolios, and
            providing solutions to the insurance needs of individuals. His
            achievements include managing a classified book of business and
            leveraging relationships within government and the private sector to
            acquire new business. Hanim&apos;s passion for excellence led him to
            co-found Primestix Construction Ltd. He and his partner have
            meticulously curated a team dedicated to excellence and committed to
            bringing cutting-edge technology and timeless designs to the real
            estate space. His adeptness in managing diverse teams and
            negotiating complex deals solidifies Primestix&apos;s position as a
            leader in the industry. Currently pursuing exams with the Chartered
            Insurance Institute of Nigeria (CIIN), Hanim continues to strive for
            excellence in the insurance industry and in everything that he does.
            Outside of his professional endeavors, Hanim is happily married and
            when he&apos;s not spending time with his family, you&apos;ll find
            him cooking, reading nonfiction books, playing chess, and traveling
            the world.
          </div>
          <div className="md:col-span-3 col-span-12 flex items-center justify-center">
            <Image
              alt=""
              src="/staffs/casual/img-1.jpg"
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

export default secondbio;
