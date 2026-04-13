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
                    <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


                        <div>
                            <h1 className='text-[32px] sm:text-[40px] md:text-[48px] font-bold max-w-lg leading-tight mb-4'>Goalkick - Football Social Network App</h1>
                            <p className='text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-6'>The ultimate destination for football enthusiasts to connect, engage, and indulge in their passion for the beautiful game. This football social network app goes beyond conventional fan experiences, offering a dynamic platform where you can join groups, discuss matches, and make new friends.</p>
                            <div className="flex py-4">
                                <Image
                                    src="/images/play.png"
                                    alt="Play demo video"
                                    width={180}
                                    height={180}
                                    className="shrink-0 hover:scale-105 transition-transform cursor-pointer"
                                    priority
                                />
                            </div>
                            <p
                                className="text-[#32B9E9] font-medium underline cursor-pointer hover:text-[#2aa8d6] transition-colors"
                            >
                                Have a project in mind?
                            </p>
                        </div>


                        <div className="relative flex justify-center">
                            <img
                                src="/images/goal1.png"
                                alt="Illustration"
                                className="max-w-md w-full"
                            />
                        </div>

                    </div>
                    <div className='max-w-6xl mx-auto'>

                        <div className="relative z-10 max-w-6xl mx-auto px-6  grid grid-cols-1 md:grid-cols-2 gap-10 ">

                            <div className="relative flex justify-center">
                                <img
                                    src="/images/goal2.png"
                                    alt="Illustration"
                                    className="max-w-md w-full"
                                />
                            </div>

                            <div className='py-7'>
                                <p className='text-black text-3xl font-bold '>About Goalkick App</p>
                                <p className='text-sm py-3'>It's an online stadium where fans from around the world can unite, chat, and immerse themselves in the excitement of football. Dive into discussions about upcoming league matches, share your insights on the latest football news, and predict game outcomes with fellow fans. Connect with others who share your passion, and build lasting friendships with people who love football just as much as you do. Explore various features designed to enhance your football experience. Join clubs, create your own groups, and participate in lively discussions.</p>
                                <div className="grid grid-cols-2 gap-4 md:gap-5 mt-7">
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
                                            <p className="m-0 text-sm md:text-base font-semibold">Development Time</p>
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
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 bg-[#0B0F19] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/images/polygon.png')" }}
                />

                <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
                    <p className='text-[32px] md:text-[40px] font-bold text-white mb-8 leading-tight'>
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

                    <div className="relative z-10 max-w-6xl mx-auto px-6  py-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-bold text-black px-6'>Opportunities await</p>
                            <div className="space-y-2">

                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/goal5.png"
                                        alt="ai"
                                        width={20}
                                        height={20}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-gray-700 leading-relaxed">

                                        Football is the most popular sport globally, yet existing fan engagement is fragmented across social media, news apps, and club-specific platforms.
                                    </p>


                                </div>



                            </div>
                            <div className="space-y-2">

                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/goal5.png"
                                        alt="ai"
                                        width={20}
                                        height={20}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The insurance sector is still transitioning from paper-based systems to
                                        digital workflows. Claim360 can become a flagship platform for digital
                                        claim management, reducing manual work and improving efficiency for
                                        insurers.
                                    </p>

                                </div>



                            </div>
                            <div className="space-y-2">

                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/goal5.png"
                                        alt="ai"
                                        width={20}
                                        height={20}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        The insurance sector is still transitioning from paper-based systems to
                                        digital workflows. Claim360 can become a flagship platform for digital
                                        claim management, reducing manual work and improving efficiency for
                                        insurers.
                                    </p>

                                </div>



                            </div>


                        </div>


                        <div className="relative flex justify-center">
                            <img
                                src="/images/goal3.png"
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
                                src="/images/goal4.png"
                                alt="Illustration"
                                className="max-w-md w-full"
                            />
                        </div>

                        <div className='flex flex-col gap-5'>

                            <p className='text-3xl font-bold text-white  px-6 py-7'>Our Best Solutions</p>
                            <div className="space-y-2">

                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/goal6.png"
                                        alt="ai"
                                        width={20}
                                        height={20}
                                        className="shrink-0 "
                                        priority
                                    />
                                    <p className="text-sm text-white leading-relaxed">
                                        Goalkick addresses this gap by creating a comprehensive social app for football fans that combines community interaction, real-time updates, and gamified fan engagement.
                                    </p>
                                </div>



                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/goal6.png"
                                        alt="ai"
                                        width={20}
                                        height={20}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-white leading-relaxed">
                                        It allows users to join groups, discuss matches, share opinions, and make friends while staying updated with live scores and news.
                                    </p>
                                </div>


                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/goal6.png"
                                        alt="ai"
                                        width={20}
                                        height={20}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-white leading-relaxed">
                                        The platform goes beyond typical fan forums by offering interactive games, predictions, trivia, and a reward system that motivates continuous engagement.
                                    </p>
                                </div>

                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/images/goal6.png"
                                        alt="ai"
                                        width={20}
                                        height={20}
                                        className="shrink-0"
                                        priority
                                    />
                                    <p className="text-sm text-white leading-relaxed">
                                        With personalized feeds, real-time notifications, and recognition through points and badges, Goalkick delivers a unique, rewarding, and all-in-one football fan experience.
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
                                    "Footballs Community & Groups",
                                    "Match Discussions & Banter",
                                    "Real Time Update",
                                    "Personalized Feed",
                                    "Interactive Engagement",
                                    "Friendship & Networking",

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
                        <h2 className='text-[32px] md:text-[40px] font-bold leading-tight'>Our Technology Stack In GoalKick application:-</h2>
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

            <section className="relative overflow-hidden ">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/polygon.png')",
                    }}
                ></div>

                <div className="relative z-10 py-10">
                    <p className='text-4xl font-bold text-center'>Glimpses of App UI Screens</p>
                    <div className="relative flex justify-center mt-7">
                        <img
                            src="/images/goal7.png"
                            alt="Illustration"
                            className="max-w-3xl w-full"
                        />
                    </div>
                </div>
            </section>

        </>


    )
}

export default page