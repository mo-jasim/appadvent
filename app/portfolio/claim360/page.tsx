import React from 'react'
import Image from 'next/image'

const Page = () => {
    return (
        <>
            <section className="relative py-10 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/polygon.png')",
                    }}
                />


                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

                    <h1 className="text-black font-bold text-3xl sm:text-3xl lg:text-4xl text-center max-w-3xl mx-auto">
                        Claim 360 – Your All-in-One CRM Web Application for Seamless Client Management
                    </h1>


                    <p className="max-w-4xl mx-auto text-center text-sm sm:text-base mt-4 text-gray-700">
                        Claim360 is a comprehensive web app designed to simplify home insurance claims after natural disasters.
                        It streamlines every step — from reporting damage to final settlement — ensuring speed, transparency,
                        and peace of mind. When disaster strikes, Claim360 helps homeowners recover faster.
                    </p>


                    <div className="flex items-center justify-center mt-8">
                        <Image
                            src="/images/play.png"
                            alt="Play demo video"
                            width={180}
                            height={180}
                            className="shrink-0 hover:scale-105 transition-transform cursor-pointer"
                            priority
                        />
                    </div>

                    {/* Main Screenshot */}
                    <div className="flex items-center justify-center mt-8">
                        <Image
                            src="/images/claim1.png"
                            alt="Claim 360 dashboard screenshot"
                            width={800}
                            height={600}
                            className="max-w-full h-auto shrink-0 "
                            priority
                        />
                    </div>


                    <h2 className="text-black font-bold text-2xl sm:text-3xl text-center py-8 mt-8">
                        About Claim 360 WebApp
                    </h2>
                    <p className="max-w-5xl mx-auto text-center text-gray-700 leading-relaxed">
                        Claim360 is a web application designed to simplify and automate home insurance claims during natural disasters.
                        With features like email parsing, smart routing, manual claim entry, and an integrated CRM, it ensures faster
                        processing and better transparency. The platform bridges the gap between insurers and homeowners, turning a
                        stressful process into a smooth digital experience.
                    </p>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-7">
                        <div className='flex flex-col sm:flex-row gap-3 md:gap-5'>
                            <div className="flex items-start sm:items-center">
                                <Image
                                    src="/images/Technology.png"
                                    alt="ai"
                                    width={30}
                                    height={30}
                                    className=""
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="m-0 text-sm md:text-base font-semibold">Industry</p>
                                <p className="m-0 text-xs md:text-sm text-gray-500">Social App</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-3 md:gap-5'>
                            <div className="flex items-start sm:items-center">
                                <Image
                                    src="/images/Technology.png"
                                    alt="ai"
                                    width={30}
                                    height={30}
                                    className=""
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="m-0 text-sm md:text-base font-semibold">Time</p>
                                <p className="m-0 text-xs md:text-sm text-gray-500">4 months</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-3 md:gap-5'>
                            <div className="flex items-start sm:items-center">
                                <Image
                                    src="/images/Technology.png"
                                    alt="ai"
                                    width={30}
                                    height={30}
                                    className=""
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="m-0 text-sm md:text-base font-semibold">OS Platform</p>
                                <p className="m-0 text-xs md:text-sm text-gray-500">Android & IOS</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-3 md:gap-5'>
                            <div className="flex items-start sm:items-center">
                                <Image
                                    src="/images/Technology.png"
                                    alt="ai"
                                    width={30}
                                    height={30}
                                    className=""
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="m-0 text-sm md:text-base font-semibold">Services</p>
                                <p className="m-0 text-xs md:text-sm text-gray-500">Design & Dev</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative py-20 bg-[#0B0F19] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/images/polygon.png')" }}
                />

                <div className="relative z-10 max-w-6xl mx-auto px-4">
                    <p className='text-3xl font-bold text-white'>
                        The Results
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 justify-between">
                        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
                            <div className="flex-shrink-0">
                                <Image
                                    src="/images/claim2.png"
                                    alt="ai"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="m-0 text-white font-bold text-2xl lg:text-3xl">50+</p>
                                <p className="m-0 text-gray-400 text-sm lg:text-base">Downloads</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
                            <div className="flex-shrink-0">
                                <Image
                                    src="/images/claim2.png"
                                    alt="ai"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="m-0 text-white font-bold text-2xl lg:text-3xl">50+</p>
                                <p className="m-0 text-gray-400 text-sm lg:text-base">Users</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
                            <div className="flex-shrink-0">
                                <Image
                                    src="/images/claim2.png"
                                    alt="ai"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="m-0 text-white font-bold text-2xl lg:text-3xl">50+</p>
                                <p className="m-0 text-gray-400 text-sm lg:text-base">Positive Reviews</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
                            <div className="flex-shrink-0">
                                <Image
                                    src="/images/claim2.png"
                                    alt="ai"
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className="m-0 text-white font-bold text-2xl lg:text-3xl">50+</p>
                                <p className="m-0 text-gray-400 text-sm lg:text-base">Downloads</p>
                            </div>
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

                <div className="relative z-10 py-10">
                    <p className='text-3xl font-bold text-black max-w-6xl mx-auto px-6'>Opportunities await</p>
                    <div className="relative z-10 max-w-6xl mx-auto px-6  py-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div>
                            <div className="space-y-2">

                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/claim5.png"
                                        alt="ai"
                                        width={40}
                                        height={40}
                                        className="shrink-0"
                                        priority
                                    />
                                    <h3 className="text-base font-semibold">
                                        Digital Transformation in Insurance
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The insurance sector is still transitioning from paper-based systems to
                                    digital workflows. Claim360 can become a flagship platform for digital
                                    claim management, reducing manual work and improving efficiency for
                                    insurers.
                                </p>
                            </div>
                            <div className="space-y-2">

                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/claim5.png"
                                        alt="ai"
                                        width={40}
                                        height={40}
                                        className="shrink-0"
                                        priority
                                    />
                                    <h3 className="text-base font-semibold">
                                        Digital Transformation in Insurance
                                    </h3>
                                </div>


                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The insurance sector is still transitioning from paper-based systems to
                                    digital workflows. Claim360 can become a flagship platform for digital
                                    claim management, reducing manual work and improving efficiency for
                                    insurers.
                                </p>
                            </div>
                            <div className="space-y-2">

                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/claim5.png"
                                        alt="ai"
                                        width={40}
                                        height={40}
                                        className="shrink-0"
                                        priority
                                    />
                                    <h3 className="text-base font-semibold">
                                        Digital Transformation in Insurance
                                    </h3>
                                </div>


                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The insurance sector is still transitioning from paper-based systems to
                                    digital workflows. Claim360 can become a flagship platform for digital
                                    claim management, reducing manual work and improving efficiency for
                                    insurers.
                                </p>
                            </div>


                        </div>


                        <div className="relative flex justify-center">
                            <img
                                src="/images/claim4.png"
                                alt="Illustration"
                                className="max-w-md w-full"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="relative py-10 bg-[#0B0F19] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/images/polygon.png')" }}
                />

                <div className="relative z-10 ">
                    <div className="relative z-10 max-w-6xl mx-auto px-6  py-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div className="relative flex justify-center">
                            <img
                                src="/images/claim6.png"
                                alt="Illustration"
                                className="max-w-md w-full"
                            />
                        </div>

                        <div className='flex flex-col gap-5'>

                            <p className='text-3xl font-bold text-white  px-6 py-7'>Our Best Solutions</p>
                            <div className="space-y-2">

                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/claim7.png"
                                        alt="ai"
                                        width={40}
                                        height={40}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-white leading-relaxed">
                                        Email Parsing:- Automatically extract claim details from incoming emails to create new cases instantly. This feature reduces manual data entry, minimizes human error, and ensures no claim request is ever missed.
                                    </p>
                                </div>



                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/claim7.png"
                                        alt="ai"
                                        width={40}
                                        height={40}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-white leading-relaxed">
                                        Email Parsing:- Automatically extract claim details from incoming emails to create new cases instantly. This feature reduces manual data entry, minimizes human error, and ensures no claim request is ever missed.
                                    </p>
                                </div>


                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/claim7.png"
                                        alt="ai"
                                        width={40}
                                        height={40}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-white leading-relaxed">
                                        Email Parsing:- Automatically extract claim details from incoming emails to create new cases instantly. This feature reduces manual data entry, minimizes human error, and ensures no claim request is ever missed.
                                    </p>
                                </div>

                            </div>


                        </div>



                    </div>

                </div>
            </section>

            <section className="relative   overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/polygon.png')",
                    }}
                ></div>
                < div className="relative py-10 z-10 max-w-6xl mx-auto px-4">


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


                        <div>
                            <p className='text-black text-2xl font-bold mb-6'>Essential Highlights</p>
                            <ul className="space-y-3 text-sm text-black">
                                {[
                                    "Through Research & Development",
                                    "Collaborative Idea Refinement",
                                    "User-Focused UX Review",
                                    "Strategic UI/UX Design",
                                    "Complete Branding Solutions",
                                    "Innovative Product Design",
                                    "Agile Rapid Prototyping",
                                ].map((step, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="text-cyan-400 font-semibold">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className='text-black py-2 '> {step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="relative flex justify-center">
                            <img
                                src="/images/claim8.png"
                                alt="Illustration"
                                className="max-w-md w-full"
                            />
                        </div>

                    </div>
                </div>


            </section>

            <section className='bg-black py-16 text-white px-4'>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between items-start'>
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-[32px] md:text-[40px] font-bold leading-tight'>Our Technology Stack In claim360 application:-</h2>
                    </div>

                    <div className='w-full md:w-1/2 flex flex-col gap-10'>

                        <div>
                            <p className="flex items-center gap-2 font-bold text-[20px] mb-4">
                                <span className="w-2 h-2 bg-[#32B9E9] rounded-full"></span>
                                Front-end
                            </p>

                            <div className='flex flex-wrap gap-4 mt-3'>
                                <Image
                                    src="/images/c1.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-16 md:w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c2.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-16 md:w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c3.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-16 md:w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c4.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-16 md:w-20 object-contain"
                                    priority
                                />
                            </div>

                        </div>

                        <div>
                            <p className="flex items-center gap-2 font-bold text-[20px] mb-4">
                                <span className="w-2 h-2 bg-[#32B9E9] rounded-full"></span>
                                Back-end
                            </p>

                            <div className='flex flex-wrap gap-4 mt-3'>
                                <Image
                                    src="/images/c1.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-16 md:w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c2.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-16 md:w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c3.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-16 md:w-20 object-contain"
                                    priority
                                />

                                <Image
                                    src="/images/c4.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-16 md:w-20 object-contain"
                                    priority
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="relative overflow-hidden ">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/polygon.png')",
                    }}
                ></div>

                <div className="relative z-10 py-10">
                    <p className='text-4xl font-bold text-center'>Glimpses of App UI Screens</p>
                </div>
                </section> */}

        </>
    )
}

export default Page