'use client';
import React, { useEffect, useState, useRef } from 'react';

/* ─── Stages cycling through the 6 arc nodes ─── updated*/
const STAGES = [
    {
        num: 1,
        label: 'Designing',
        title: 'Business Goal Breakdown',
        desc: 'We identify what you\'re actually trying to achieve (not just what you say you want) — whether it\'s increasing conversions, automating processes, or launching a new product.'
    },
    {
        num: 2,
        label: 'Web',
        title: 'User & Market Understanding',
        desc: 'We analyze your target users, their behavior, and expectations to ensure the product solves real problems instead of just looking good.'
    },
    {
        num: 3,
        label: 'App',
        title: 'Feature & Scope Definition',
        desc: 'We list down all core features, prioritize them, and eliminate unnecessary complexity to avoid scope creep and wasted budget.'
    },
    {
        num: 4,
        label: 'Web App',
        title: 'Technical Feasibility Check',
        desc: 'We evaluate the best tech stack, integrations, and constraints early—so you don\'t face expensive surprises later.'
    },
    {
        num: 5,
        label: 'Website',
        title: 'Agile Development Strategy',
        desc: 'We plan the sprint cycles, define milestones, and prepare the development environment allowing for rapid iterations and continuous feedback.'
    },
    {
        num: 6,
        label: 'Application',
        title: 'Quality Assurance & Launch',
        desc: 'Rigorous testing is performed to ensure the solution is bug-free, highly performant, and secure before we deploy it to live production environments.'
    },
];

export default function Designing1() {
    const [tick, setTick] = useState(0);
    const [totalTicks, setTotalTicks] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [cycleId, setCycleId] = useState(0);

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
        if (!isVisible) {
            setTick(0);
            setTotalTicks(0);
            return;
        }

        // Incrementing cycleId remounts the DOM cleanly for CSS animations to replay effortlessly from 0
        setCycleId(c => c + 1);

        const id = setInterval(() => {
            setTick(t => (t + 1) % 6);
            setTotalTicks(t => t + 1);
        }, 10000);
        return () => clearInterval(id);
    }, [isVisible]);

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
                {/* Watermark */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[30px] sm:text-[50px] md:text-[90px] lg:text-[110px] font-black text-[#f1f5f9] whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[50px] ml-[50px]">
                    DEVELOPMENT PROCESS
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

                            {/* Rotating Wheel Container */}
                            <div
                                key={`wheel-cycle-${cycleId}`}
                                className="absolute transition-transform duration-[1000ms] ease-in-out pointer-events-none"
                                style={{
                                    left: -465,  // -165 (CX) - 300 (R)
                                    top: 10,     // 310 (CY) - 300 (R)
                                    width: 600,
                                    height: 600,
                                    transform: `rotate(${-totalTicks * 60}deg)`,
                                    transformOrigin: '50% 50%'
                                }}
                            >
                                {/* ── FULL DASHED CIRCLE ── */}
                                <svg
                                    className="absolute pointer-events-none top-0 left-0 w-full h-full"
                                    viewBox="0 0 600 600"
                                >
                                    <circle cx="300" cy="300" r="300" fill="none" stroke="#5cb8f0" strokeWidth="2.5" strokeDasharray="8 8" />

                                    {/* Arrow heads pointing UPWARDS (counter-clockwise) on the track */}
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <g key={i} transform={`translate(300, 300) rotate(${i * 60 + 30}) translate(300, 0) rotate(90)`}>
                                            <polygon points="8,6 -8,0 8,-6" fill="#5cb8f0" />
                                        </g>
                                    ))}
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
                                                <div className={`relative flex items-center justify-center rounded-full transition-colors duration-[1000ms] w-[100px] h-[100px] ${isMid ? 'bg-[#eef8fd] shadow-md' : 'bg-transparent'}`}>

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
                                                        {/* Pen icon */}
                                                        <div className="mb-[-8px] z-30 pointer-events-none">
                                                            <svg width="65" height="65" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20 30 C20 15, 44 15, 44 30" stroke="#33a4f5" strokeWidth="1.5" strokeDasharray="3 3" />
                                                                <path d="M32 15 L32 40" stroke="#33a4f5" strokeWidth="2" />
                                                                <path d="M20 30 L32 15 L44 30" stroke="#33a4f5" strokeWidth="2" />
                                                                <path d="M15 30 L20 30" stroke="#33a4f5" strokeWidth="2" />
                                                                <path d="M44 30 L49 30" stroke="#33a4f5" strokeWidth="2" />
                                                                <path d="M28 40 L36 40 L32 52 Z" stroke="#e63946" strokeWidth="2" fill="none" />
                                                                <path d="M32 40 L32 48" stroke="#e63946" strokeWidth="2" />
                                                                <circle cx="20" cy="30" r="3.5" fill="#eef8fd" stroke="#e63946" strokeWidth="2" />
                                                                <circle cx="44" cy="30" r="3.5" fill="#eef8fd" stroke="#e63946" strokeWidth="2" />
                                                                <circle cx="32" cy="15" r="3.5" fill="#eef8fd" stroke="#33a4f5" strokeWidth="2" />
                                                            </svg>
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
                            <p className="text-[#64748b] text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed border-l-[3px] border-[#34b2ed] pl-4 sm:pl-6 rounded-sm bg-blue-50/30 py-4">
                                {midStage.desc}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
