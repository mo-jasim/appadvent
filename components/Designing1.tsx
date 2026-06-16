'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

/* ─── Stages cycling through the 6 arc nodes ─── updated*/
const STAGES = [
    {
        num: 1,
        img: "/images/Group1.svg",
        label: 'Planning',
        title: 'Planning',
        desc: 'We map out the complete product vision before a single screen or line of code is created. From defining user flows and business requirements to selecting the right technology and timeline, this stage builds the foundation that prevents confusion, delays, and costly revisions later.'
    },
    {
        num: 2,
        img: "/images/Group3.svg",
        label: 'Design',
        title: 'Design',
        desc: 'We turn ideas into clean, user-focused experiences that are simple to navigate and visually impactful. Every layout, interaction, and interface element is designed to improve usability, strengthen brand identity, and create a seamless customer journey.'
    },
    {
        num: 3,
        img: "/images/Group.svg",
        label: 'Development',
        title: 'Development',
        desc: 'This is where the product comes to life. We build scalable, high-performance websites and applications using modern technologies while ensuring speed, security, responsiveness, and smooth functionality across all devices.'
    },
    {
        num: 4,
        img: "/images/Group4.svg",
        label: 'Testing',
        title: 'Testing',
        desc: 'Before launch, every feature is carefully tested to identify bugs, performance issues, and usability gaps. We ensure the product runs smoothly, loads efficiently, and delivers a reliable experience under real-world conditions.'
    },
    {
        num: 5,
        img: "/images/Group2.svg",
        label: 'Launch',
        title: 'Launch',
        desc: 'Once everything is optimized and approved, we deploy the product live with a structured rollout process. From final checks to deployment support, we ensure a smooth launch without disruption to users or business operations.'
    },
    {
        num: 6,
        img: "/images/Group5.svg",
        label: 'Maintenance',
        title: 'Maintenance',
        desc: 'Launching is not the finish line. We continuously monitor, update, and improve the product to maintain performance, security, compatibility, and long-term growth as your business evolves.'
    },
];

