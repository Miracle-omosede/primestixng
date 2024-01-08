"use client"
import React, { useState } from 'react';

const GalleryModal = ( { isVisible, onClose }) => {

    const handleClose = (e) => {
        if ( e.target.id === 'wrapper') onClose()
    }
    if ( !isVisible ) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flex-col md:mx-0 mx-5'>
        <button className='text-white text-2xl place-self-end' onClick={() => onClose()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        </button>
        <div className='bg-white p-2 rounded'>
            Modal
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
