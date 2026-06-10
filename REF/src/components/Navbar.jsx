import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import imagenv from "../assets/image/apadvent.svg";
import Imagesbt from "../assets/image/Group.svg";
import "../assets/style/Navbar.css";
import sta from "../assets/image/Star 2 (1).svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isServicePage = location.pathname.startsWith("/services");

  return (
    <div className="navbar1">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isServicePage && !scrolled
            ? "bg-transparent text-white"
            : scrolled
            ? "bg-white text-black"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center px-4">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src={imagenv}
                alt="Logo"
                className="w-[212.684px] h-[54px] opacity-100 absolute sm:top-[20px] top-[5px] px-6"
              />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:items-center lg:space-x-10 text-sm font-medium text-[15px] space-y-4 lg:space-y-0 absolute lg:static top-20 left-0 w-full lg:w-auto ${
              scrolled
                ? "bg-white text-black/80"
                : isServicePage
                ? "bg-transparent text-white"
                : "bg-white text-black/80"
            } lg:bg-transparent px-6 py-4 lg:p-0 shadow-md lg:shadow-none z-50`}
          >
            <div className="relative group">
              <button
                className="animated-gradient-button relative 
                   text-[14px] sm:text-[14px] md:text-[18px] lg:text-[17px]
                   px-5 sm:px-3 sm:py-3 md:px-5 md:py-5 w-[56px] h-[56px] opacity-100 rounded-[10.45px]"
              >
                <img
                  src={sta}
                  className="absolute -top-7 mt-9 right-2 text-white 
                   text-[10px] sm:text-xs md:text-xs "
                  style={{ animation: "ping 2s ease-in-out infinite" }}
                  alt=""
                />
                AI
              </button>
            </div>

            <div className="relative w-fit group">
              <Link
                to="/about"
                className="hover:text-[rgba(50,185,233,1)] font-medium text-[16px]"
              >
                About us
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
            </div>

            <div className="relative w-fit group">
              <Link
                to="/industries"
                className="hover:text-[rgba(50,185,233,1)] font-medium text-[16px]"
              >
                Industries
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
            </div>

            {/* 👇 Services Dropdown (Click to open, mouse leave to close) */}
            <div
              ref={dropdownRef}
              className="relative w-fit group"
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 font-medium text-[16px] hover:text-[rgba(50,185,233,1)]"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-2 bg-white border rounded-md shadow-md w-44 z-50 py-2 transition-all duration-200 ${
                  servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/services/web"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Web Development
                </Link>
                <Link
                  to="/services/app"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  App Development
                </Link>
                <Link
                  to="/services/uiux"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  UI/UX Design
                </Link>
              </div>
            </div>

            <div className="relative w-fit group">
              <Link
                to="/portfolio"
                className="hover:text-[rgba(50,185,233,1)] font-medium text-[16px]"
              >
                Portfolio
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
            </div>

            <div className="relative w-fit group">
              <Link
                to="/Blogmain"
                className="hover:text-[rgba(50,185,233,1)] font-medium text-[16px]"
              >
                Blog
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
            </div>

            <div className="inline-block group">
              <Link to="/contact">
                <button className="flex items-center bg-[rgba(50,185,233,1)] hover:bg-gray-200 hover:text-[rgba(50,185,233,1)] font-medium text-[16px] text-white px-3 py-2 rounded-full transition-all duration-300">
                  <span className="mr-2">Contact us</span>
                  <span className="bg-white text-[rgba(50,185,233,1)] p-1 rounded-full transition-transform duration-300">
                    <img
                      src={Imagesbt}
                      alt="arrow"
                      className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import imagenv from "../assets/image/apadvent.svg";

// import Imagesbt from "../assets/image/Group.svg";
// import "../assets/style/Navbar.css";
// import sta from "../assets/image/Star 2 (1).svg";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="navbar1">
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-white text-black " : "bg-transparent text-white"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto py-4 flex justify-between items-center px-4">
//           <div className="flex items-center space-x-3">
//             <Link to="/">
//               <img
//                 src={imagenv}
//                 alt="Logo"
//                 className="w-[212.684px] h-[54px] opacity-100 absolute sm:top-[20px] top-[5px] px-6"
//               />
//             </Link>
//           </div>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>

//           <ul
//             className={`${
//               menuOpen ? "flex" : "hidden"
//             } flex-col lg:flex lg:flex-row lg:items-center lg:space-x-10 text-sm font-medium text-[15px] space-y-4 lg:space-y-0 absolute lg:static top-20 left-0 w-full lg:w-auto ${
//               scrolled ? "bg-white text-black/80" : "bg-white text-black/80"
//             } lg:bg-transparent px-6 py-4  lg:p-0 shadow-md lg:shadow-none z-50`}
//           >
//             <div className="relative group">
//               <button
//                 className="animated-gradient-button relative 
//                    text-[14px] sm:text-[14px] md:text-[18px] lg:text-[17px]
//                    px-5 sm:px-3 sm:py-3 md:px-5 md:py-5 w-[56px] h-[56px] opacity-100 rounded-[10.45px]"
//               >
//                 <img
//                   src={sta}
//                   className="absolute -top-7 mt-9 right-2 text-white 
//                    text-[10px] sm:text-xs md:text-xs "
//                   style={{ animation: "ping 2s ease-in-out infinite" }}
//                   alt=""
//                 />
//                 AI
//               </button>
//             </div>

//             <div className="relative w-fit group">
//               <Link
//                 to="/about"
//                 className="hover:text-[rgba(50,185,233,1)]  cursor-pointer   font-medium text-[16px] leading-[100%] tracking-[0] text-center"
//               >
//                 About us
//               </Link>
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
//             </div>

//             <div className="relative w-fit group">
//               <Link
//                 to="/industries"
//                 className="hover:text-[rgba(50,185,233,1)] cursor-pointer font-medium text-[16px] leading-[100%] tracking-[0] text-center"
//               >
//                 Industries
//               </Link>
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
//             </div>

//             <div className="relative w-fit group">
//               <button
//                 onClick={() => setServicesOpen(!servicesOpen)}
//                 className="flex items-center gap-1 relative font-medium text-[16px] leading-[100%] tracking-[0] text-center hover:text-[rgba(50,185,233,1)] cursor-pointer"
//               >
//                 <Link to="/services">Services</Link>
//                 <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               <div
//                 className={`absolute left-0 mt-2 bg-white border rounded-md shadow-md w-44 z-50 py-2 ${
//                   servicesOpen ? "block" : "hidden"
//                 }`}
//               >
//                 <Link
//                   to="/services/web"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   Web Development
//                 </Link>
//                 <Link
//                   to="/services/app"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   App Development
//                 </Link>
//                 <Link
//                   to="/services/uiux"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   UI/UX Design
//                 </Link>
//               </div>
//             </div>

//             <div className="relative w-fit group">
//               <Link
//                 to="/portfolio"
//                 className="hover:text-[rgba(50,185,233,1)] cursor-pointer font-medium text-[16px] leading-[100%] tracking-[0] text-center"
//               >
//                 Portfolio
//               </Link>
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
//             </div>

//             <div className="relative w-fit group">
//               <Link
//                 to="/Blogmain"
//                 className="hover:text-[rgba(50,185,233,1)] cursor-pointerfont-['THICCCBOI'] font-medium text-[16px] leading-[100%] tracking-[0] text-center"
//               >
//                 Blog
//               </Link>
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgba(50,185,233,1)] transition-all duration-300 group-hover:w-full"></span>
//             </div>

//             <div className="inline-block group">
//               <Link to="/contact">
//                 <button className="flex items-center bg-[rgba(50,185,233,1)] hover:bg-gray-200 hover:text-[rgba(50,185,233,1)] font-medium text-[16px] leading-[100%] tracking-[0] text-center text-white text-sm px-3 py-2 rounded-full transition-all duration-300 ">
//                   <span className="mr-2">Contact us</span>
//                   <span className="bg-white text-[rgba(50,185,233,1)] p-1 rounded-full transition-transform duration-300">
//                     <img
//                       src={Imagesbt}
//                       alt="arrow"
//                       className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