export default function Designing1() {
    const [tick, setTick] = useState(0);
    const [totalTicks, setTotalTicks] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [cycleId, setCycleId] = useState(0);
    const [resetTimer, setResetTimer] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsVisible(entries[0].isIntersecting);
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Incrementing cycleId remounts the DOM cleanly for CSS animations to replay effortlessly from 0
            setCycleId(c => c + 1);
        } else {
            setTick(0);
            setTotalTicks(0);
        }
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const id = setInterval(() => {
            setTick(t => (t + 1) % 6);
            setTotalTicks(t => t + 1);
        }, 10000);
        return () => clearInterval(id);
    }, [isVisible, resetTimer]);

    const topVisible = totalTicks > 0;
    const topStage = STAGES[(tick - 1 + 6) % 6];
    const midStage = STAGES[tick];
    const botStage = STAGES[(tick + 1) % 6];

    return (
        <section ref={sectionRef} className="relative w-full font-THICCCBOI" style={{ marginTop: "80px", marginBottom: "80px" }}>

            {/* keyframes injected once */}
            <style>{`
        @keyframes slideUpIn {
          0%   { transform: translateY(32px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        .slide-up-in { animation: slideUpIn 0.55s cubic-bezier(0.4,0,0.2,1) both; }

        @keyframes slideUpOut {
          0%   { transform: translateY(0);     opacity: 1; }
          100% { transform: translateY(-32px); opacity: 0; }
        }
        .slide-up-out { animation: slideUpOut 0.45s cubic-bezier(0.4,0,0.2,1) both; }

        @keyframes fillProgress {
          0%   { stroke-dashoffset: 301.59; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

            <div className="max-w-[1240px] mx-auto relative z-10 px-2 sm:px-4 lg:px-6">
                {/* Huge Faint Watermark Text */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[50px]">
                    OUR DEVELOPMENT PROCESS
                </div>
                <h2 className="relative text-[32px] md:text-[42px] font-bold text-center text-gray-900 tracking-tight">
                    Our Development Process
                </h2>

                {/* SWAPPED LAYOUT: LEFT GRAPHIC, RIGHT TEXT */}
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center gap-8 lg:gap-16 max-w-[1100px] mx-auto w-full">

                    {/* ─── LEFT GRAPHIC ─── */}
                    <div className="w-full lg:w-[420px] shrink-0 flex justify-center h-[350px] sm:h-[450px] lg:h-[620px] relative z-10">
                        <div
                            className="relative transform scale-[0.55] sm:scale-[0.75] lg:scale-100 origin-top"
                            style={{ width: 380, height: 620 }}
                        >

                            {/* STATIC DASHED CIRCLE (Fades out on the left) */}
                            <div
                                className="absolute pointer-events-none left-[-365px] md:left-[-550px] lg:left-[-365px] 2xl:left-[-465px]"
                                style={{
                                    top: 10,
                                    width: 600,
                                    height: 600,
                                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 35%, black 60%)',
                                    maskImage: 'linear-gradient(to right, transparent 0%, transparent 35%, black 60%)'
                                }}
                            >
                                <svg className="absolute pointer-events-none top-0 left-0 w-full h-full" viewBox="0 0 600 600">
                                    <circle cx="300" cy="300" r="300" fill="none" stroke="#5cb8f0" strokeWidth="2.5" strokeDasharray="8 8" />
                                </svg>
                            </div>

                            {/* Rotating Wheel Container */}
                            <div
                                key={`wheel-cycle-${cycleId}`}
                                className="absolute transition-transform duration-[1000ms] ease-in-out pointer-events-none left-[-365px] md:left-[-550px] lg:left-[-365px] 2xl:left-[-465px]"
                                style={{
                                    top: 10,     // 310 (CY) - 300 (R)
                                    width: 600,
                                    height: 600,
                                    transform: `rotate(${-totalTicks * 60}deg)`,
                                    transformOrigin: '50% 50%'
                                }}
                            >
                                {/* ── ARROWS ── */}
                                <svg
                                    className="absolute pointer-events-none top-0 left-0 w-full h-full"
                                    viewBox="0 0 600 600"
                                >
                                    {/* Arrow heads pointing UPWARDS (counter-clockwise) on the track */}
                                    {Array.from({ length: 6 }).map((_, i) => {
                                        let pos = (i - tick + 1) % 6;
                                        if (pos < 0) pos += 6;

                                        const arrowOpacity = (pos === 0 || pos === 1) ? 1 : 0;

                                        return (
                                            <g key={i}
                                                className="transition-opacity duration-[1000ms] ease-in-out"
                                                style={{ opacity: arrowOpacity }}
                                                transform={`translate(300, 300) rotate(${i * 60 + 30}) translate(300, 0) rotate(90)`}>
                                                <polygon points="8,6 -8,0 8,-6" fill="#5cb8f0" />
                                            </g>
                                        );
                                    })}
                                </svg>

                                {/* ── ALL ARC NODES (Rotating with the wheel!) ── */}
                                {STAGES.map((stage, i) => {
                                    let pos = (i - tick + 1) % 6;
                                    if (pos < 0) pos += 6;

                                    const isMid = pos === 1;

                                    let opacity = 1;
                                    if (pos === 5 || pos === 4 || pos === 3) opacity = 0;
                                    if (totalTicks === 0 && pos === 0) opacity = 0;

                                    // Fixed circular position on the wheel context
                                    const angleDeg = i * 60;
                                    const angleRad = (angleDeg * Math.PI) / 180;
                                    const x = Math.round((300 + 300 * Math.cos(angleRad)) * 100) / 100;
                                    const y = Math.round((300 + 300 * Math.sin(angleRad)) * 100) / 100;

                                    return (
                                        <div
                                            key={`arc-node-${stage.num}`}
                                            className="absolute z-20 transition-opacity duration-[1000ms] ease-in-out"
                                            style={{
                                                left: `${x}px`,
                                                top: `${y}px`,
                                                opacity: opacity,
                                                zIndex: isMid ? 30 : 20,
                                                pointerEvents: opacity === 1 ? 'auto' : 'none'
                                            }}
                                        >
                                            {/* Counter-rotate this inner wrapper to keep content upright */}
                                            <div
                                                className="absolute flex items-center justify-center transition-transform duration-[1000ms] ease-in-out"
                                                style={{
                                                    transform: `translate(-50%, -50%) rotate(${totalTicks * 60}deg)`,
                                                }}
                                            >
                                                {/* Consistent 100x100 container so svg and inner-circles stay centered during scale */}
                                                <div
                                                    className={`relative flex items-center justify-center rounded-full transition-colors duration-[1000ms] w-[100px] h-[100px] cursor-pointer ${isMid ? 'bg-[#eef8fd] shadow-md' : 'bg-transparent'}`}
                                                    onClick={() => {
                                                        if (i !== tick) {
                                                            let diff = i - tick;
                                                            if (diff > 3) diff -= 6;
                                                            if (diff < -3) diff += 6;
                                                            setTick(i);
                                                            setTotalTicks(t => t + diff);
                                                            setResetTimer(r => r + 1);
                                                        }
                                                    }}
                                                >

                                                    {/* Outer dashed ring + Progress filling ring */}
                                                    <div className={`absolute inset-0 transition-opacity duration-[1000ms] ${isMid ? 'opacity-100' : 'opacity-0'}`}>
                                                        <svg width="100" height="100" className="absolute inset-0 -rotate-90 pointer-events-none">
                                                            <circle cx="50" cy="50" r="48" fill="none" stroke="#5cb8f0" strokeWidth="2.5" strokeDasharray="6 6" />
                                                            <circle
                                                                cx="50" cy="50" r="48"
                                                                fill="none" stroke="#34b2ed" strokeWidth="4"
                                                                strokeDasharray="301.59"
                                                                strokeDashoffset={pos === 0 ? 0 : 301.59}
                                                                style={isMid ? { animation: "fillProgress 10s linear forwards" } : { transition: "stroke-dashoffset 0.5s ease-in-out" }}
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    {/* Inner solid circle (Always realistically sized) */}
                                                    <div className={`bg-[#34b2ed] rounded-full flex items-center justify-center text-white text-[26px] font-bold shadow-lg shadow-blue-300/50 overflow-hidden relative z-10 transition-all duration-[1000ms] ${isMid ? 'w-[72px] h-[72px]' : 'w-[70px] h-[70px]'}`}>
                                                        {stage.num}
                                                    </div>

                                                    {/* Label + Pen Icon */}
                                                    <div
                                                        className={`absolute top-1/2 right-[115px] -translate-y-1/2 flex flex-col items-center transition-all duration-[1000ms] ${isMid ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
                                                    >
                                                        {/* icons */}
                                                        <div className="mb-[-8px] z-30 pointer-events-none">
                                                            {stage.img && (
                                                                <Image src={stage.img} width={65} height={65} alt={stage.label} className="object-contain" />
                                                            )}
                                                        </div>

                                                        {/* Animated label text */}
                                                        <div className="text-[34px] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#17387c] via-[#85348b] to-[#dc243c] mb-12 whitespace-nowrap">
                                                            {stage.label}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                    {/* ─── RIGHT TEXT (Dynamic) ─── */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-xl relative z-20 mx-4 lg:mx-0 flex items-center">

                        {/* The single active stage text with animation based on tick */}
                        <div key={`text-${tick}-cycle-${cycleId}`} className="flex flex-col w-full slide-up-in">
                            <h3 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-[#1e293b] mb-4 sm:mb-6 leading-tight flex items-baseline">
                                <span className="text-[#34b2ed] text-[36px] sm:text-[46px] lg:text-[56px] mr-4 opacity-50">
                                    0{midStage.num}
                                </span>
                                {midStage.title}
                            </h3>
                            <p className="text-[#323A3E] text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed border-l-[3px] border-[#34b2ed] pl-4 sm:pl-6 rounded-sm bg-blue-50/30 py-4">
                                {midStage.desc}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
