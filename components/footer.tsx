import React from 'react'
import Image from 'next/image'
import QAndA from "../components/QAndA"
import Link from 'next/link'
import HaveAProject from './Have-a-project'

const footer = () => {
  return (

    <>
      <QAndA />
      <HaveAProject />
      <footer className="pt-12 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10">
            <div className="sm:col-span-2 md:col-span-4 lg:col-span-3">
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


            <div className="md:col-span-4 lg:col-span-2">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/about-us">About Us</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/portfolio">Portfolio</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/blog">Blogs</Link></li>
                <li className="mb-4 block hover:text-[#32B9E9]"><Link href="/ContactDrawer">Contact Us</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/website-designing-development" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Website Designing &amp; Development</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/mobile-app-development" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Mobile App Development</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/digital-marketing" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Digital Marketing Services</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/staff-augmentation" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Staff Augmentation</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/support-maintenance" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Support &amp; Maintenance</Link></li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer"><Link href="/services/custom-based-services" className="block text-inherit hover:text-[#32B9E9] transition-colors duration-200">Custom Based Services</Link></li>
              </ul>
            </div>


            <div className="md:col-span-6 lg:col-span-2">
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer">ECommerce</li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer">Financial Services</li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer">Fintech & Crypto</li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer">Healthcare & Pharma</li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer">Social & Community</li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer">Media & Entertainment</li>
                <li className="mb-4 hover:text-[#32B9E9] cursor-pointer">Consumer Internet</li>
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
                  className="w-12 h-12 md:w-14 md:h-14 shrink-0 object-contain"
                  priority
                />
                <p className="text-sm text-gray-600">
                  <span className="font-semibold block">Email Us</span>
                  info@appadvent.com
                </p>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <Image
                  src="/images/icons11.png"
                  alt="ai"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14 shrink-0 object-contain"
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
                  className="w-12 h-12 md:w-14 md:h-14 shrink-0 object-contain"
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
    </>
  )
}

export default footer;