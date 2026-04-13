import Image from "next/image";

const techStack = {
  frontend: [
    { name: "HTML", icon: "/images/Html 5.svg" },
    { name: "Java Script", icon: "/images/Js.svg" },
    { name: "React js", icon: "/images/react.svg" },
  ],
  backend: [
    { name: "Node js", icon: "/images/nodejs.svg" },
    { name: "Type Script", icon: "/images/Typescript.svg" },
    { name: "Python", icon: "/images/python.svg" },
  ]
};

export default function Claim360WebApp() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-THICCCBOI">
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-[-2] bg-[#f8fafc]"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[70%] bg-purple-200/60 blur-[120px] rounded-full z-[-1]"></div>
      <div className="absolute top-[20%] left-[30%] w-[40%] h-[60%] bg-cyan-200/50 blur-[120px] rounded-full z-[-1]"></div>
      
      <div className="max-w-[1200px] mx-auto z-10 relative">
        {/* Title */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-extrabold text-[#0f172a] text-center mb-16 tracking-tight">
          Our Technology Stack In Claim 360 Web App
        </h2>

        {/* Both Sections as a Row on Desktop */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20">
          
          {/* Front-end Section */}
          <div className="flex flex-col items-center">
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-8 pr-4">
              <div className="w-[5px] h-[5px] rounded-full bg-[#0f172a]"></div>
              <h3 className="text-[18px] font-bold text-[#0f172a]">Front-end</h3>
            </div>
            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {techStack.frontend.map((tech, i) => (
                <div 
                  key={i} 
                  className="w-[120px] h-[130px] rounded-2xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
                >
                  <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
                    <Image 
                      src={tech.icon} 
                      alt={tech.name} 
                      width={56} 
                      height={56} 
                      className="object-contain" 
                      priority
                    />
                  </div>
                  <span className="text-[14px] text-gray-700 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider visible only on large screens, though the design does not explicitly demand one, we use gap instead */}

          {/* Back-end Section */}
          <div className="flex flex-col items-center">
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-8 pr-4">
              <div className="w-[5px] h-[5px] rounded-full bg-[#0f172a]"></div>
              <h3 className="text-[18px] font-bold text-[#0f172a]">Back-end</h3>
            </div>
            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {techStack.backend.map((tech, i) => (
                <div 
                  key={i} 
                  className="w-[120px] h-[130px] rounded-2xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
                >
                  <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
                    <Image 
                      src={tech.icon} 
                      alt={tech.name} 
                      width={56} 
                      height={56} 
                      className="object-contain" 
                      priority
                    />
                  </div>
                  <span className="text-[14px] text-gray-700 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
