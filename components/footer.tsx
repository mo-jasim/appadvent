"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import QAndA from "../components/QAndA"
import Link from 'next/link'
import HaveAProject from './Have-a-project'
import ContactDrawer from './ContactDrawer'

const footer = () => {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  return (

    <>
      <QAndA />
      <HaveAProject />
      <footer className="pt-12 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10">
            <div className="sm:col-span-2 md:col-span-12 lg:col-span-3">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={50}
                className="w-28 sm:w-36 object-contain"
                priority
              />
              <p className="text-sm text-gray-600 mb-4 mt-4">
                Experienced Team Delivering Exceptional digital solutions tailored to your Brand.
              </p>

              <p className="text-sm font-semibold mb-2">Our Social Media Handles</p>
              <div className="flex gap-3">
                <Image
                  src="/images/Facebook.png"
                  alt="ai"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/images/Linkedin.png"
                  alt="ai"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/images/Twitter.png"
                  alt="ai"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/images/icons13.png"
                  alt="ai"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  src="/images/icons14.png"
                  alt="ai"
                  width={20}
                  height={20}
                  priority
                />
              </div>
            </div>


            <div className="md:col-span-6 lg:col-span-2">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/about-us">About Us</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/portfolio">Portfolio</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/blog">Blogs</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9] cursor-pointer" onClick={() => setIsContactDrawerOpen(true)}>Contact Us</li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="md:col-span-6 lg:col-span-3">
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


            <div className="md:col-span-6 lg:col-span-2">
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


            <div className="sm:col-span-2 md:col-span-6 lg:col-span-2">
              <h3 className="font-semibold mb-4">Reach Us</h3>

              <div className="flex items-start gap-4 mb-8">
                <Image
                  src="/images/icons10.png"
                  alt="ai"
                  width={64}
                  height={64}
                  className="w-10 h-10 md:w-11 md:h-11 shrink-0 object-contain"
                  priority
                />
                <p className="text-sm text-gray-600">
                  <span className="font-semibold block">Email Us</span>
                  <a href="mailto:info@appadvent.com" className="hover:text-[#32B9E9] transition-colors">info@appadvent.com</a>
                </p>
              </div>

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between text-sm text-gray-300 gap-4 text-center md:text-left">
            <p>Copyright © 2024 Appadvent Pvt Ltd | All rights reserved</p>
            <p>Terms & conditions | Privacy Policy</p>
          </div>
        </div>
      </footer>

      <ContactDrawer 
        isOpen={isContactDrawerOpen} 
        onClose={() => setIsContactDrawerOpen(false)} 
      />
    </>
  )
}

export default footer;