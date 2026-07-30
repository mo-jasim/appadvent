"use client";

import Image from 'next/image';
import { Mail, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function HaveAProject() {
    return (
        <section id="have-a-project" className="relative py-16 md:py-24 bg-[#EAF8FD] font-THICCCBOI overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column — Info & Socials */}
                    <div className="lg:col-span-5">
                        <h2 className="text-[30px] sm:text-[44px] md:text-[36px] font-bold text-[#061C3D] leading-tight">
                            Have a project idea! <br />
                            Drop us a line.
                        </h2>

                        <p className="mt-4 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed max-w-md">
                            Provide insights into your project and submit your Request for Proposal to get started.
                        </p>

                        {/* Email Us Block */}
                        <div className="mt-10 mb-10 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-[#DDF1FA] flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-[#061C3D]" />
                            </div>
                            <div>
                                <p className="font-medium text-[12px] text-[#64748B] tracking-wider uppercase">EMAIL US</p>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@appadvent.com"
                                    className="text-[#061C3D] font-medium text-[16px] sm:text-[22px] block hover:text-[#32B9E9] transition-colors"
                                >
                                    info@appadvent.com
                                </a>
                            </div>
                        </div>

                        {/* Connect With Us */}
                        <div className="mt-8">
                            <p className="text-[#4A5568] text-[14px] font-medium mb-3 flex items-center gap-2">
                                <span className="w-6 h-[1.5px] bg-[#4A5568] inline-block"></span>
                                Connect with us:
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.facebook.com/share/p/18Zjyommo9/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-200/60 hover:bg-[#32B9E9] hover:text-white transition-all duration-300 flex items-center justify-center text-[#061C3D]"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://x.com/appadventtech/status/2052255985302155644?s=20"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-200/60 hover:bg-[#32B9E9] hover:text-white transition-all duration-300 flex items-center justify-center text-[#061C3D]"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/feed/update/urn:li:activity:7458020308239925248"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-200/60 hover:bg-[#32B9E9] hover:text-white transition-all duration-300 flex items-center justify-center text-[#061C3D]"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://www.instagram.com/p/DYBnjSvmFuj/?utm_source=ig_web_copy_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-200/60 hover:bg-[#32B9E9] hover:text-white transition-all duration-300 flex items-center justify-center text-[#061C3D]"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Form Card */}
                    <div className="lg:col-span-7 bg-white rounded-[24px] shadow-sm border border-gray-100/80 p-6 sm:p-10">
                        <h3 className="text-[22px] sm:text-[24px] font-bold text-[#061C3D] mb-6">
                            Write down your quote here...
                        </h3>

                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#4A5568] font-medium text-xs">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#4A5568] font-medium text-xs">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#4A5568] font-medium text-xs">
                                    Contact
                                </label>
                                <input
                                    type="text"
                                    placeholder="Mobile number"
                                    className="border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#4A5568] font-medium text-xs">
                                    Phone number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Email address"
                                    className="border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#4A5568] font-medium text-xs">
                                    Services
                                </label>
                                <select className="border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-gray-600 bg-white">
                                    <option>What are looking for:</option>
                                    <option>Web Development</option>
                                    <option>UI/UX Design</option>
                                    <option>Mobile App</option>
                                    <option>Staff Augmentation</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#4A5568] font-medium text-xs">
                                    Budget
                                </label>
                                <select className="border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all text-gray-600 bg-white">
                                    <option>Project budget (USD)</option>
                                    <option>$1k – $5k</option>
                                    <option>$5k – $10k</option>
                                    <option>$10k+</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5 sm:col-span-2">
                                <label className="text-[#4A5568] font-medium text-xs">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Tell us about your project..."
                                    className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#32B9E9] focus:ring-1 focus:ring-[#32B9E9] transition-all h-28 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="sm:col-span-2 mt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-[#32B9E9] text-white py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#28a5d3] transition-colors duration-300 shadow-sm"
                                >
                                    Request A Quote
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}