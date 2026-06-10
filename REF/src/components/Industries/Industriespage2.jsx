
import React from "react";
import arro1 from "../../assets/image/ArrowRight11.png"
const Industriespage2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r -mt-8 from-black via-gray-900 to-black text-white p-6 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center justify-center gap-8">
      <div className=" md:w-4/2 flex flex-col items-center md:items-start text-center   lg:px-10 md:text-start">
        <h2 className="text-2xl sm:text-2xl lg:text-5xl px-2  font-bold mb-8 font-thicccboi font-inter  ">
          Have a project idea! Drop me a line.
        </h2>
        <p className=" text-sm sm:text-base  text-center lg:text-start text-gray-400 mb-8 font-thicccboi">
          Provide insights into your project and submit your Request for
          Proposal to get started.
        </p>

        <div className="flex items-center mb-6">
          <div className="bg-gray-800 p-3 rounded-full mr-3">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 8V7l-3 2-2-2-3 2-2-2-3 2-2-2-3 2v1l3-2 2 2 3-2 2 2 3-2 2 2 3-2zM3 10v10h18V10l-9 6-9-6z" />
            </svg>
          </div>
          <span className="text-lg sm:text-base font-thicccboi">
            info@golio.com
          </span>
        </div>

        <div className="flex items-center justify-center sm:justify-start -ml-3 w-40 max-w-xs py-4">
          <div className="flex-grow border-t border-white mx-4"></div>
          <h2 className="text-white text-[12px] sm:text-sm font-thicccboi">
            Connect with us:
          </h2>
        </div>

        <div className="flex space-x-4 mt-2">
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-8 sm:w-8"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-8 sm:w-8"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
              alt="LinkedIn"
              className="w-8 sm:w-8"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-8 sm:w-8"
            />
          </a>
        </div>
      </div>

      <div className="bg-white mt-6  text-[rgba(131,142,158,1)] rounded-[24px] shadow-lg p-6 sm:p-8 w-full sm:w-[500px] md:w-[800px] lg:w-[800px]">
        <h3 className="text-xl sm:text-2xl text-black font-bold mb-6 font-thicccboi">
          Write down your quote here…
        </h3>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
                Email
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
                Contact
              </label>
              <input
                type="text"
                placeholder="+91 98765 43210"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
                Phone number
              </label>
              <input
                type="text"
                placeholder="022-2345678"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
          </div>


<div className="flex flex-col sm:flex-row sm:space-x-4">
  <div className="w-full sm:w-1/2 relative">
    <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
      Services
    </label>
    <select className="w-full p-3 pr-8 border border-gray-300 rounded appearance-none">
      <option>Choose an option</option>
      <option>Web Development</option>
      <option>Mobile App</option>
      <option>Design</option>
    </select>
    <svg
      className="w-2.5 h-2.5 absolute right-3 top-1/2 transform -translate-y-1/2 mt-3 mr-2 pointer-events-none text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </div>

  <div className="w-full sm:w-1/2 mt-4 sm:mt-0 relative">
    <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
      Budget
    </label>
    <select className="w-full p-3 pr-8 border border-gray-300 rounded appearance-none">
      <option>Choose budget</option>
      <option>$1000</option>
      <option>$5000</option>
      <option>$10000</option>
    </select>
    <svg
      className="w-2.5 h-2.5 absolute right-3 top-1/2 transform -translate-y-1/2 mt-3 mr-2  pointer-events-none text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </div>
