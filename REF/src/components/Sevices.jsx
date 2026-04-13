import React from "react";
import { Link } from "react-router-dom";
import image3 from "../assets/image/Icons.png";
import image2 from "../assets/image/Icons2.svg";
import image1 from "../assets/image/Icons1.svg";
import arro from "../assets/image/ArrowRight.png";

function Sevices() {
  return (
    <div className="max-w-7xl mx-auto">
      
      <div className="text-center px-3">
        <h2 className=" font-bold font-[THICCCBOI]  text-[24px]  tracking-[0] text-center align-middle   md:text-[48px]  lg:text-[48px] leading-[60px] mt-[26px] lg:mt-9 text-gray-900">
        {/* <h2 className="font-bold  text-[48px] "> */}
          Explore our team services
        </h2>

        <p className=" font-[THICCCBOI] font-Regular text-[20px] leading-[32px] text-[rgba(6,28,61,1)] tracking-[0px] text-center align-middle  font-Regular  lg:text-[20px]  lg:leading-[32px] mt-[10px] lg:mt-6 max-w-3xl mx-auto text-gray-600">
          At Appadvent, we blend innovation with technical expertise to provide
          exceptional web and app development solutions.
        </p>
      </div>

      <div className="py-12 px-4 sm:px-4 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <img src={image1} alt="icon" className="w-15 h-15 p-4" />
            </div>
            <h4 className=" leading-[100%] tracking-[0]  font-thicccboi font-semibold text-[16px] text-center mb-4 text-gray-900">
              Website Designing & Development
            </h4>
            <p className="font-thicccboi font-Regular text-[14px] leading-[20px] text-center text-[rgba(77,77,77,1)] mb-8">
              We specialize in creating visually appealing and highly functional
              websites that meet your business goals...
            </p>
            <div className="text-center">
              <Link
                to="#"
                className="font-thicccboi font-medium text-[rgba(50,185,233,1)] inline-flex items-center px-4 py-1 lg:px-3 lg:py-1 rounded-full group transition-all duration-300"
              >
                <span className="relative flex items-center group-hover:text-[rgba(50,185,233,1)]">
                  Learn More
                  <span className="ml-2 duration-300 group-hover:translate-x-2">
                    <img src={arro} alt="" />
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <img src={image2} alt="icon" className="w-15 h-15 p-4" />
            </div>
             <h4 className=" leading-[100%] tracking-[0]  font-thicccboi font-semibold text-[16px] text-center mb-4 text-gray-900">
              Mobile App Development
            </h4>
            <p className="font-thicccboi font-Regular text-[14px] leading-[20px] text-center text-[rgba(77,77,77,1)] mb-8">
              We develop mobile apps for iOS and Android using Swift, Kotlin,
              and React Native. Our secure apps ensure a great user experience...
            </p>
            <div className="text-center">
              <Link
                to="#"
                className="font-thicccboi font-medium text-[rgba(50,185,233,1)] inline-flex items-center px-4 py-1 lg:px-3 lg:py-1 rounded-full group transition-all duration-300"
              >
                <span className="relative flex items-center group-hover:text-[rgba(50,185,233,1)]">
                  Learn More
                  <span className="ml-2 duration-300 group-hover:translate-x-2">
                    <img src={arro} alt="" />
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <img src={image3} alt="icon" className="w-15 h-15 p-4" />
            </div>
            <h4 className=" leading-[100%] tracking-[0]  font-thicccboi font-semibold text-[16px] text-center mb-4 text-gray-900">
              Staff Augmentation
            </h4>
            <p className="font-thicccboi font-Regular text-[14px]  leading-[20px] text-center text-[rgba(77,77,77,1)] mb-8">
              Appadvent offers staff augmentation services to help you quickly
              scale your team with highly skilled professionals...
            </p>
            <div className="text-center">
              <Link
                to="#"
                className="font-thicccboi font-medium text-[rgba(50,185,233,1)] inline-flex items-center px-4 py-1 lg:px-3 lg:py-1 rounded-full group transition-all duration-300"
              >
                <span className="relative flex items-center group-hover:text-[rgba(50,185,233,1)]">
                  Learn More
                  <span className="ml-2 duration-300 group-hover:translate-x-2">
                    <img src={arro} alt="" />
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <img src={image1} alt="icon" className="w-15 h-15 p-4" />
            </div>
           <h4 className=" leading-[100%] tracking-[0]  font-thicccboi font-semibold text-[16px] text-center mb-4 text-gray-900">
              Digital Marketing
            </h4>
            <p className="font-thicccboi font-Regular text-[14px] leading-[20px] text-center text-[rgba(77,77,77,1)] mb-8">
              We offer SEO, social media, copywriting, and keyword optimization
              to boost your website's ranking and audience reach...
            </p>
            <div className="text-center">
              <Link
                to="#"
                className="font-thicccboi font-medium text-[rgba(50,185,233,1)] inline-flex items-center px-4 py-1 lg:px-3 lg:py-1 rounded-full group transition-all duration-300"
              >
                <span className="relative flex items-center group-hover:text-[rgba(50,185,233,1)]">
                  Learn More
                  <span className="ml-2 duration-300 group-hover:translate-x-2">
                    <img src={arro} alt="" />
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <img src={image2} alt="icon" className="w-15 h-15 p-4" />
            </div>
             <h4 className=" leading-[100%] tracking-[0]  font-thicccboi font-semibold text-[16px] text-center mb-4 text-gray-900">
              Support & Maintenance
            </h4>
            <p className="font-thicccboi font-Regular text-[14px] leading-[20px] text-center text-[rgba(77,77,77,1)] mb-8">
              We provide ongoing support and maintenance to ensure your web and
              mobile applications operate smoothly...
            </p>
            <div className="text-center">
              <Link
                to="#"
                className="font-thicccboi font-medium text-[rgba(50,185,233,1)] inline-flex items-center px-4 py-1 lg:px-3 lg:py-1 rounded-full group transition-all duration-300"
              >
                <span className="relative flex items-center group-hover:text-[rgba(50,185,233,1)]">
                  Learn More
                  <span className="ml-2 duration-300 group-hover:translate-x-2">
                    <img src={arro} alt="" />
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <img src={image3} alt="icon" className="w-15 h-15 p-4" />
            </div>
             <h4 className=" leading-[100%] tracking-[0]  font-thicccboi font-semibold text-[16px] text-center mb-4 text-gray-900">
              Custom based Services
            </h4>
            <p className="font-thicccboi font-Regular text-[14px] leading-[20px] text-center text-[rgba(77,77,77,1)] mb-8">
              Our services meet your business needs with tailored solutions. We
              develop software that enhances productivity...
            </p>
            <div className="text-center">
              <Link
                to="#"
                className="font-thicccboi font-medium text-[rgba(50,185,233,1)] inline-flex items-center px-4 py-1 lg:px-3 lg:py-1 rounded-full group transition-all duration-300"
              >
                <span className="relative flex items-center group-hover:text-[rgba(50,185,233,1)]">
                  Learn More
                  <span className="ml-2 duration-300 group-hover:translate-x-2">
                    <img src={arro} alt="" />
                  </span>
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sevices;
