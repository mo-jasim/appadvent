'use client';
import { motion } from 'framer-motion';

const DevelopmentSkills = () => {
    return (
        <>
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 font-THICCCBOI relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={{
                            hidden: { opacity: 0, y: -30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                        }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-3 sm:mb-4 leading-tight">
                            Development Skills of Our Developers
                        </h2>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 pb-1 h-full max-w-7xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {[
                            {
                                titleIcon: "/staf-images/img-1.svg",
                                title: 'Programming Langugaes',
                            },
                            {
                                titleIcon: "/staf-images/img-2.svg",
                                title: 'Web Frameworks',
                            },
                            {
                                titleIcon: "/staf-images/img-3.svg",
                                title: 'Frontend Frameworks',
                            },
                            {
                                titleIcon: "/staf-images/img-4.svg",
                                title: 'Mobile App Frameworks',
                            },
                            {
                                titleIcon: "/staf-images/img-5.svg",
                                title: 'Data base Systems',
                            },
                            {
                                titleIcon: "/staf-images/img-6.svg",
                                title: 'Version Control',
                            },
                            {
                                titleIcon: "/staf-images/img-7.svg",
                                title: 'Build Tools',
                            },
                            {
                                titleIcon: "/staf-images/img-8.svg",
                                title: 'Continuous Integration',
                            },
                            {
                                titleIcon: "/staf-images/img-9.svg",
                                title: 'Web servers',
                            },
                            {
                                titleIcon: "/staf-images/img-10.svg",
                                title: 'API Documentation',
                            },
                            {
                                titleIcon: "/staf-images/img-11.svg",
                                title: 'Messaging queue',
                            },
                            {
                                titleIcon: "/staf-images/img-12.svg",
                                title: 'Testing Frameworks',
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={{
                                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                                className="bg-white border border-gray-100 text-black p-6 sm:p-8 rounded-[24px] flex flex-col items-center text-center gap-4 hover:shadow-[0_8px_30px_rgba(50,185,233,0.12)] hover:border-[#32B9E9]/20 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-2 relative">
                                    <h3 className="font-bold text-[18px] md:text-[20px] text-gray-800 group-hover:text-[#32B9E9] transition-colors duration-300 z-10">{item.title}</h3>
                                </div>
                                <div className="relative flex-grow flex items-center justify-center p-4">
                                    <div className="absolute inset-0 bg-[#32B9E9]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100" />
                                    <img src={item.titleIcon} alt={item.title}
                                        className="w-full h-auto object-contain max-h-[80px] transition-transform duration-500 group-hover:scale-110 relative z-10"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default DevelopmentSkills;