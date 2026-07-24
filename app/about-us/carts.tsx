"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Carts() {
  const [mounted, setMounted] = useState(false);
  const [imageKeys, setImageKeys] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    setMounted(true);
    setImageKeys([Date.now(), Date.now(), Date.now()]);
  }, []);

  const handleHover = (index: number): void => {
    if (!mounted) return;
    setImageKeys((prev) => {
      const updated = [...prev];
      updated[index] = Date.now();
      return updated;
    });
  };

  const cardsData = [
    {
      title: "Our Mission",
      desc: "Our business at Appadvent aims to provide organizations with advanced and effective tools and programs that enhance their online presence and drive growth. The clients’ needs shall be prioritized and served to their fullest satisfaction to meet their business objectives.",
      icon: "/images/arrow.svg"
    },
    {
      title: "Our Vision",
      desc: "Appadvent's goal is to become known as a trustworthy outsourcing partner for companies looking to leverage technology for business growth. As the environment is always changing, our strategic goal is to evolve and become as inventive as we can continuously.",
      icon: "/images/crad2.svg"
    },
    {
      title: "Our Proficiency",
      desc: "Appadvent focuses on UI/UX design, mobile app development, website design, SaaS platforms, branding, and digital solutions that are scalable, performance-oriented, and aimed at improving user experience and increasing conversions.",
      icon: "/images/crad3.svg"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <motion.div
        className='mt-10 font-THICCCBOI grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mb-[80px] lg:mb-[120px] gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto '
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {cardsData.map((card, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.92 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
          >
            <div className="block h-full group" onMouseEnter={() => handleHover(idx)}>
              <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
                <div
                  className="relative h-full rounded-[18px] bg-white md:p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent"
                      style={{ animation: "shimmer 2s ease-in-out infinite" }}
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                  <div style={{ transform: "translateZ(30px)" }}>
                    <div className="relative mb-6 inline-flex self-start">
                      <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                      <div className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                        <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                          <Image
                            src={card.icon}
                            alt={card.title}
                            width={32}
                            height={32}
                            className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                    <h1 className="text-[20px] md:text-[24px] font-bold mt-4 md:mt-6 mb-3 group-hover:text-[#0d2a3a] transition-colors duration-300">
                      {card.title}
                    </h1>
                    <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mb-4 transition-all duration-500" />
                    <p className="text-[15px] sm:text-[16px] text-gray-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Carts;