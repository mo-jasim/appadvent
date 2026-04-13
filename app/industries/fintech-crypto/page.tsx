import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <section className="relative overflow-hidden ">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/polygon.png')",
                    }}
                ></div>

                <div className="relative z-10">
                    <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


                        <div>
                            <h1 className="text-[32px] md:text-[48px] font-bold text-gray-900 mb-4 max-w-md leading-tight">
                                Fintech & Crypto
                                App Development Solutions
                            </h1>

                            <p className="text-gray-600 text-[16px] md:text-[18px] max-w-md mb-6 leading-relaxed">
                                We work primarily within the fintech niche and aim to deliver high-quality software solutions with an emphasis on speed, flexibility, and effectiveness. We acknowledge the basic requirements of your business and are committed to making your dream come true on a given schedule and budget.
                            </p>

                            <p
                                className="text-[#32B9E9] font-medium underline cursor-pointer hover:text-[#2aa8d6] transition-colors"
                            >
                                Have a project in mind?
                            </p>
                        </div>


                        <div className="relative flex justify-center">
                            <img
                                src="/images/f1.png"
                                alt="Illustration"
                                className="max-w-md w-full"
                            />
                        </div>

                    </div>
                    <div className='max-w-6xl mx-auto px-6'>
                        <h2 className='text-[32px] md:text-[40px] font-bold text-gray-900 leading-tight mb-4'>Scale Your Fintech Needs with Appadvent's Expert Software Development Services</h2>
                        <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">We work primarily within the fintech niche and aim to deliver high-quality software solutions with an emphasis on speed, flexibility, and effectiveness. We acknowledge the basic requirements of your business and are committed to making your dream come true on a given schedule and budget.</p>

                        <div className="relative z-10 max-w-6xl mx-auto py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


                            <div>
                                <div className='flex flex-col mb-3'>
                                    <p className='text-black font-bold'>Web and Mobile Application Development</p>
                                    <p className='text-gray-600 text-sm'>For a fintech company, both web and mobile applications are essential for customer interface and to create a competitive environment.</p>
                                </div>

                                <div className='flex flex-col mb-3'>
                                    <p className='text-black font-bold'>Security Audits and Testing</p>
                                    <p className='text-gray-600 text-sm'>Security is highly valued in the fintech industry. Appadvent performs security check and vulnerability assessments to ensure that your products are secure.</p>
                                </div>

                                <div className='flex flex-col mb-3'>
                                    <p className='text-black font-bold'>Fintech Product Development Consulting</p>
                                    <p className='text-gray-600 text-sm'>Security is highly valued in the fintech industry. Appadvent performs security check and vulnerability assessments to ensure that your products are secure.</p>
                                </div>

                                <div className='flex flex-col mb-3'>
                                    <p className='text-black font-bold'>Modernization and Support of Fintech App</p>
                                    <p className='text-gray-600 text-sm'>Overcome legacy pitfalls with Appadvent’s fintech app modernization solutions. We transition legacy finance applications to efficient fintech software with a modular design, user-friendly interface, and no disruption. </p>
                                </div>
                            </div>
                            <div className="relative flex justify-center">
                                <img
                                    src="/images/f2.png"
                                    alt="Illustration"
                                    className="max-w-md w-full"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-10 md:py-20 bg-[#0B0F19] overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/images/polygon.png')" }}
                />

                <div className="relative z-10 max-w-6xl mx-auto px-4">
                    <p className='max-w-xl text-[32px] md:text-[40px] font-bold text-center mx-auto text-white leading-tight'>Our Fintech Application Development Framework</p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10'>
                        <div className='flex flex-col gap-3 p-6 bg-[#FFEAEA] w-full rounded-2xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1'>
                            <p className='text-black bg-[#ADE3F6] rounded-full w-8 h-8 flex items-center justify-center font-bold text-[16px]'>1</p>
                            <p className='text-black font-bold text-[18px]'>Understanding Your Vision</p>
                            <p className='text-gray-600 text-[15px] leading-relaxed'>First of all, we immerse ourselves in your concepts and visions of the fintech application.</p>
                        </div>

                        <div className='flex flex-col gap-3 p-6 bg-[#EAFFFC] w-full rounded-2xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1'>
                            <p className='text-black bg-[#ADE3F6] rounded-full w-8 h-8 flex items-center justify-center font-bold text-[16px]'>2</p>
                            <p className='text-black font-bold text-[18px]'>Strategic Planning</p>
                            <p className='text-gray-600 text-[15px] leading-relaxed'>After that, we hold briefing meetings to define the project’s objectives, functionalities, and schedule.</p>
                        </div>

                        <div className='flex flex-col gap-3 p-6 bg-[#EEEAFF] w-full rounded-2xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1'>
                            <p className='text-black bg-[#ADE3F6] rounded-full w-8 h-8 flex items-center justify-center font-bold text-[16px]'>3</p>
                            <p className='text-black font-bold text-[18px]'>Agile Development</p>
                            <p className='text-gray-600 text-[15px] leading-relaxed'>In this process, the FinTech app is created through multiple sprints based on the principles of agile development.</p>
                        </div>

                        <div className='flex flex-col gap-3 p-6 bg-[#FFEAEA] w-full rounded-2xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1'>
                            <p className='text-black bg-[#ADE3F6] rounded-full w-8 h-8 flex items-center justify-center font-bold text-[16px]'>4</p>
                            <p className='text-black font-bold text-[18px]'>Robust Testing</p>
                            <p className='text-gray-600 text-[15px] leading-relaxed'>Quality is a very important aspect that is considered in our work. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden ">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/polygon.png')",
                    }}
                ></div>

                <div className="py-10 md:py-16 relative z-10 max-w-6xl mx-auto px-4">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">


                        <div>
                            <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-4 max-w-md leading-tight">
                                Why Appadvent is Your Ideal Partner for Fintech App Development?
                            </h1>


                        </div>


                        <div className="relative flex justify-center">
                            <p className='text-gray-600 text-[16px] md:text-[18px] leading-relaxed'>
                                Appadvent offers the best and unique fintech application development solutions to assist your business in achieving higher performance in the new world.The strategic management approach that we follow is the one that encourages the focus on innovation, teamwork, and market orientation.
                            </p>
                        </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10'>
                        <div className='flex flex-col justify-between p-8 bg-[#DBF3FB] w-full min-h-[200px] rounded-[24px] shadow-sm'>
                            <div>
                                <p className='text-black bg-[#ADE3F6] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4'>1</p>
                                <p className='text-black font-bold text-[24px]'>Expertise</p>
                            </div>
                            <p className='text-black font-bold text-[15px] cursor-pointer hover:text-blue-600 transition-colors mt-6'>Learn More →</p>
                        </div>

                        <div className='flex flex-col justify-between p-8 bg-[#FEFFEA] w-full min-h-[200px] rounded-[24px] shadow-sm'>
                            <div>
                                <p className='text-black bg-[#ADE3F6] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4'>2</p>
                                <p className='text-black font-bold text-[24px]'>Innovation</p>
                            </div>
                            <p className='text-black font-bold text-[15px] cursor-pointer hover:text-blue-600 transition-colors mt-6'>Learn More →</p>
                        </div>

                        <div className='flex flex-col justify-between p-8 bg-[#EAFFF0] w-full min-h-[200px] rounded-[24px] shadow-sm'>
                            <div>
                                <p className='text-black bg-[#ADE3F6] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4'>3</p>
                                <p className='text-black font-bold text-[24px]'>Customization</p>
                            </div>
                            <p className='text-black font-bold text-[15px] cursor-pointer hover:text-blue-600 transition-colors mt-6'>Learn More →</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#0B0F19] py-10 md:py-20 text-white px-4'>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between '>
                    <div className="w-full md:w-1/3">
                        <p className='text-[32px] md:text-[40px] font-bold text-white leading-tight'>The Right Tools for Your Fintech App: Our Technology Stack</p>

                        <div className='flex flex-col gap-4 pt-8'>
                            <p className='flex items-center gap-2 bg-[#32B9E9] px-4 py-3 text-white rounded-xl shadow-md font-medium cursor-pointer'>
                                <span className="w-2 h-2 bg-white rounded-full text-white"></span>
                                Web Technologies</p>

                            <p className="flex items-center gap-2 px-2 py-2 text-white/80 hover:text-white cursor-pointer transition-colors">
                                <span className="w-2 h-2 bg-white/50 rounded-full text-white"></span>
                                App Technologies
                            </p>

                            <p className="flex items-center gap-2 px-2 py-2 text-white/80 hover:text-white cursor-pointer transition-colors">
                                <span className="w-2 h-2 bg-white/50 rounded-full text-white"></span>
                                Desktop
                            </p>

                            <p className="flex items-center gap-2 px-2 py-2 text-white/80 hover:text-white cursor-pointer transition-colors">
                                <span className="w-2 h-2 bg-white/50 rounded-full text-white"></span>
                                Message Broker
                            </p>

                            <p className="flex items-center gap-2 px-2 py-2 text-white/80 hover:text-white cursor-pointer transition-colors">
                                <span className="w-2 h-2 bg-white/50 rounded-full text-white"></span>
                                Cloud Database
                            </p>
                        </div>
                    </div>


                    <div className='w-full md:w-2/3 flex flex-col gap-10'>

                        <div>
                            <p className="flex items-center gap-2 font-bold text-[20px] mb-4">
                                <span className="w-2 h-2 bg-[#32B9E9] rounded-full"></span>
                                Front-end
                            </p>

                            <p className='flex flex-wrap gap-4 mt-3'>
                                <Image
                                    src="/images/c1.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c2.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c3.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c4.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-20 object-contain"
                                    priority
                                />
                            </p>

                        </div>

                        <div>
                            <p className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-white rounded-full text-white"></span>
                                Front-end
                            </p>

                            <p className='flex gap-3 mt-3'>
                                <Image
                                    src="/images/c1.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c2.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c3.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c4.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-20 object-contain"
                                    priority
                                />
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page