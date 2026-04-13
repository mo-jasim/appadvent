import Image from 'next/image'

export default function HaveAProject() {
    return (
        <section id="have-a-project" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050a15 0%, #130f30 50%, #4a0e2e 100%)' }}>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url('/images/polygon.png')" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


                    <div>
                        <h2 className="text-[56px] md:text-[56px] font-bold text-white leading-tight">
                            Have a project idea! <br /> Drop me a line.
                        </h2>

                        <p className="mt-4 text-[16px] md:text-[16px] text-gray-300 max-w-md">
                            Provide insights into your project and submit your Request for Proposal
                            to get started.
                        </p>

                        <div className="mt-16 mb-16 text-sm text-gray-300 flex gap-[20px]">
                            <div>
                                <Image
                                    src="/images/icons4.png"
                                    alt="ai"
                                    width={56}
                                    height={56}
                                    className="shrink-0"
                                    priority
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-[14px]">EMAIL US</p>
                                <p className="text-white text-[24px]">info@appadvent.com</p>
                            </div>
                        </div>

                        <p className='text-white text-[16px] mt-6'>----connect with us:</p>
                        <div className="flex gap-4 mt-2 text-gray-400">
                            <span className="hover:scale-110 transition-all duration-300 item-[#32B9E9] cursor-pointer">
                                <Image
                                    src="/Letimg/Social Media.svg"
                                    alt="ai"
                                    width={44}
                                    height={44}
                                    className="shrink-0"
                                    priority
                                />
                            </span>
                            <span className="hover:scale-110 transition-all duration-300 cursor-pointer">
                                <Image
                                    src="/Letimg/Social Media (1).svg"
                                    alt="ai"
                                    width={44}
                                    height={44}
                                    className="shrink-0"
                                    priority
                                />
                            </span>
                            <span className="hover:scale-110 transition-all duration-300 item-[#32B9E9] cursor-pointer">
                                <Image
                                    src="/Letimg/Social Media3.svg"
                                    alt="ai"
                                    width={44}
                                    height={44}
                                    className="shrink-0"
                                    priority
                                />
                            </span>
                            <span className="hover:scale-110 transition-all duration-300 item-[#32B9E9] cursor-pointer">
                                <Image
                                    src="/Letimg/Social Media (2).svg"
                                    alt="ai"
                                    width={44}
                                    height={44}
                                    className="shrink-0"
                                    priority
                                />
                            </span>
                            <span className="hover:scale-110 transition-all duration-300 item-[#32B9E9] cursor-pointer">
                                <Image
                                    src="/Letimg/Social Mediayou.svg"
                                    alt="ai"
                                    width={44}
                                    height={44}
                                    className="shrink-0"
                                    priority
                                />
                            </span>
                        </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mt-8 md:mt-0">
                        <h3 className="text-lg font-semibold mb-6">
                            Write down your quote here...
                        </h3>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-[#000000] text-sm">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="border rounded-md px-4 py-2 text-sm border-[#E6E8EC] focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[#000000] text-sm">
                                    Email
                                </label>

                                <input
                                    type="text"
                                    placeholder="Email address"
                                    className="border rounded-md px-4 py-2 text-sm border-[#E6E8EC] focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[#000000] text-sm">
                                    Contact
                                </label>

                                <input
                                    type="text"
                                    placeholder="mobile"
                                    className="border rounded-md px-4 py-2 text-sm border-[#E6E8EC] focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[#000000] text-sm">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    placeholder="phone"
                                    className="border rounded-md px-4 py-2 text-sm border-[#E6E8EC] focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[#000000] text-sm">
                                    Services
                                </label>

                                <select className="border rounded-md px-4 py-2 text-sm focus:outline-none border-[#E6E8EC] text-gray-500">
                                    <option className='text-gray-500'>What are you looking for</option>
                                    <option className='text-gray-500'>Web Development</option>
                                    <option className='text-gray-500'>UI/UX Design</option>
                                    <option className='text-gray-500'>Mobile App</option>
                                </select>

                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[#000000] text-sm">
                                    Budget
                                </label>

                                <select className="border rounded-md px-4 py-2 text-sm focus:outline-none border-[#E6E8EC] text-gray-500">
                                    <option className='text-gray-500'>Project budget (USD)</option>
                                    <option className='text-gray-500'>$1k – $5k</option>
                                    <option className='text-gray-500'>$5k – $10k</option>
                                    <option className='text-gray-500'>$10k+</option>
                                </select>

                            </div>



                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-[#4F5B73] font-bold text-[14px]">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Tell us about your project..."
                                    className="w-full border border-[#E6E8EC] rounded-[12px] px-4 py-4 text-[14px] text-gray-700 focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all h-32 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="md:col-span-2 bg-[#32B9E9] text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2"
                            >
                                Request A Quote →
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}