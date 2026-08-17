"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import QAndA from "../components/QAndA"
import Link from 'next/link'
import HaveAProject from './Have-a-project'
import ConsultationModal from './ConsultationModal'

const footer = () => {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  return (

    <>
      {/* <QAndA /> */}
      <HaveAProject />
      <footer className="w-full bg-white pt-12 md:pt-16 text-black font-THICCCBOI">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">

          {/* Row 2: 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/about-us">About Us</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/portfolio">Portfolio</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/blog">Blogs</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9] cursor-pointer" onClick={() => setIsContactDrawerOpen(true)}>Contact Us</li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/website-designing-development" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Website Designing &amp; Development</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/mobile-app-development" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Mobile App Development</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/digital-marketing" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Digital Marketing Services</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/staff-augmentation" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Staff Augmentation</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/Software-Maintenancepage" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Support &amp; Maintenance</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/Custom-Based-Services" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Custom Based Services</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/industries/Ecommerce" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">ECommerce</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/industries/Finance-&-Banking" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Financial Services</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/industries/Fintech-Crypto" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Fintech & Crypto</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/industries/Health-&-pharmacy" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Healthcare & Pharma</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/industries/Social-&-Community" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Social & Community</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/industries/Media-&-Entertainment" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Media & Entertainment</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/industries/Consumer-internet" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Consumer Internet</Link></li>
              </ul>
            </div>

            {/* Reach Us */}
            <div>
              <h3 className="font-semibold mb-4">Reach Us</h3>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@appadvent.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 mb-8 group">
                <Image
                  src="/images/icons10.png"
                  alt="ai"
                  width={64}
                  height={64}
                  className="w-10 h-10 md:w-11 md:h-11 shrink-0 object-contain"
                  priority
                />
                <div className="text-sm text-gray-600">
                  <span className="font-semibold block">Email Us</span>
                  <span className="group-hover:text-[#32B9E9] transition-colors">info@appadvent.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4 mb-8">
                <Image
                  src="/images/icons11.png"
                  alt="ai"
                  width={64}
                  height={64}
                  className="w-10 h-10 md:w-11 md:h-11 shrink-0 object-contain"
                  priority
                />
                <p className="text-sm text-gray-600">
                  <span className="font-semibold block">Phone Number</span>
                  +91-886-402-3673
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/images/icons12.png"
                  alt="ai"
                  width={64}
                  height={64}
                  className="w-10 h-10 md:w-11 md:h-11 shrink-0 object-contain"
                  priority
                />
                <p className="text-sm text-gray-600">
                  <span className="font-semibold block">Address</span>
                  H-190 Sector 63 Noida, U.P (201301)
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-[#001933] mt-12 py-6">
          <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 flex flex-col md:flex-row justify-between text-sm text-gray-300 gap-4 text-center md:text-left">
            <p>Copyright © 2024 Appadvent Pvt Ltd | All rights reserved</p>
            <p>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; conditions</Link>
              {" | "}
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>

      <ConsultationModal
        isOpen={isContactDrawerOpen}
        onClose={() => setIsContactDrawerOpen(false)}
      />
    </>
  )
}

export default footer;