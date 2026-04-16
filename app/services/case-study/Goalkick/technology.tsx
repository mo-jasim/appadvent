import Image from "next/image";


export default function Technology() {
    return (
        <section className="relative w-full mt-[200px] mb-[200px] font-THICCCBOI">
            {/* Mesh Gradient Background matching layout */}
            <div className="absolute top-[10%] left-[20%] w-[60%] h-[80%] bg-pink-100/50 blur-[120px] rounded-full z-[0]"></div>
            <div className="absolute top-[30%] left-[50%] w-[40%] h-[60%] bg-blue-100/40 blur-[120px] rounded-full z-[0]"></div>
            <div className="max-w-[1200px] mx-auto z-10 relative">
                {/* Watermark */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[30px] sm:text-[50px] md:text-[90px] lg:text-[110px] font-black text-[#939192]/20 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[50px]">
                    TECHNOLOGY STACK
                </div>
                <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-extrabold text-[#0f172a] text-center mb-10 md:mb-16 tracking-tight px-2">
                    Our Technology Stack In Goalkick application
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:flex-wrap gap-12 lg:gap-20">
                    {/* Front-end Section */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-8 pr-4">
                            <div className="w-[5px] h-[5px] rounded-full bg-[#0f172a]"></div>
                            <h3 className="text-[18px] font-bold text-[#0f172a]">Front-end</h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                            {[{ name: "HTML", icon: "/images/Html 5.svg" }, { name: "Java Script", icon: "/images/Js.svg" }, { name: "React js", icon: "/images/react.svg" }].map((tech, i) => (
                                <div key={i} className="w-[120px] h-[130px] rounded-2xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-md flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
                                    <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
                                        <Image src={tech.icon} alt={tech.name} width={56} height={56} className="object-contain" />
                                    </div>
                                    <span className="text-[14px] text-gray-700 font-medium">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back-end Section */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-8 pr-4">
                            <div className="w-[5px] h-[5px] rounded-full bg-[#0f172a]"></div>
                            <h3 className="text-[18px] font-bold text-[#0f172a]">Back-end</h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                            {[{ name: "Node js", icon: "/images/nodejs.svg" }, { name: "Type Script", icon: "/images/Typescript.svg" }, { name: "Python", icon: "/images/python.svg" }].map((tech, i) => (
                                <div key={i} className="w-[120px] h-[130px] rounded-2xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-md flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
                                    <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
                                        <Image src={tech.icon} alt={tech.name} width={56} height={56} className="object-contain" />
                                    </div>
                                    <span className="text-[14px] text-gray-700 font-medium">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
