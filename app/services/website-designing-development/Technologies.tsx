
import { FaHtml5, FaJava, FaReact, FaVuejs, FaNodeJs, FaPhp, FaPython } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

const Technologies = () => {
    return (
        <section className="px-4 py-10 md:py-20 text-black font-THICCCBOI max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-0">
                <div className="w-full lg:w-1/2 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 pb-10 lg:pb-0 lg:pr-16">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4">
                        <span className="text-[#32B9E9]">Technologie</span> We <br /> Work With
                    </h2>
                    <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                        We can create top-notch apps and systems with our diverse stack of knowledge and tools to our proficiency in a wide range of outstanding technologies.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pl-16">
                    <div>
                        <h3 className="font-bold mb-6 flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> Front-end</h3>
                        <div className="flex gap-10 sm:gap-12 flex-wrap">
                            <div className="flex flex-col items-center gap-4 ml-6"><FaHtml5 className="w-10 h-10 text-orange-600" /><span className="text-xs font-medium">HTML5</span></div>
                            <div className="flex flex-col items-center gap-4 ml-6"><FaJava className="w-10 h-10 text-red-600" /><span className="text-xs font-medium">Java</span></div>
                            <div className="flex flex-col items-center gap-4 ml-6"><FaReact className="w-10 h-10 text-blue-400" /><span className="text-xs font-medium">React</span></div>
                            <div className="flex flex-col items-center gap-4 ml-6"><FaVuejs className="w-10 h-10 text-green-500" /><span className="text-xs font-medium">Vue.js</span></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-6 flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> Back-end</h3>
                        <div className="flex gap-10 sm:gap-12 flex-wrap">
                            <div className="flex flex-col items-center gap-4 ml-6"><FaNodeJs className="w-10 h-10 text-green-600" /><span className="text-xs font-medium">Node.js</span></div>
                            <div className="flex flex-col items-center gap-4 ml-6"><SiTypescript className="w-10 h-10 text-blue-600" /><span className="text-xs font-medium">TypeScript</span></div>
                            <div className="flex flex-col items-center gap-4 ml-6"><FaPhp className="w-10 h-10 text-purple-600" /><span className="text-xs font-medium">PHP</span></div>
                            <div className="flex flex-col items-center gap-4 ml-6"><FaPython className="w-10 h-10 text-yellow-500" /><span className="text-xs font-medium">Python</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;    