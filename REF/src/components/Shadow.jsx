import React from 'react'
// import imagebg from '../assets/image/bg.jpg'

function Shadow() {
  return (
    <div 
      className="w-full mt-1 md:-mt-72 lg:mt-1 py-10">
      <div className=" w-full h-full py-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className=" h-[160px] lg:w-[305px]  font-normal text-[16px] leading-[100%] tracking-[0] font-thicccboi  rounded-xl px-4 shadow-md p-10 text-center transition-all duration-300   hover:bg-white bg-white/90 hover:shadow-lg ">
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-400">4+</h2>
            <p className="text-gray-500 mt-4">Years of experience</p>
          </div>
  <div className=" h-[160px] lg:w-[305px] font-normal text-[16px] leading-[100%] tracking-[0] font-thicccboi  rounded-xl px-4 shadow-md p-10 text-center transition-all duration-300   hover:bg-white bg-white/90 hover:shadow-lg ">
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-400">20+</h2>
            <p className="text-gray-500 mt-4 ">Team member</p>
          </div>

           <div className=" h-[160px] lg:w-[305px] font-normal text-[16px] leading-[100%] tracking-[0] font-thicccboi  rounded-xl px-4 shadow-md p-10 text-center transition-all duration-300   hover:bg-white bg-white/90 hover:shadow-lg ">
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-400">25+</h2>
            <p className="text-gray-500 mt-4">Product Delivered</p>
          </div>

            <div className=" h-[160px] lg:w-[305px] font-normal text-[16px] leading-[100%] tracking-[0] font-thicccboi  rounded-xl px-4 shadow-md p-10 text-center transition-all duration-300   hover:bg-white bg-white/90 hover:shadow-lg ">
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-400">4+</h2>
            <p className="text-gray-500 mt-4">Rating on Clutch </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Shadow;
