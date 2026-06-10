import React from "react";
import aap from "../assets/image/app.png";
import email from "../assets/image/Icons (4).svg";
import cont from "../assets/image/Icons (2).svg";
import map from "../assets/image/Icons (3).svg";
import fb from "../assets/image/f.png";
import link from "../assets/image/ln.png";
import twiteer from "../assets/image/Twitter.png"
import int from "../assets/image/intt.png";
import pb from "../assets/image/p.png";

function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="py-10 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <img src={aap} alt="Appadvent" className="h-[54px]" />
            </div>
            <p className="text-start font-thicccboi font-normal hover:text-blue-600 text-sm sm:text-base leading-6 text-[rgba(0,0,0,1)] mb-6">
              Experienced Team Delivering Exceptional digital solutions tailored
              to your Brand.
            </p>

            <h3 className="font-thicccboi font-semibold text-sm sm:text-base mb-4">
              Our Social Media Handles
            </h3>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80">
                <img src={fb} className="w-6 sm:w-7" alt="Facebook" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src={link} className="w-6 sm:w-7" alt="LinkedIn" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src={twiteer} className="w-6 sm:w-7" alt="Twitter" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src={int} className="w-8 sm:w-10" alt="Instagram" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src={pb} className="w-7 sm:w-8" alt="Pinterest" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-thicccboi font-semibold text-sm sm:text-base mb-4 mt-5">
              Quick Links
            </h3>
            <ul className="space-y-5 font-thicccboi font-normal text-[16px] sm:text-base text-[rgba(0,0,0,1)]">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-thicccboi font-semibold text-sm sm:text-base mb-4 mt-5">
              Our Services
            </h3>
            <ul className="space-y-5 font-thicccboi font-normal text-[16px] sm:text-base text-[rgba(0,0,0,1)]">
              <li className="hover:text-blue-600 cursor-pointer">Website Designing & Development</li>
              <li className="hover:text-blue-600 cursor-pointer">Mobile App Development</li>
              <li className="hover:text-blue-600 cursor-pointer">Digital Marketing Services</li>
              <li className="hover:text-blue-600 cursor-pointer">Staff Augmentation</li>
              <li className="hover:text-blue-600 cursor-pointer">Support & Maintenance</li>
              <li className="hover:text-blue-600 cursor-pointer">Custom Based Services</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-thicccboi font-semibold text-sm sm:text-base mb-4 mt-5">
              Industries
            </h3>
            <ul className="space-y-5 font-thicccboi font-normal text-[16px] sm:text-base text-[rgba(0,0,0,1)]">
              <li className="hover:text-blue-600 cursor-pointer">ECommerce</li>
              <li className="hover:text-blue-600 cursor-pointer">Financial Services</li>
              <li className="hover:text-blue-600 cursor-pointer">Fintech & Crypto</li>
              <li className="hover:text-blue-600 cursor-pointer">Healthcare & Pharma</li>
              <li className="hover:text-blue-600 cursor-pointer">Social & Community</li>
              <li className="hover:text-blue-600 cursor-pointer">Media & Entertainment</li>
              <li className="hover:text-blue-600 cursor-pointer">Consumer Internet</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-thicccboi font-semibold text-sm sm:text-base mb-4 mt-5">
              Reach Us
            </h3>
            <div className="flex items-start gap-3 mb-6 hover:text-blue-600 cursor-pointer">
              <img src={email} className="w-8 sm:w-10" alt="Email" />
              <div>
                <p className="text-xs text-start sm:text-sm text-gray-500">EMAIL US</p>
                <p className="text-sm sm:text-base font-medium">info@appadvent.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-6 hover:text-blue-600 cursor-pointer">
              <img src={cont} className="w-8 sm:w-10" alt="Phone" />
              <div>
                <p className="text-xs text-start sm:text-sm text-gray-500">PHONE NUMBER</p>
                <p className="text-[16px] sm:text-base font-medium">+91-886-402-3673</p>
              </div>
            </div>
            <div className="flex items-start gap-6 hover:text-blue-600 cursor-pointer">
              <img src={map} className="w-8 sm:w-10" alt="Address" />
              <div>
                <p className="text-[16px] text-start sm:text-base font-medium">
                  H-190 Sector 63 Noida U.P.(201301)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-12 lg:px-20 w-full text-xs sm:text-sm">
        <p className="hover:text-blue-400 cursor-pointer">
          Copyright © 2024 Appadvent Pvt Ltd. | All rights reserved
        </p>
        <p className="hover:text-blue-400 cursor-pointer">
          Terms & Conditions | Privacy Policy
        </p>
      </div>
    </footer>
  );
}

export default Footer;
