"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LogoMarquee from '@/components/LogoMarquee'
import OurProjectsSection from './services/website-designing-development/Our-Projects-Section';
import CompaniesLove from './services/website-designing-development/Companies-Love';
import Link from 'next/link';
import ConsultationModal from '@/components/ConsultationModal';
import { ArrowRight } from 'lucide-react';
import Designing from './services/case-study/Goalkick/Designing';




const servicesData = [
  { href: "services/website-designing-development", title: "Website Designing & Development", desc: "We specialize in creating visually appealing and highly functional websites that meet your business goals...", icon: "/images/Ico1.svg" },
  { href: "services/mobile-app-development", title: "Mobile App Development", desc: "We develop mobile apps for iOS and Android using Swift, Kotlin, and React Native. Our secure apps ensure a great user experience...", icon: "/images/Ico2.svg" },
  { href: "services/staff-augmentation", title: "Staff Augmentation", desc: "Appadvent offers staff augmentation services to help you quickly scale your team with highly skilled professionals...", icon: "/images/Ico3.svg" },
  { href: "services/digital-marketing", title: "Digital Marketing", desc: "We offer SEO, social media, copywriting, and keyword optimization to boost your website's ranking and audience reach...", icon: "/images/Ico4.svg" },
  { href: "services/support-maintenance", title: "Support & Maintenance", desc: "We provide ongoing support and maintenance to ensure your web and mobile applications operate ...", icon: "/images/Ico5.svg" },
  { href: "services/custom-based-services", title: "Custom Based Services", desc: "Our services meet your business needs with tailored solutions. We develop software that enhances productivity...", icon: "/images/Ico6.svg" }
];

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const [imageKeys, setImageKeys] = useState<number[]>(Array(6).fill(0));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setImageKeys(Array(6).fill(Date.now()));
  }, []);

  const handleHover = (index: number): void => {
    if (!mounted) return;
    setImageKeys((prev) => {
      const updated = [...prev];
      updated[index] = Date.now();
      return updated;
    });
  };

  return (
    <main className="relative w-full overflow-x-hidden min-h-screen">
      {/* Background that spans the entire page */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/polygon.png')", zIndex: -1 }}
      ></div>

      <section className="relative w-full py-10 md:py-16 overflow-hidden font-THICCCBOI">

        <div className="relative z-10">

          <p className="max-w-5xl mx-auto px-4 text-black font-bold text-[32px] sm:text-[40px] md:text-[56px] text-center leading-tight  font-extrabold">
            Custom Application & Website Development Services
          </p>

          {/* Get a free consultation button */}
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="
        text-[#32B9E9] border border-[#32B9E9] bg-white 
        px-5 py-2 sm:px-6 sm:py-2.5 
        rounded-full text-sm sm:text-base cursor-pointer
        hover:bg-[#32B9E9] hover:text-white transition-colors duration-300
      ">
              Get a free Consultation
            </button>
          </div>

          {/* Logo marquee */}
          <div className="mt-8">
            <LogoMarquee />
          </div>

          {/* Stats */}
          <div className="
      grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4
      gap-4 sm:gap-6 px-4
      max-w-7xl mx-auto mt-12 md:mt-16
    ">
            {[
              ["4+", "Years of experience"],
              ["20+", "Team members"],
              ["25+", "Product Delivered"],
              ["4+", "Rating on Clutch"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="
            flex flex-col items-center justify-center
             shadow-md hover:bg-white rounded-[16px] h-auto min-h-[140px] w-full max-w-[305px] mx-auto
            py-4 sm:py-6 hover:text-[#32B9E9]
          "
              >
                <p className="font-bold text-[28px] sm:text-[32px]">{value}</p>
                <p className="text-[14px] sm:text-[16px] text-gray-700 text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore our team services */}
      <section className="mb-[80px]">
        <p className="max-w-2xl mx-auto text-black font-bold text-[32px] md:text-[40px] px-4 leading-tight text-center font-THICCCBOI">
          Explore our team services
        </p>

        <p className="max-w-2xl mx-auto text-[#061C3D] pt-5 px-4 text-center text-[16px] md:text-[18px] font-THICCCBOI">
          At Appadvent, we blend innovation with technical expertise to provide exceptional web and app development solutions.
        </p>
        {/* Cards */}
        <div className="mt-7 grid gap-6 max-w-6xl mx-auto px-4 sm:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <Link key={index} href={service.href} className="block h-full group" onMouseEnter={() => handleHover(index)}>
              <div className="h-full pt-8 pb-3 px-6 flex flex-col items-center justify-between border border-[#F2F2F2] rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center flex-grow">
                  <Image
                    src={mounted && imageKeys[index] ? `${service.icon}?v=${imageKeys[index]}` : service.icon}
                    alt={service.title}
                    width={61}
                    height={61}
                    className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-translate-y-2"
                    priority
                  />
                  <p className="mt-4 text-black font-semibold text-center text-[20px]">{service.title}</p>
                  <p className="mt-2 text-[#4D4D4D] text-center text-sm">
                    {service.desc}
                  </p>
                </div>
                <button className="mt-6 mb-2 text-[#32B9E9] flex items-center justify-center gap-1 font-medium transition-all group-hover:text-[#2da8d5]">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1.5} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Designing />
      {/* Industries We Cater To */}
      <section className="w-full relative lg:pb-[80px]">
        {/* Full-bleed 50/50 background */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[764px]">
          <div className="lg:w-1/3 w-full h-[300px] lg:h-full relative">
            <Image
              src="/images/img7.png"
              alt="Industry"
              fill
              className="object-cover"
            />
          </div>
          {/* Industries We Cater To */}
          <div className="lg:w-2/3 w-full bg-[#002434] text-white flex flex-col px-6 py-16 lg:py-36 lg:px-36">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 md:mb-6">
              Industries We Cater To
            </h2>
            <p className="text-[#a1b8c1] text-[18px] md:text-[22px] leading-relaxed max-w-[700px]">
              At Appadvent, we blend innovation with technical expertise to provide
              exceptional web and app development solutions.
            </p>
          </div>
        </div>

        {/* Floating Cards Array */}
        <div className="relative z-10 mt-8 lg:-mt-[350px] w-full px-4 lg:px-12 pb-12 lg:pb-0">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Fintech & Crypto */}
            <Link href="#" className="block w-full group">
              <div className="bg-[#F4FAFD] rounded-[20px] p-8 sm:p-10 shadow-sm h-auto flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 min-h-[260px]">
                <div className="flex flex-col items-start">
                  <Image
                    src="/images/Group 1.svg"
                    alt="Fintech"
                    width={56}
                    height={56}
                    className="mb-8"
                  />
                  <p className="font-bold text-[20px] text-[#0A1A2E]">Fintech & Crypto</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[#32B9E9] text-[15px] font-semibold">
                  Learn More <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
                </div>
              </div>
            </Link>

            {/* Retail & E-commerce */}
            <Link href="#" className="block w-full group">
              <div className="bg-[#FDFAEA] rounded-[20px] p-8 sm:p-10 shadow-sm h-auto flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 min-h-[260px]">
                <div className="flex flex-col items-start">
                  <Image
                    src="/images/Group 2.svg"
                    alt="Retail"
                    width={56}
                    height={56}
                    className="mb-8"
                  />
                  <p className="font-bold text-[20px] text-[#0A1A2E]">Retail & E-commerce</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[#32B9E9] text-[15px] font-semibold">
                  Learn More <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
                </div>
              </div>
            </Link>

            {/* Healthcare */}
            <Link href="#" className="block w-full group">
              <div className="bg-[#FDF1F3] rounded-[20px] p-8 sm:p-10 shadow-sm h-auto flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 min-h-[260px]">
                <div className="flex flex-col items-start">
                  <Image
                    src="/images/Group 3.svg"
                    alt="Healthcare"
                    width={56}
                    height={56}
                    className="mb-8"
                  />
                  <p className="font-bold text-[20px] text-[#0A1A2E]">Healthcare</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[#32B9E9] text-[15px] font-semibold">
                  Learn More <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
                </div>
              </div>
            </Link>

            {/* Finance & Banking */}
            <Link href="#" className="block w-full group">
              <div className="bg-[#F2FCF9] rounded-[20px] p-8 sm:p-10 shadow-sm h-auto flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 min-h-[260px]">
                <div className="flex flex-col items-start">
                  <Image
                    src="/images/Finance & Banking.svg"
                    alt="Finance"
                    width={56}
                    height={56}
                    className="mb-8"
                  />
                  <p className="font-bold text-[20px] text-[#0A1A2E]">Finance & Banking</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[#32B9E9] text-[15px] font-semibold">
                  Learn More <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <OurProjectsSection />

      <CompaniesLove />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  )
}

export default HomePage