</div>

          {/* <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
                Services
              </label>
              <select className="w-full p-3 border border-gray-300 rounded">
                <option>Choose an option</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Design</option>
              </select>
            </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0 relative">
  <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
    Budget
  </label>

  <select className="w-full p-3 pr-8 border border-gray-300 rounded appearance-none">
    <option>Choose budget</option>
    <option>$1000</option>
    <option>$5000</option>
    <option>$10000</option>
  </select>

 
  <svg
    className="w-2.5 h-2.5 absolute right-3 top-1/2 transform -translate-y-3/2 mt-2  mr-2 pointer-events-none text-gray-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
</div>

          </div> */}

          <div>
            <label className="block text-sm text-gray-600 mb-1 font-thicccboi">
              Project details
            </label>
            <textarea
              placeholder="Tell us about your project…"
              className="w-full p-3 border border-gray-300 rounded h-24 resize-none"
            ></textarea>
          </div>

          <div
            class="  justify-center relative overflow-hidden bg-blue-500  text-white  rounded w-full h-12   text-[rgba(50,185,233,1)]  inline-flex items-center group 
         transition-all duration-300 px-4 py-1 lg:px-3 lg:py-1  font-thicccboi  "
          >
            <span class="absolute inset-0 text-[rgba(50,185,233,1)]  translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>

            <span class="relative flex items-center font-inter font-bold text-[16px] leading-[48px] tracking-normal capitalize group-hover:text-white ">
               Request A Quote 
              <span class="ml-2  duration-300 group-hover:translate-x-2 text-2xl">
                <img src={arro1} alt="" />
              </span>
            </span>
          </div>
          <div>
          {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full font-thicccboi">
            Request A Quote   

          </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Industriespage2;

// import React from 'react'
// import { motion } from "framer-motion";
// function Contact() {
//   return (

//     <div className=" min-h-500px bg-gradient-to-r from-black via-slate-900 to-blue-900 text-white flex items-center justify-center p-6">
//       <div className="max-w-7xl mx-auto  w-full grid md:grid-cols-2 gap-8 bg-transparent rounded-xl">

//         <div className="flex flex-col justify-center">
//           <h2 className=" sm:text-3xl  md:text-5xl font-inter font-bold text-[56px] leading-[60px] tracking-[-0.02em] ">
//           Have a project idea!
// Drop me a line.
//           </h2>
//           <p>Provide insights into your project and submit your Request for Proposal to get started.</p>
//         </div>

//         <form className="bg-[rgba(60,55,55,1)] text-white bg-opacity-60 p-6 rounded-xl shadow-lg">
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Full name"
//               className="w-full p-3 border-b  border-white bg-transparent font-thicccboi font-semibold text-[16px] leading-[100%] tracking-[0] align-middle text-white placeholder-white"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="E-mail ID*"
//               className="w-full p-3 border-b font-thicccboi font-semibold text-[16px] leading-[100%] tracking-[0] align-middle border-white bg-transparent text-white placeholder-white"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Contact Number*"
//               className="w-full p-3 border-b font-thicccboi font-semibold text-[16px] leading-[100%] tracking-[0] align-middle border-white bg-transparent text-white placeholder-white"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Select a Budget Rate"
//               className="w-full p-3 border-b font-thicccboi font-semibold text-[16px] leading-[100%] tracking-[0] align-middle border-white bg-transparent text-white placeholder-white"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Describe Your Project/Idea In Brief"
//               className="w-full p-3 border-b font-thicccboi font-semibold text-[16px] leading-[100%] tracking-[0] align-middle border-white bg-transparent text-white placeholder-white"
//             />
//           </div>
//           <div className="mb-4">
//             <textarea
//               rows="4"
//               placeholder="Write Project Description"
//               className="w-full p-3 border rounded-2xl font-thicccboi font-semibold text-[16px] leading-[100%] tracking-[0] align-middle border-white bg-transparent text-white placeholder-white"
//             />
//           </div>
//           <div className="mb-4 flex items-center">
//             <label className="mr-3">5 + 7 =</label>
//             <input
//               type="text"
//               className="w-12 p-2 border rounded-2xl   font-thicccboi font-semibold text-[16px] leading-[100%] tracking-[0] align-middle border-white bg-transparent text-white placeholder-white"
//               placeholder=""
//             />
//           </div>
//           <div className="flex items-center justify-between mt-4">
//             <button
//               type="submit"
//               className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300"
//             >
//               Submit
//             </button>
//             <p className="text-sm text-gray-300">
//               Or Direct Call Us at:<br />
//               <span className="text-cyan-400 font-medium">+91-886-462-3473</span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact
