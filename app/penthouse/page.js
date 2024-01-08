"use client"
import React, { useState } from 'react';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww"
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww"
  },
  {
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];



const Slider = () => {
  const [ currentIndex, setCurrentIndex] = useState(0)

  const prevSlide =() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  };
  

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  return (
    <div className="max-w-[1400px] h-[480px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
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



const GalleryModal = ( { isVisible, onClose }) => {

    const handleClose = (e) => {
        if ( e.target.id === 'wrapper') onClose()
    }
    if ( !isVisible ) return null;
  return (
    <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flex-col md:mx-0 mx-5'>
        <button className='text-white text-2xl absolute m-3 z-50 bg-[#A18830] rounded-lg p-3 place-self-end' onClick={() => onClose()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


        </button>
        <div className='bg-white p-2 rounded'>
           <Slider/>
        </div>
      </div>
    </div>
  );
}


const Penthouse = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <main className="h-full mt-20 mb-10 font-raleway">
      <div className="w-full">
        <div className="max-w-[1100px] mx-auto w-full md:px-0 px-10">
          {/* ---banner image ---- */}
          <div className='banner-container' onClick={() => setShowModal(true)}>
            <div
              className="h-[500px] w-full banner-image"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
              }}
            />
            <div className='middle-item'>
              <div className="text-item">View Gallery</div>
            </div>
          </div>

          {/* ---banner title--- */}
          <h1 className="text-5xl font-bold py-5">Penthouse</h1>
          <p className="text-xl font-[500]">Allow us to introduce our penthouse, indisputably providing unrivaled vistas. This opulent residence features a capacious living area, a panoramic 360-degree balcony view, a private suspended pool equipped with motion sensors and automated pool cover, an outdoor gym, private elevator access, and ample parking space for up to five cars. Within this luxurious unit, you will discover 3 en-suite bedrooms, each with walk-in closets, a fully equipped kitchen boasting an island and pantry, and an accompanying maids room.</p>

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

      <GalleryModal isVisible={showModal} onClose={()=> setShowModal(false) } />
    </main>
  );
}

export default Penthouse;
