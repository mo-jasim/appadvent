"use client";
import React, { useEffect } from 'react';
import { Mail, Facebook, Twitter, Linkedin, Instagram, X } from 'lucide-react';
import Image from 'next/image';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { motion } from 'framer-motion';

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/40 backdrop-blur-sm p-4 font-THICCCBOI">
      {/* Backdrop */}
      <div className="fixed inset-0 z-0 bg-transparent" onClick={onClose}></div>

      {/* Centering Wrapper */}
      <div className="flex min-h-full items-center justify-center py-10">
        {/* Modal Container */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[1000px] bg-white rounded-[20px] shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
          >
            <X size={18} />
          </button>

          {/* Left Side: Info */}
          <div
            className="w-full lg:w-[380px] p-6 lg:p-10 lg:py-12 flex flex-col justify-between shrink-0"
            style={{
              background: 'linear-gradient(135deg, #e0f2fe 0%, #ede9fe 100%)'
            }}
          >
            <div>
              <h2 className="text-[28px] md:text-[34px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Have a project idea!<br />Drop us a line.
              </h2>
              <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-[90%]">
                Provide insights into your project and submit your Request for Proposal to get started.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-transparent">
                  <Image src="/images/Icons (1).svg" alt="ai" width={64} height={64} className="shrink-0" priority />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-gray-500 uppercase tracking-widest mb-[6px]">Email us</p>
                  <p className="text-[20px] font-medium-20 text-black">info@appadvent.com</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5 mt-12">
                <div className="w-8 h-[2px] bg-gray-300"></div>
                <p className="text-[15px] font-semibold text-gray-700">Connect with us:</p>
              </div>

              <div className="flex gap-4 mt-2 text-gray-400">
                <span className="hover:scale-110 transition-all duration-300 item-[#32B9E9] cursor-pointer">
                  <Image
                    src="/images/Social Media (1).svg"
                    alt="ai"
                    width={44}
                    height={44}
                    className="shrink-0"
                    priority
                  />
                </span>
                <span className="hover:scale-110 transition-all duration-300 item-[#32B9E9] cursor-pointer">
                  <Image
                    src="/images/Social Media (2).svg"
                    alt="ai"
                    width={44}
                    height={44}
                    className="shrink-0"
                    priority
                  />
                </span>
                <span className="hover:scale-110 transition-all duration-300 cursor-pointer">
                  <Image
                    src="/images/Social Media (3).svg"
                    alt="ai"
                    width={44}
                    height={44}
                    className="shrink-0"
                    priority
                  />
                </span>
                <span className="hover:scale-110 transition-all duration-300 item-[#32B9E9] cursor-pointer">
                  <Image
                    src="/images/Social Media (4).svg"
                    alt="ai"
                    width={44}
                    height={44}
                    className="shrink-0"
                    priority
                  />
                </span>
                <span className="hover:scale-110 transition-all duration-300 item-[#32B9E9] cursor-pointer">
                  <Image
                    src="/images/Social Media (5).svg"
                    alt="ai"
                    width={44}
                    height={44}
                    className="shrink-0"
                    priority
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:flex-1 bg-white p-6 lg:p-10 lg:pl-12 flex flex-col gap-[16px]">
            <h3 className="text-[22px] font-bold text-gray-900">Write down your quote here...</h3>

            <form className="flex flex-col gap-4 flex-1" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your request! We will get back to you soon."); onClose(); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Name</label>
                  <input type="text" placeholder="Full name" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-[14px]" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Email</label>
                  <input type="email" placeholder="Email address" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-[14px]" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Contact</label>
                  <input type="text" placeholder="Mobile number" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-[14px]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Phone number</label>
                  <input type="text" placeholder="Phone number" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-[14px]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 relative">
                  <label className="text-[13px] font-semibold text-gray-600">Services</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-[14px] text-gray-500 appearance-none bg-white">
                      <option value="" disabled>What are you looking for:</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                    {/* Select indicator */}
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-1 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 relative">
                  <label className="text-[13px] font-semibold text-gray-600">Budget</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-[14px] text-gray-500 appearance-none bg-white">
                      <option value="" disabled>Project budget (USD)</option>
                      <option value="1k-5k">$1k - $5k</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k+">$10k+</option>
                    </select>
                    {/* Select indicator */}
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-1 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-[13px] font-semibold text-gray-600">Message</label>
                <textarea placeholder="Tell us about your project..." rows={4} className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-[14px] resize-none" required></textarea>
              </div>

              <button type="submit" className="mt-2 w-full bg-[#32B9E9] hover:bg-[#2da8d5] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300">
                Request A Quote
                <span className="font-sans text-xl leading-none top-[0px] relative">→</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationModal;
