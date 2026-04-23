"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import OurProjectsSection from "../../website-designing-development/Our-Projects-Section";
import CompaniesLove from "../../website-designing-development/Companies-Love";
import { ArrowRight } from "lucide-react";
import ConsultationModal from '@/components/ConsultationModal';

/* ─── Framework steps (Section 3) ─── */
const frameworkSteps = [
  {
    numimg: "/Letimg/Num.1.svg",
    title: "Understanding Your Vision",
    desc: "First of all, we immerse ourselves in your concepts and visions of the fintech application.",
    bg: "#ffeaea",
    badgeBorder: "1px solid #10637F",
    badgeColor: "#10637F",
  },
  {
    numimg: "/Letimg/Num.2.svg",
    title: "Strategic Planning",
    desc: "After that, we hold briefing meetings to define the project's objectives, functionalities, and schedule.",
    bg: "#eafffc",
    badgeBorder: "1px solid #10637F",
    badgeColor: "#10637F",
  },
  {
    numimg: "/Letimg/Num.3.svg",
    title: "Agile Development",
    desc: "In this process, the FinTech app is created through multiple sprints based on the principles of agile development.",
    bg: "#eeeaff",
    badgeBorder: "1px solid #10637F",
    badgeColor: "#10637F",
  },
  {
    numimg: "/Letimg/Num.4.svg",
    title: "Robust Testing",
    desc: "Quality is a very important aspect that is considered in our work.",
    bg: "#ffeaed",
    badgeBorder: "1px solid #10637F",
    badgeColor: "#10637F",
  },
  {
    numimg: "/Letimg/Num.5.svg",
    title: "Launch and Support",
    desc: "Last but not least, we launch your fintech app and ensure that we support it after the launch.",
    bg: "#eafff0",
    badgeBorder: "1px solid #10637F",
    badgeColor: "#10637F",
  },
];

/* ─── Feature list for Section 2 ─── */
const features = [
  {
    img: "/Letimg/fun.svg",
    title: "Web and Mobile Application Development",
    desc: "For a fintech company, both web and mobile applications are essential for customer interface and to create a competitive environment.",
  },
  {
    img: "/Letimg/fun.svg",
    title: "Security Audits and Testing",
    desc: "Security is highly valued in the fintech industry. Appadvent performs security check and vulnerability assessments to ensure that your products are secure.",
  },
  {
    img: "/Letimg/fun.svg",
    title: "Fintech Product Development Consulting",
    desc: "Security is highly valued in the fintech industry. Appadvent performs security check and vulnerability assessments to ensure that your products are secure..",
  },
  {
    img: "/Letimg/fun.svg",
    title: "Modernization and Support of Fintech App",
    desc: "Overcome legacy pitfalls with Appadvent’s fintech app modernization solutions. We transition legacy finance applications to efficient fintech software with a modular design, user-friendly interface, and no disruption. .",
  },
];

