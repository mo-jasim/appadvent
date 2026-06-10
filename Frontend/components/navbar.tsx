"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import ContactDrawer from "./ContactDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-[10px] shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={140}
            height={50}
            className="w-28 sm:w-36 object-contain"
            priority
          />
        </Link>


        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">

          <Image
            src="/images/ai.png"
            alt="ai"
            width={40}
            height={40}
            priority
          />



          <Link href="/about-us">
            <span
              className="relative inline-block text-sm font-medium text-black
      transition-colors duration-300
      hover:text-[#32B9E9]
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-full
      after:bg-[#32B9E9]
      after:scale-x-0
      after:origin-right
      after:transition-transform after:duration-300
      hover:after:scale-x-100
      hover:after:origin-left"
            >
              About Us
            </span>
          </Link>




          <Link href="/industries">
            <span
              className="relative inline-block text-sm font-medium text-black
      transition-colors duration-300
      hover:text-[#32B9E9]
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-full
      after:bg-[#32B9E9]
      after:scale-x-0
      after:origin-right
      after:transition-transform after:duration-300
      hover:after:scale-x-100
      hover:after:origin-left"
            >
              Industries
            </span>
          </Link>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link
              href="/services/website-designing-development"
              className="text-sm font-medium flex items-center gap-1 text-black hover:text-gray-700 py-2"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </Link>

            {open && (
              <div
                className="absolute left-0 top-[100%] pt-2 min-w-[220px] z-50"
              >
                <div className="rounded-lg border bg-white shadow-lg border-cyan-400 overflow-hidden">
                  <Link
                    href="/services/website-designing-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Website Designing & Development
                  </Link>

                  <Link
                    href="/services/mobile-app-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Mobile App Development
                  </Link>

                  <Link
                    href="/services/digital-marketing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Digital Marketing
                  </Link>


                  <Link
                    href="/services/staff-augmentation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Staff Augmentation
                  </Link>
                  <Link
                    href="/services/custom-based-services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Custom Based Services
                  </Link>
                </div>
              </div>
            )}
          </div>



          <Link href="/portfolio">
            <span
              className="relative inline-block text-sm font-medium text-black
      transition-colors duration-300
      hover:text-[#32B9E9]
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-full
      after:bg-[#32B9E9]
      after:scale-x-0
      after:origin-right
      after:transition-transform after:duration-300
      hover:after:scale-x-100
      hover:after:origin-left"
            >
              Portfolio
            </span>
          </Link>



          <Link href="/blog">
            <span
              className="relative inline-block text-sm font-medium text-black
      transition-colors duration-300
      hover:text-[#32B9E9]
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-full
      after:bg-[#32B9E9]
      after:scale-x-0
      after:origin-right
      after:transition-transform after:duration-300
      hover:after:scale-x-100
      hover:after:origin-left"
            >
              Blog
            </span>
          </Link>



          {/* Contact us */}
          <button
            onClick={() => setContactOpen(true)}
            className="
            flex items-center gap-2 bg-[#32B9E9] text-sm text-white
            rounded-full px-4 py-2 cursor-pointer
            border border-transparent transition-all duration-300
            hover:bg-[#F2F2F2] hover:text-[#32B9E9] hover:border-[#32B9E9]
          "
          >
            <span>Contact us</span>
            <Image src="/images/nav1.png" alt="icon" width={18} height={18} />
          </button>
        </nav>


        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>


      {mobileOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-t shadow-lg z-[100]">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <Link href="/about-us" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/industries" onClick={() => setMobileOpen(false)}>Industries</Link>

            <div className="flex flex-col">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col pl-4 mt-4 gap-4 border-l-2 border-[#32B9E9]/40 text-gray-600">
                  <Link href="/services/website-designing-development" onClick={() => setMobileOpen(false)}>Website Designing & Development</Link>
                  <Link href="/services/digital-marketing" onClick={() => setMobileOpen(false)}>Digital Marketing</Link>
                  <Link href="/services/mobile-app-development" onClick={() => setMobileOpen(false)}>Mobile App Development</Link>
                  <Link href="/services/staff-augmentation" onClick={() => setMobileOpen(false)}>Staff Augmentation</Link>
                  <Link href="/services/custom-based-services" onClick={() => setMobileOpen(false)}>Custom Based Services</Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>

            <button
              className="mt-2 bg-[#32B9E9] text-white rounded-full px-4 py-2"
              onClick={() => { setMobileOpen(false); setContactOpen(true); }}
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </header>

    {/* Contact Drawer — slides in from the right */}
    <ContactDrawer isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Navbar;
