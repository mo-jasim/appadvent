import { FaHtml5, FaJava, FaReact, FaNodeJs, FaPython, FaAngular, FaJsSquare } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

const Technologies = () => {
    return (
        <section className="px-4 mt-[100px] mb-[100px] text-black font-THICCCBOI max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-10 lg:gap-0">
                <div className="w-full lg:w-1/2 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 pb-10 lg:pb-0 lg:pr-16 flex flex-col justify-center lg:py-6">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4">
                        <span className="text-[#32B9E9]">Technologies</span> We <br /> Work With
                    </h2>
                    <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] leading-tight">
                        We can create top-notch apps and systems with our diverse stack of knowledge and tools to our proficiency in a wide range of outstanding technologies.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pl-16 overflow-hidden">
                    <div>
                        <h3 className="font-bold mb-6 flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> Front-end</h3>
                        <div className="flex gap-3 sm:gap-6 w-full overflow-x-auto no-scrollbar pb-2">
                            <div className="flex flex-col items-center justify-center gap-3 bg-[#FFFFFF1A] rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 transition-transform hover:-translate-y-1">
                                <FaHtml5 className="w-8 h-8 sm:w-12 sm:h-12 text-[#e34c26]" />
                                <span className="text-[11px] sm:text-[14px] font-medium">HTML</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-[#FFFFFF1A] rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 transition-transform hover:-translate-y-1">
                                <FaJsSquare className="w-8 h-8 sm:w-12 sm:h-12 text-black" />
                                <span className="text-[11px] sm:text-[14px] font-medium">Java Script</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-[#FFFFFF1A] rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 transition-transform hover:-translate-y-1">
                                <FaReact className="w-8 h-8 sm:w-12 sm:h-12 text-[#61DBFB]" />
                                <span className="text-[11px] sm:text-[14px] font-medium">React js</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-[#FFFFFF1A] rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 transition-transform hover:-translate-y-1">
                                <FaAngular className="w-8 h-8 sm:w-12 sm:h-12 text-[#dd1b16]" />
                                <span className="text-[11px] sm:text-[14px] font-medium">Angular</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-6 flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> Back-end</h3>
                        <div className="flex gap-3 sm:gap-6 w-full overflow-x-auto no-scrollbar pb-2">
                            <div className="flex flex-col items-center justify-center gap-3 bg-[#FFFFFF1A] rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 transition-transform hover:-translate-y-1">
                                <FaNodeJs className="w-8 h-8 sm:w-12 sm:h-12 text-[#3c873a]" />
                                <span className="text-[11px] sm:text-[14px] font-medium">Node js</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-[#FFFFFF1A] rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 transition-transform hover:-translate-y-1">
                                <SiTypescript className="w-8 h-8 sm:w-12 sm:h-12 text-[#007acc]" />
                                <span className="text-[11px] sm:text-[14px] font-medium">Type Script</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-[#FFFFFF1A] rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 transition-transform hover:-translate-y-1">
                                <FaJava className="w-8 h-8 sm:w-12 sm:h-12 text-[#007396]" />
                                <span className="text-[11px] sm:text-[14px] font-medium">Java</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-[#FFFFFF1A] rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 transition-transform hover:-translate-y-1">
                                <FaPython className="w-8 h-8 sm:w-12 sm:h-12 text-[#3776AB]" />
                                <span className="text-[11px] sm:text-[14px] font-medium">Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;