export default function FintechCryptoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const section4ScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (section4ScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = section4ScrollRef.current;
      // Added a slight tolerance margin to avoid floating point issues
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollSection4 = (dir: "left" | "right") => {
    if (section4ScrollRef.current) {
      const cardWidth = section4ScrollRef.current.children[0]?.clientWidth || 200;
      const scrollAmount = cardWidth + 24; // 24px is the gap
      section4ScrollRef.current.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className='overflow-hidden' style={{
      backgroundImage: "url('/images/polygon.png')",
    }}>
      <main className="w-full font-THICCCBOI overflow-hidden">

        {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — Hero
      ══════════════════════════════════════════════════════════════ */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center pt-24 md:pt-0">
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6">
                Fintech &amp; Crypto <br className="hidden md:block" />
                App Development Solutions
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                We work primarily within the fintech niche and aim to deliver high-quality software solutions with an emphasis on speed, flexibility, and effectiveness. We acknowledge the requirements of your business and turn your vision into reality.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#32B9E9] font-bold text-lg md:text-xl underline underline-offset-8 hover:text-[#2aa8d6] transition-colors"
                >
                  Have a project in mind?
                </button>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] aspect-[4/3] transition-transform duration-500 hover:scale-[1.02]">
                <img src="/Letimg/Frame 134.svg" alt="Fintech Mockup" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Services */}
        <section className="relative w-full py-16 md:py-24 bg-white/30 backdrop-blur-sm overflow-hidden">
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                Scale Your Fintech Needs with Expert Software Development
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Appadvent delivers high-quality software solutions with an emphasis on speed, flexibility, and effectiveness. We committed to making your dream come true on time and within budget.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Text content */}
              <div className="order-2 lg:order-1">
                <div className="space-y-8">
                  {features.map((f) => (
                    <div key={f.title} className="flex gap-5 group">
                      <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:bg-[#32B9E9] transition-all duration-300">
                        <img src={f.img} alt="" className="w-6 h-6 md:w-8 md:h-8 group-hover:brightness-0 group-hover:invert transition-all" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">{f.title}</h3>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: phone mockups */}
              <div className="flex justify-center items-center relative order-1 lg:order-2">
                <div className="relative w-full max-w-[350px] md:max-w-[450px] transition-transform duration-500 hover:scale-[1.03]">
                  <img src="/Letimg/CryptoCove - Crypto Wallet 1.svg" alt="Crypto Wallet" className="w-full h-auto drop-shadow-2xl" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#32B9E9]/10 blur-[100px] rounded-full -z-10 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════ 
        SECTION 3 — Our Fintech Application Development Framework
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="w-full py-16 px-4 sm:px-6 lg:px-16 mt-[80px]"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,200,180,0.22) 0%, transparent 70%), linear-gradient(180deg, #06091a 0%, #080d20 100%)",
          }}
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight tracking-tight mb-12">
            Our Fintech Application <br className="hidden sm:block" /> Development Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 max-w-[1440px] mx-auto">
            {frameworkSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 p-5 lg:p-6 rounded-2xl h-full shadow-lg"
                style={{
                  background: step.bg,
                }}
              >
                {/* Number badge */}
                <div
                  className="w-8 h-8 rounded-full flex justify-center items-center font-bold text-[14px]"
                  style={{
                    background: "#ffffff",
                    border: step.badgeBorder,
                    color: step.badgeColor,
                  }}
                >
                  <Image src={step.numimg} alt={step.title} width={48} height={49} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-[16px] xl:text-[18px] text-gray-900 leading-[1.25]">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-[13px] xl:text-[14px] text-gray-700 leading-[1.6]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — Why Appadvent is Your Ideal Partner
      ══════════════════════════════════════════════════════════════ */}
        <section className="w-full py-10 lg:py-16 px-5 sm:px-6 lg:px-20 mt-10 lg:mt-[80px]">
          <div className="max-w-7xl mx-auto">

            {/* Top row: heading left + description right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-[40px] lg:mb-[40px] items-start">
              <div>
                <h2 className="text-3xl sm:text-[42px] lg:text-[42px] font-bold text-gray-900 leading-[1.25] tracking-tight">
                  Why Appadvent is Your <br />Ideal Partner for{" "}
                  <span className='text-[#32B9E9]'> Fintech</span>
                  <br />
                  <span className='text-[#32B9E9]'> App </span>Development?
                </h2>
              </div>
              <div>
                <p className="text-[16px] sm:text-[20px] font-regular font-normal leading-relaxed text-[#323A3E]">
                  Appadvent offers the best and unique fintech application development solutions to assist your business in achieving higher performance in the new world. The strategic management approach that we follow is the one that encourages the focus on innovation, teamwork, and market orientation.
                </p>
              </div>
            </div>

            {/* 3 feature cards */}
            <style dangerouslySetInnerHTML={{
              __html: `
            .section-hide-scroll::-webkit-scrollbar { display: none; }
            .section-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            @keyframes cardFadeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
          `}} />
            <div
              ref={section4ScrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory section-hide-scroll pb-4 -mr-5 sm:-mr-6 lg:-mr-[80px] pr-5 sm:pr-6 lg:pr-[80px]"
            >
              {[
                {
                  icon: (
                    <img src="/Letimg/Component 27.svg" alt="Expertise" className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] object-contain" />
                  ),
                  title: "Expertise",
                  desc: "The team of developers that we have includes only the best and the most experienced specialists who have been working in the sphere of fintech for years, which lets us overcome any difficulties and offer our clients the best solutions.",
                  bg: "#e1f4fa", // Light cyan
                },
                {
                  icon: (
                    <img src="/Letimg/Component 26.svg" alt="Innovation" className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] object-contain" />
                  ),
                  title: "Innovation",
                  desc: "We focus on innovation and leveraging the latest technological advancements to deliver exceptional and scalable applications that drive future growth.",
                  bg: "#ffffea", // Light yellow
                },
                {
                  icon: (
                    <img src="/Letimg/Component 25.svg" alt="Customization" className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] object-contain" />
                  ),
                  title: "Customization",
                  desc: "Every project is unique. We provide tailored solutions that accurately address your specific business requirements and align seamlessly with your goals.",
                  bg: "#e4faed", // Light green
                },
                {
                  icon: (
                    <img src="/Letimg/Component2.svg" alt="Customization" className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] object-contain" />
                  ),
                  title: "Quality Assurance",
                  desc: "Every project is unique. We provide tailored solutions that accurately address your specific business requirements and align seamlessly with your goals.",
                  bg: "#EEEAFF", // Light green
                },
                {
                  icon: (
                    <img src="/Letimg/Component1.svg" alt="Customization" className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] object-contain" />
                  ),
                  title: "Support & Maintenance",
                  desc: "Every project is unique. We provide tailored solutions that accurately address your specific business requirements and align seamlessly with your goals.",
                  bg: "#FFEAED", // Light green
                },
              ].map((card, index) => {
                const isExpanded = expandedCard === index;
                return (
                  <div
                    key={index}
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    className={`group relative overflow-hidden cursor-pointer rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col hover:shadow-sm transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-none snap-start ${isExpanded ? 'h-[420px] sm:h-[450px] w-[90vw] sm:w-[600px] lg:w-[850px] shadow-md' : 'h-[300px] sm:h-[350px] w-[85vw] sm:w-[400px] lg:w-[450px] hover:-translate-y-1'}`}
                    style={{ backgroundColor: card.bg }}
                  >
                    {/* Header: Icon + Title smoothly animating via absolute positioning */}
                    <div className={`relative w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shrink-0 ${isExpanded ? 'h-[52px] mb-8' : 'h-[120px] mb-6'}`}>
                      <div className="absolute top-0 left-0 w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-sm z-10">
                        {card.icon}
                      </div>
                      <h3
                        className="absolute top-0 left-0 h-[52px] font-bold text-gray-900 tracking-tight flex items-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left text-[24px] sm:text-[32px] lg:text-[32px]"
                        style={{
                          transform: isExpanded ? 'translate(64px, 0px) scale(1.15)' : 'translate(0px, 72px) scale(1)',
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Dynamic expanded description smoothly fading & expanding */}
                    <div className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden flex flex-col w-full ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#323A3E] leading-[1.6] lg:leading-[1.7] font-regular lg:pr-8">
                        {card.desc}
                      </p>
                    </div>

                    {/* Spacer to keep button at the bottom consistently */}
                    <div className="flex-grow"></div>

                    {/* Learn More Button */}
                    <div
                      className={`mt-6 mb-2 flex items-center justify-start gap-1 font-medium transition-all w-fit ${isExpanded ? 'text-[#32B9E9] group-hover:text-[#2da8d5]' : 'text-gray-900 group-hover:text-[#32B9E9]'}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-3 mt-6 lg:mt-10 pr-[24px] lg:pr-0">
              <button
                onClick={() => scrollSection4("left")}
                disabled={!canScrollLeft}
                className={`w-[42px] h-[42px] rounded-full border border-gray-200 flex items-center justify-center transition-all focus:outline-none shadow-sm ${!canScrollLeft ? 'bg-white text-gray-400 opacity-80 cursor-not-allowed' : 'bg-white hover:bg-gray-50 text-gray-500 cursor-pointer'}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button
                onClick={() => scrollSection4("right")}
                disabled={!canScrollRight}
                className={`w-[42px] h-[42px] rounded-full border border-gray-200 flex items-center justify-center transition-all focus:outline-none shadow-sm ${!canScrollRight ? 'bg-white text-gray-400 opacity-80 cursor-not-allowed' : 'bg-white hover:bg-gray-50 text-gray-500 cursor-pointer'}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — Technology Stack
      ══════════════════════════════════════════════════════════════ */}
        <TechStackSection />
      </main>

      {isModalOpen && (
        <ConsultationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

/* ── Technology Stack Section (separate client component for local state) ── */
function TechStackSection() {
  const [activeTab, setActiveTab] = useState("web");

  const categories = [
    { id: "web", label: "Web technologies" },
    { id: "app", label: "App Technologies" },
    { id: "desktop", label: "Desktop" },
    { id: "cloud", label: "Cloud Database" },
  ];

  const techData: Record<string, { sections: { label: string; tools: { name: string; icon: string }[] }[] }> = {
    web: {
      sections: [
        {
          label: "Front-end",
          tools: [
            { name: "HTML", icon: "/images/Html 5.svg" },
            { name: "Java Script", icon: "/images/Js.svg" },
            { name: "React js", icon: "/images/react.svg" },
            { name: "Angular", icon: "/images/angular.svg" },
          ],
        },
        {
          label: "Back-end",
          tools: [
            { name: "Node js", icon: "/images/nodejs.svg" },
            { name: "Type Script", icon: "/images/Typescript.svg" },
            { name: "Java", icon: "/images/java1.svg" },
            { name: "Python", icon: "/images/python.svg" },
          ],
        },
      ],
    },
    app: {
      sections: [
        {
          label: "Mobile",
          tools: [
            { name: "React Native", icon: "/images/react.svg" },
            { name: "Angular", icon: "/images/angular.svg" },
          ],
        },
      ],
    },
    desktop: {
      sections: [
        {
          label: "Desktop",
          tools: [
            { name: "Node js", icon: "/images/nodejs.svg" },
            { name: "Java", icon: "/images/java1.svg" },
          ],
        },
      ],
    },
    broker: {
      sections: [
        {
          label: "Messaging",
          tools: [
            { name: "Node js", icon: "/images/nodejs.svg" },
            { name: "Python", icon: "/images/python.svg" },
          ],
        },
      ],
    },
    cloud: {
      sections: [
        {
          label: "Cloud",
          tools: [
            { name: "Node js", icon: "/images/nodejs.svg" },
            { name: "Python", icon: "/images/python.svg" },
          ],
        },
      ],
    },
  };

  return (
    <section className="px-4 text-black font-THICCCBOI max-w-7xl mx-auto mt-[80px]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-0 lg:justify-between w-full">

        {/* Left — heading + category nav */}
        <div className='max-w-7xl lg:w-[45%] border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 pb-10 lg:pb-0 lg:pr-10'>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-8">
            The Right Tools for Your Fintech App
          </h2>

          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="text-left text-[20px] font-normal px-4 py-2.5 rounded-[5px] transition-all duration-200"
                style={{
                  background: activeTab === cat.id ? "linear-gradient(#32B9E9,#32B9E9)" : "transparent",
                  color: activeTab === cat.id ? "#fff" : "#374151",
                  fontWeight: activeTab === cat.id ? 500 : 500,
                }}
              >
                • {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right — tech icons */}
        <div className="flex flex-col gap-10 lg:gap-[80px] lg:w-[50%]">
          {techData[activeTab]?.sections.map((sec) => (
            <div key={sec.label}>
              {/* Section label with leading arrow */}
              <div className="flex items-center gap-3 lg:gap-[20px] mb-5 px-0 lg:px-0">
                <span className="text-[#32B9E9] text-[13px] font-bold">▶</span>
                <span className="text-[20px] font-semibold text-[#010F14]">{sec.label}</span>
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-[40px] px-0 lg:px-0">
                {sec.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm p-2">
                      <img src={tool.icon} alt={tool.name} className="w-9 h-9 object-contain" />
                    </div>
                    <p className="text-[18px] text-black text-center font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      <OurProjectsSection />
      <CompaniesLove />
    </section>
  );
}

/* ── Reusable inner phone UI ─────────────────────────────────────── */
function PhoneMockContent({
  accent,
  label,
  amount,
}: {
  accent: string;
  label: string;
  amount: string;
}) {

  return (
    <div className="absolute inset-0 flex flex-col p-3 text-white">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-white text-[14px] font-bold"
        style={{ background: accent }}
      >
        ₿
      </div>
      <p className="text-[10px] opacity-60">{label}</p>
      <p className="text-[18px] font-extrabold mb-2">{amount}</p>
      <div className="flex-1 rounded-xl" style={{ background: `${accent}22` }}>
        {/* Mini chart bars */}
        <div className="flex items-end gap-1 h-full p-2">
          {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{ height: `${h}%`, background: accent, opacity: 0.7 + i * 0.04 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
