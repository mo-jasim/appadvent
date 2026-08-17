import Image from "next/image";

interface TechnologyProps {
    projectName?: string;
    projectType?: "web" | "qms" | "mobile";
}

export default function Technology({
    projectName = "Goalkick application",
    projectType = "mobile"
}: TechnologyProps) {

    let frontendTech = [
        { name: "Dart", icon: "/images/custom-img8.svg" },
        { name: "Flutter", icon: "/images/custom-img9.svg" },
        { name: "BLoC/Cubit", icon: "/images/custom-img10.svg" },
        { name: "REST APIs", icon: "/images/Ico2.svg" },
        { name: "Dio", icon: "/images/custom-img11.svg" },
        { name: "Hive", icon: "/images/custom-img12.svg" },
        { name: "Firebase", icon: "/images/custom-img13.svg" },
        { name: "Git", icon: "/images/Ico5.svg" }
    ];

    let backendTech = [
        { name: "Node js", icon: "/images/nodejs.svg" },
        { name: "TypeScript", icon: "/images/Typescript.svg" },
        { name: "PostgreSQL", icon: "/images/Ico6.svg" }
    ];

    if (projectType === "web") {
        frontendTech = [
            { name: "HTML5", icon: "/images/Html 5.svg" },
            { name: "CSS3", icon: "/images/d1.svg" },
            { name: "JavaScript (ES6+)", icon: "/images/Js.svg" },
            { name: "React.js", icon: "/images/react.svg" },
            { name: "Redux", icon: "/images/Ico1.svg" },
            { name: "REST APIs", icon: "/images/Ico2.svg" },
            { name: "Axios", icon: "/images/custom-img14.svg" }
        ];
        backendTech = [
            { name: "Node js", icon: "/images/nodejs.svg" },
            { name: "TypeScript", icon: "/images/Typescript.svg" },
            { name: "PostgreSQL", icon: "/images/Ico6.svg" }
        ];
    } else if (projectType === "qms") {
        frontendTech = [
            { name: "HTML5", icon: "/images/Html 5.svg" },
            { name: "CSS3", icon: "/images/d1.svg" },
            { name: "JavaScript", icon: "/images/Js.svg" },
            { name: "React.js", icon: "/images/react.svg" },
            { name: "Redux", icon: "/images/Ico1.svg" }
        ];
        backendTech = [
            { name: "Java", icon: "/images/java.svg" },
            { name: "Spring Boot", icon: "/images/Ico3.svg" },
            { name: "PostgreSQL", icon: "/images/Ico6.svg" },
            { name: "REST APIs", icon: "/images/Ico2.svg" },
            { name: "Git", icon: "/images/Ico5.svg" }
        ];
    }

    return (
        <section className="relative w-full mt-[100px] mb-[120px] font-THICCCBOI">
            {/* Mesh Gradient Background matching layout */}
            <div className="absolute top-[10%] left-[20%] w-[60%] h-[80%] bg-pink-100/50 blur-[120px] rounded-full z-[0]"></div>
            <div className="absolute top-[30%] left-[50%] w-[40%] h-[60%] bg-blue-100/40 blur-[120px] rounded-full z-[0]"></div>
            <div className="max-w-[1200px] mx-auto z-10 relative">
                {/* Watermark */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[30px] sm:text-[50px] md:text-[90px] lg:text-[110px] font-black text-[#939192]/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tight leading-none -mt-[50px]">
                    TECHNOLOGY STACK
                </div>
                <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-extrabold text-[#0f172a] text-center mb-10 md:mb-16 tracking-tight px-2">
                    Our Technology Stack In {projectName}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto items-start">
                    {/* Front-end Section (Column 1) */}
                    <div className="flex flex-col items-center w-full">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-[5px] h-[5px] rounded-full bg-[#0f172a]"></div>
                            <h3 className="text-[18px] font-bold text-[#0f172a]">Front-end</h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 w-full">
                            {frontendTech.map((tech, i) => (
                                <div key={i} className="w-[110px] sm:w-[120px] h-[130px] rounded-2xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-md flex flex-col items-center justify-center transition-transform hover:-translate-y-1 p-2 text-center">
                                    <div className="relative w-12 h-12 mb-2 flex items-center justify-center">
                                        <Image src={tech.icon} alt={tech.name} width={48} height={48} className="object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                    </div>
                                    <span className="text-[13px] text-gray-700 font-medium leading-tight">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back-end Section (Column 2) */}
                    <div className="flex flex-col items-center w-full">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-[5px] h-[5px] rounded-full bg-[#0f172a]"></div>
                            <h3 className="text-[18px] font-bold text-[#0f172a]">Back-end</h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 w-full">
                            {backendTech.map((tech, i) => (
                                <div key={i} className="w-[110px] sm:w-[120px] h-[130px] rounded-2xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-md flex flex-col items-center justify-center transition-transform hover:-translate-y-1 p-2 text-center">
                                    <div className="relative w-12 h-12 mb-2 flex items-center justify-center">
                                        <Image src={tech.icon} alt={tech.name} width={48} height={48} className="object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                    </div>
                                    <span className="text-[13px] text-gray-700 font-medium leading-tight">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
