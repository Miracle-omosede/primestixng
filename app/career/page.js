import React from 'react';

const Careers = () => {
  return (
    <div className='font-raleway'>
      <div className="bg-black mt-20">
        <div className="flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20 justify-center">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">Careers</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 pt-10 justify-center'>
            <p className='text-2xl'>
              Hello there! Interested in joining our team? <br/>Kindly send us an email at{' '}
              <a className='underline text-blue-600' href="mailto:info@primestixng.com">info@primestixng.com</a> and we will reach out to you.
            </p>
          </div>
    </div>
  );
};

export default Careers;
