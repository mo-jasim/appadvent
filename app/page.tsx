"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LogoMarquee from '@/components/LogoMarquee'
import OurProjectsSection from './services/website-designing-development/Our-Projects-Section';
import CompaniesLove from './services/website-designing-development/Companies-Love';
import Link from 'next/link';
import ConsultationModal from '@/components/ConsultationModal';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Designing1 from '@/components/Designing1';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const servicesData = [
  { href: "services/website-designing-development", title: "Website Designing & Development", desc: "We specialize in creating visually appealing and highly functional websites that meet your business goals...", icon: "/images/Ico1.svg" },
  { href: "services/mobile-app-development", title: "Mobile App Development", desc: "We develop mobile apps for iOS and Android using Swift, Kotlin, and React Native. Our secure apps ensure a great user experience...", icon: "/images/Ico2.svg" },
  { href: "services/staff-augmentation", title: "Staff Augmentation", desc: "We offers staff augmentation services to help you quickly scale your team with highly skilled professionals...", icon: "/images/Ico3.svg" },
  { href: "services/digital-marketing", title: "Digital Marketing", desc: "We offer SEO, social media, copywriting, and keyword optimization to boost your website's ranking and audience reach...", icon: "/images/Ico4.svg" },
  { href: "services/Software-Maintenancepage", title: "Support & Maintenance", desc: "We provide ongoing support and maintenance to ensure your web and mobile applications operate ...", icon: "/images/Ico5.svg" },
  { href: "services/Custom-Based-Services", title: "Custom Based Services", desc: "Our services meet your business needs with tailored solutions. We develop software that enhances productivity...", icon: "/images/Ico6.svg" }
];

const allIndustries = [
  {
    title: "Fintech & Crypto",
    href: "/industries/Fintech-Crypto",
    bg: "bg-[#F4FAFD]",
    icon: "/images/Group 1.svg",
  },
  {
    title: "Retail & E-commerce",
    href: "/industries/Ecommerce",
    bg: "bg-[#FDFAEA]",
    icon: "/images/Group 2.svg",
  },
  {
    title: "Healthcare",
    href: "/industries/Health-&-pharmacy",
    bg: "bg-[#FDF1F3]",
    icon: "/images/Group 3.svg",
  },
  {
    title: "Finance & Banking",
    href: "/industries/Finance-&-Banking",
    bg: "bg-[#F2FCF9]",
    icon: "/images/Finance.svg",
  },
  {
    title: "Social & Community",
    href: "/industries/Social-&-Community",
    bg: "bg-[#F4FAFD]",
    icon: "/images/social.svg",
  },
  {
    title: "Media & Entertainment",
    href: "/industries/Media-&-Entertainment",
    bg: "bg-[#FDFAEA]",
    icon: "/images/media.svg",
  },
  {
    title: "Consumer Internet",
    href: "/industries/Consumer-internet",
    bg: "bg-[#FDF1F3]",
    icon: "/images/iconoir_internet.svg",
  }
];

/* ═══════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════ */

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};

/* ═══════════════════════════════════════════════════════
   FLOATING BACKGROUND ORBS — gives depth & motion feel
   ═══════════════════════════════════════════════════════ */

const FloatingOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
    {[
      { size: 200, color: 'rgba(50,185,233,0.12)', top: '10%', left: '5%', dur: 18 },
      { size: 280, color: 'rgba(50,185,233,0.08)', top: '55%', left: '80%', dur: 22 },
      { size: 160, color: 'rgba(100,200,240,0.1)', top: '30%', left: '65%', dur: 16 },
      { size: 220, color: 'rgba(50,185,233,0.06)', top: '75%', left: '15%', dur: 20 },
      { size: 140, color: 'rgba(80,190,235,0.09)', top: '15%', left: '88%', dur: 14 },
    ].map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: orb.size,
          height: orb.size,
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          top: orb.top,
          left: orb.left,
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 40, -30, 20, 0],
          y: [0, -35, 25, -15, 0],
        }}
        transition={{
          duration: orb.dur,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════════
   ANIMATED COUNTER — counts from 0 to target on scroll
   ═══════════════════════════════════════════════════════ */

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ═══════════════════════════════════════════════════════
   3D TILT CARD — subtle perspective on mouse move
   ═══════════════════════════════════════════════════════ */

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const xVal = useMotionValue(0);
  const yVal = useMotionValue(0);
  const rotateX = useSpring(useTransform(yVal, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(xVal, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    xVal.set((e.clientX - rect.left) / rect.width - 0.5);
    yVal.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    xVal.set(0);
    yVal.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════
   HOMEPAGE COMPONENT
   ═══════════════════════════════════════════════════════ */

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const [imageKeys, setImageKeys] = useState<number[]>(Array(6).fill(0));
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parallax scroll for industries image
  const industriesRef = useRef<HTMLElement>(null);
  const { scrollYProgress: industriesScroll } = useScroll({
    target: industriesRef,
    offset: ["start end", "end start"],
  });
  const industriesImageY = useTransform(industriesScroll, [0, 1], ["-10%", "10%"]);

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

  // Hero title words for stagger animation
  const heroWords = "Custom Application & Website Development Services".split(" ");

  return (
    <main className="relative w-full ">
      {/* Background that spans the entire page */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/polygon.png')", zIndex: -1 }}
      ></div>

      {/* Floating gradient orbs for depth */}
      <FloatingOrbs />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative w-full py-10 md:py-16 overflow-hidden font-THICCCBOI">

        <div className="relative z-10">

          {/* Hero Title — word-by-word stagger with blur reveal */}
          <motion.p
            className="max-w-5xl mx-auto px-4 text-black font-bold text-[32px] sm:text-[40px] md:text-[56px] text-center leading-tight  font-extrabold"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Get a free consultation button — spring bounce entrance */}
          <motion.div
            className="flex items-center justify-center mt-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="
                text-[#32B9E9] border border-[#32B9E9] bg-white 
                px-5 py-2 sm:px-6 sm:py-2.5 
                rounded-full text-sm sm:text-base cursor-pointer
                hover:bg-[#32B9E9] hover:text-white transition-colors duration-300
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a free Consultation
            </motion.button>
          </motion.div>

          {/* Logo marquee — fade in */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <LogoMarquee />
          </motion.div>

          {/* ═══════════════ STATS — Animated Counters ═══════════════ */}
          <motion.div
            className="
              grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4
              gap-4 sm:gap-6 mt-12 md:mt-16
              w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
            "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {[
              { value: 4, suffix: "+", label: "Years of experience" },
              { value: 20, suffix: "+", label: "Team members" },
              { value: 25, suffix: "+", label: "Product Delivered" },
              { value: 4, suffix: "+", label: "Rating on Clutch" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group w-full max-w-[305px] mx-auto"
              >
                <TiltCard className="h-full">
                  {/* Gradient border — same as service cards */}
                  <div className="relative h-full rounded-2xl p-[1.5px] transition-all duration-500 backdrop-blur-[10px] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-white group-hover:to-white">
                    <div
                      className="relative h-full rounded-[14.5px] flex flex-col items-center justify-center min-h-[140px] py-4 sm:py-6 overflow-hidden transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Shimmer sweep on hover */}
                      <div className="absolute inset-0 overflow-hidden rounded-[14.5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          style={{ animation: "shimmer 2s ease-in-out infinite" }}
                        />
                      </div>

                      {/* Top accent line */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                      <p className="font-bold text-[28px] sm:text-[32px] group-hover:text-[#32B9E9] transition-colors duration-300" style={{ transform: "translateZ(20px)" }}>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-[14px] sm:text-[16px] text-gray-700 text-center">{stat.label}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ EXPLORE OUR SERVICES ═══════════════ */}
      <section className="mb-[80px] mt-[60px] w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <motion.p
          className="max-w-2xl mx-auto text-black font-bold text-[32px] md:text-[40px] leading-tight text-center font-THICCCBOI"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Explore our team services
        </motion.p>

        <motion.p
          className="max-w-7xl mx-auto text-[#061C3D] pt-5 text-center text-[16px] md:text-[18px] font-THICCCBOI"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          we blend innovation with technical expertise to provide exceptional web and app development solutions.
        </motion.p>

        {/* Service Cards — premium glassmorphism + gradient borders + shimmer */}
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes iconFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes borderRotate {
            0% { --angle: 0deg; }
            100% { --angle: 360deg; }
          }
        `}</style>
        <motion.div
          className="mt-10 grid gap-8 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.92 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                  },
                },
              }}
            >
              <TiltCard className="h-full">
                <Link href={service.href} className="block h-full group" onMouseEnter={() => handleHover(index)}>
                  {/* Outer glow wrapper — gradient border on hover */}
                  <div
                    className="relative h-full rounded-2xl p-[1.5px] transition-all duration-500 bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]"
                  >
                    {/* Inner card */}
                    <div
                      className="relative h-full min-h-[380px] rounded-[14.5px] bg-white px-7 pt-10 pb-5 flex flex-col items-center justify-between overflow-hidden transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Shimmer sweep on hover */}
                      <div className="absolute inset-0 overflow-hidden rounded-[14.5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          style={{
                            animation: "shimmer 2s ease-in-out infinite",
                          }}
                        />
                      </div>

                      {/* Top accent line */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full" />

                      {/* Icon with animated circle background */}
                      <div className="relative flex flex-col items-center flex-grow" style={{ transform: "translateZ(30px)" }}>
                        <div className="relative mb-5">
                          {/* Outer ring */}
                          <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-[#32B9E9]/0 group-hover:border-[#32B9E9]/25 transition-all duration-700 group-hover:rotate-[60deg]" />
                          {/* Gradient circle behind icon */}
                          <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#E8F7FC] to-[#F0FBFF] group-hover:from-[#D4F0FA] group-hover:to-[#E0F5FC] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(50,185,233,0.2)]">
                            <div style={{ animation: "iconFloat 3s ease-in-out infinite" }}>
                              <Image
                                src={mounted && imageKeys[index] ? `${service.icon}?v=${imageKeys[index]}` : service.icon}
                                alt={service.title}
                                width={48}
                                height={48}
                                className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                                priority
                              />
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <p className="text-[#1a1a2e] font-bold text-center text-[19px] leading-snug group-hover:text-[#0d2a3a] transition-colors duration-300">
                          {service.title}
                        </p>

                        {/* Divider */}
                        <div className="w-10 h-[2px] bg-[#32B9E9]/30 group-hover:w-16 group-hover:bg-[#32B9E9]/60 rounded-full mt-3 mb-3 transition-all duration-500" />

                        {/* Description */}
                        <p className="text-[#5a6270] text-center text-[14px] leading-relaxed">
                          {service.desc}
                        </p>
                      </div>

                      {/* Learn More — gradient pill button */}
                      <div className="mt-6 mb-1" style={{ transform: "translateZ(20px)" }}>
                        <span
                          className="
                            inline-flex items-center gap-1.5
                            px-5 py-2 rounded-full
                            text-[13px] font-semibold tracking-wide
                            text-[#32B9E9] bg-[#F0F9FD]
                            group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#32B9E9] group-hover:to-[#2193b0]
                            group-hover:shadow-[0_4px_15px_rgba(50,185,233,0.35)]
                            transition-all duration-500
                          "
                        >
                          Learn More
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Development Process */}
      <Designing1 />

      {/* ═══════════════ INDUSTRIES — PARALLAX + SLIDE ═══════════════ */}
      <section ref={industriesRef} className="w-full relative lg:pb-[80px]">
        {/* Full-bleed 50/50 background */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[764px]">
          {/* Parallax image */}
          <div className="lg:w-1/3 w-full h-[300px] lg:h-full relative overflow-hidden group">
            <motion.div className="absolute inset-[-15%]" style={{ y: industriesImageY }}>
              <Image
                src="/images/img7.png"
                alt="Industry"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Premium overlay for image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#002434]/80 via-transparent to-transparent lg:bg-gradient-to-t lg:from-[#002434]/60" />
            </motion.div>
          </div>
          {/* Industries text — premium styling */}
          <div className="lg:w-2/3 w-full bg-[#002434] relative text-white flex flex-col px-6 py-16 lg:py-36 lg:px-36 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#32B9E9]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[10%] w-[300px] h-[300px] bg-[#6DD5FA]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <motion.h2
                className="text-[32px] md:text-[52px] font-bold mb-4 md:mb-6 leading-[1.1] font-THICCCBOI"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Industries We <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32B9E9] to-[#6DD5FA]">Cater To</span>
              </motion.h2>
              <motion.p
                className="text-[#a1b8c1] text-[18px] md:text-[22px] leading-relaxed max-w-[650px] font-medium"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                We blend innovation with technical expertise to provide exceptional web and app development solutions.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Floating Industry Cards — Continuous Infinite Marquee */}
        <div className="relative z-20 mt-8 lg:-mt-[350px] w-full pb-12 lg:pb-0 overflow-hidden group">
          <style>{`
            @keyframes infiniteMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-infinite-marquee {
              animation: infiniteMarquee 35s linear infinite;
            }
            .group:hover .animate-infinite-marquee {
              animation-play-state: paused !important;
            }
          `}</style>

          <div className="flex w-max animate-infinite-marquee pt-4 pb-8">
            {[...allIndustries, ...allIndustries].map((item, i) => (
              <div
                key={i}
                className="w-[85vw] sm:w-[320px] lg:w-[350px] shrink-0 pr-6 lg:pr-8"
              >
                <TiltCard className="h-full">
                  <Link href={item.href} className="block w-full group h-[270px] relative">

                    {/* Premium Glowing Border Layer */}
                    <div
                      className="absolute inset-0 rounded-[24px] overflow-hidden bg-white/20 group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-white group-hover:to-[#32B9E9] transition-all duration-700 z-0 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                    />

                    {/* Content Layer (3D Context) */}
                    <div
                      className={`relative z-10 h-full m-[1.5px] rounded-[22.5px] ${item.bg} p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 overflow-hidden group-hover:bg-white`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Shimmer sweep */}
                      <div className="absolute inset-0 overflow-hidden rounded-[22.5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent" style={{ animation: "shimmer 2s ease-in-out infinite" }} />
                      </div>

                      {/* Soft glow corner */}
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#32B9E9]/10 rounded-full blur-2xl group-hover:bg-[#32B9E9]/25 transition-all duration-700 pointer-events-none" />

                      {/* Icon & Title */}
                      <div className="flex flex-col items-start relative z-10" style={{ transform: "translateZ(30px)" }}>
                        <div className="relative mb-6">
                          {/* Floating icon animation on hover */}
                          <div className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-2 group-hover:scale-110">
                            <Image src={item.icon} alt={item.title} width={60} height={60} className="relative z-10 drop-shadow-sm" />
                            {/* Shadow under icon */}
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-[#002434]/10 rounded-full blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>
                        </div>
                        <p className={`font-bold text-[19px] lg:text-[22px] text-[#0A1A2E] leading-tight transition-colors duration-300 group-hover:text-[#32B9E9] ${item.title === 'Retail & E-commerce'}`}>
                          {item.title}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="relative z-10 mt-4 flex items-center gap-2 text-[#32B9E9] text-[15px] font-bold transition-all duration-300" style={{ transform: "translateZ(15px)" }}>
                        <span className="group-hover:tracking-wider transition-all duration-300">Explore</span>
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#32B9E9]/10 group-hover:bg-[#32B9E9] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-[0_4px_10px_rgba(50,185,233,0.4)]">
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects section — viewport fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <OurProjectsSection />
      </motion.div>

      {/* Testimonials — viewport fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <CompaniesLove />
      </motion.div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  )
}

export default HomePage