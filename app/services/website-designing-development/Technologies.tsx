'use client';
import { FaHtml5, FaJava, FaReact, FaNodeJs, FaPython, FaAngular, FaJsSquare } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'

const Technologies = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 mt-[100px] mb-[100px] text-black font-THICCCBOI max-w-7xl mx-auto overflow-hidden">
            <motion.div
                className="flex flex-col lg:flex-row items-start lg:items-stretch gap-10 lg:gap-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                <motion.div
                    className="w-full lg:w-1/2 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 pb-10 lg:pb-0 lg:pr-16 flex flex-col justify-center lg:py-6"
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4 leading-tight">
                        <span className="text-[#32B9E9]">Technologies</span> We <br /> Work With
                    </h2>
                    <p className="text-black text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                        We can create top-notch apps and systems with our diverse stack of knowledge and tools to our proficiency in a wide range of outstanding technologies.
                    </p>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 flex flex-col gap-10 lg:pl-16 overflow-hidden"
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                >
                    <div>
                        <h3 className="font-bold mb-6 flex items-center gap-2"><div className="w-2 h-2 bg-[#32B9E9] rounded-full"></div> Front-end</h3>
                        <div className="flex gap-6 sm:gap-6 lg:gap-8 w-full overflow-x-auto no-scrollbar pb-4 pt-2">
                            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 border border-gray-100 hover:shadow-[0_8px_30px_rgba(50,185,233,0.15)] transition-all duration-300 hover:-translate-y-2 group">
                                <FaHtml5 className="w-8 h-8 sm:w-12 sm:h-12 text-[#e34c26] transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-[11px] sm:text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors">HTML</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 border border-gray-100 hover:shadow-[0_8px_30px_rgba(50,185,233,0.15)] transition-all duration-300 hover:-translate-y-2 group">
                                <FaJsSquare className="w-8 h-8 sm:w-12 sm:h-12 text-[#F7DF1E] transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-[11px] sm:text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors">JavaScript</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 border border-gray-100 hover:shadow-[0_8px_30px_rgba(50,185,233,0.15)] transition-all duration-300 hover:-translate-y-2 group">
                                <FaReact className="w-8 h-8 sm:w-12 sm:h-12 text-[#61DBFB] transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-[11px] sm:text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors">React</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 border border-gray-100 hover:shadow-[0_8px_30px_rgba(50,185,233,0.15)] transition-all duration-300 hover:-translate-y-2 group">
                                <FaAngular className="w-8 h-8 sm:w-12 sm:h-12 text-[#dd1b16] transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-[11px] sm:text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors">Angular</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mb-6 flex items-center gap-2"><div className="w-2 h-2 bg-[#32B9E9] rounded-full"></div> Back-end</h3>
                        <div className="flex gap-6 sm:gap-6 lg:gap-8 w-full overflow-x-auto no-scrollbar pb-4 pt-2">
                            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 border border-gray-100 hover:shadow-[0_8px_30px_rgba(50,185,233,0.15)] transition-all duration-300 hover:-translate-y-2 group">
                                <FaNodeJs className="w-8 h-8 sm:w-12 sm:h-12 text-[#3c873a] transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-[11px] sm:text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors">Node js</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 border border-gray-100 hover:shadow-[0_8px_30px_rgba(50,185,233,0.15)] transition-all duration-300 hover:-translate-y-2 group">
                                <SiTypescript className="w-8 h-8 sm:w-12 sm:h-12 text-[#007acc] transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-[11px] sm:text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors">TypeScript</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 border border-gray-100 hover:shadow-[0_8px_30px_rgba(50,185,233,0.15)] transition-all duration-300 hover:-translate-y-2 group">
                                <FaJava className="w-8 h-8 sm:w-12 sm:h-12 text-[#007396] transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-[11px] sm:text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors">Java</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 bg-white rounded-[20px] w-[75px] h-[90px] sm:w-[110px] sm:h-[120px] flex-shrink-0 border border-gray-100 hover:shadow-[0_8px_30px_rgba(50,185,233,0.15)] transition-all duration-300 hover:-translate-y-2 group">
                                <FaPython className="w-8 h-8 sm:w-12 sm:h-12 text-[#3776AB] transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-[11px] sm:text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors">Python</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Technologies;