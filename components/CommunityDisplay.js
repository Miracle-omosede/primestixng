"use client";
import React, { useState } from "react";

const Slider = ({ gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gallery.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === gallery.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="max-w-[1400px] h-[480px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${gallery[currentIndex]?.imageUrl?.asset?.url})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* left arrows */}
      <div className=" group-hover:block absolute bottom-[10%] left-5 translate-y-[-50%] -translate-x-0 p-2 bg-[#A18830]  text-white cursor-pointer  rounded-lg">
        <svg
          onClick={prevSlide}
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
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      {/* right arrows */}
      <div className=" group-hover:block absolute bottom-[10%]  left-20 translate-y-[-50%] -translate-x-0 p-2 bg-[#A18830] text-white cursor-pointer rounded-lg ">
        <svg
          onClick={nextSlide}
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
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

const GalleryModal = ({ isVisible, onClose, gallery }) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  if (!isVisible) return null;
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col md:mx-0 mx-5">
        <button
          className="text-white text-2xl absolute m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end"
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
        <div className="bg-white p-2 rounded">
          {gallery?.length > 0 && <Slider gallery={gallery} />}
        </div>
      </div>
    </div>
  );
};

const Penthouse = ({ communityData }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(communityData);
  return (
    <main className="h-full mt-20 mb-10 font-raleway">
      <div className="w-full">
        <div className="max-w-[1100px] mx-auto w-full md:px-0 px-10">
          {/* ---banner image ---- */}
          <div className="banner-container" onClick={() => setShowModal(true)}>
            <div
              className="h-[500px] w-full banner-image"
              style={{
                backgroundImage: `url(${communityData?.image?.asset?.url})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="middle-item">
              <div className="text-item">View Gallery</div>
            </div>
          </div>

          {/* ---banner title--- */}
          <h1 className="text-5xl font-bold py-5">{communityData?.name}</h1>
          <p className="text-xl font-[500]">{communityData?.description}</p>

          {/* this button takes them to the form */}
          <a
            href="#form"
            className="bg-[#A18830] text-white py-3 px-10 my-5 uppercase font-semibold inline-block"
          >
            Request a callback
          </a>

          {/* full long description */}
        </div>
      </div>

      <GalleryModal
        gallery={communityData?.gallery}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </main>
  );
};

export default Penthouse;
