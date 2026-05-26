"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown, HeartPulse } from "lucide-react";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function HealthcareBlogPage() {
    const [isTocOpen, setIsTocOpen] = useState(false);

    const relatedPosts = [
        {
            title: "How Future Healthcare Technology Is Improving At-Home Care",
            category: "DIGITAL MARKETING",
            date: "March 28, 2026",
            image: "/images/bloglgimag.png"
        },
        {
            title: "How to Plan Web Application Development Services for Scalable Business Growth",
            category: "SOFTWARE",
            date: "March 13, 2026",
            image: "/images/Blogcard-2.webp"
        },
        {
            title: "How to Choose a Reputable AI Development Services Provider?",
            category: "DEVELOPMENT",
            date: "February 21, 2026",
            image: "/images/Blog-img.webp"
        },
        {
            title: "EMR Vs EHR Development: What should you choose for your healthcare business?",
            category: "SOFTWARE",
            date: "April 1, 2025",
            image: "/images/EMR-VS-EHR.webp"
        },
        {
            title: "Google Word Coach",
            category: "SOFTWARE",
            date: "February 28, 2025",
            image: "/images/Google-Word-Coach.webp"
        },
        {
            title: "App Development Company Case Study: Importance of Software Development Performance Metrics",
            category: "SOFTWARE",
            date: "January 18, 2025",
            image: "/images/Software-Development-Performance.webp"
        }
    ];

    return (
        <>
            <main className="min-h-screen bg-[#F8FAFC] font-sans text-[#4B5563]">
                <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content Column with Border */}
                        <div className="lg:w-[75%] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="p-4 md:p-6">
                                {/* Hero Image / Banner */}
                                <div className="flex items-center justify-center">
                                    <img className="bg-[#060d26] rounded-[2rem]" src="/images/EMR-VS-EHR.webp" alt="EMR Vs EHR Development" />
                                </div>

                                {/* Post Title */}
                                <div className="mb-6 mt-4" id="main-title">
                                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0A1A2E] leading-[1.2] mb-3">
                                        EMR Vs EHR Development: What should you choose for your healthcare business?
                                    </h2>
                                    <div className="flex flex-wrap gap-x-4 text-gray-500 font-bold text-[13px]">
                                        <span>April 1, 2025</span>
                                        <span>by Saurabh Dutta</span>
                                    </div>
                                </div>

                                {/* Post Content */}
                                <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                    <p>
                                        The healthcare industry is in the midst of a revolutionary digital transformation. The advent of new and better software systems have made things easier, at the same time, a bit confusing. The questions that ruffle the mind is: what to choose? What is better?
                                    </p>
                                    <p>
                                        Two examples of digital technologies that promise to revolutionize the healthcare system are: Electronic Medical Records (EMR) and Electronic Health Records (EHR). So, what is the difference between an EMR and an EHR?
                                    </p>
                                    <p>
                                        Before we go to that, let us tell you that both systems affect regulatory compliance and patient care. They also influence the operations of healthcare enterprises in the data-driven digital age.
                                    </p>
                                </div>

                                {/* Table of Contents */}
                                <div className="mt-10 mb-8 overflow-hidden shadow-md border border-gray-100 rounded-md">
                                    <button
                                        onClick={() => setIsTocOpen(!isTocOpen)}
                                        className="w-full flex items-center justify-between p-4 bg-[#32B9E9] text-white transition-all"
                                    >
                                        <span className="font-bold text-base text-black">Table of Contents</span>
                                        <ChevronDown className={`w-5 h-5 text-black transition-transform duration-300 cursor-pointer ${isTocOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isTocOpen && (
                                        <div className="p-6 bg-white border-x border-b border-gray-100 animate-in slide-in-from-top duration-300">
                                            <ul className="space-y-3 text-[15px] text-[#4B5563] hover:text-[#0A1A2E] font-medium">
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">1.</span>
                                                    <span
                                                        className="font-bold text-[#0A1A2E] hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('main-title')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        EMR Vs EHR Development: What should you choose for your healthcare business?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">2.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('what-is-the-difference')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        What is the difference between an EMR and an EHR?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">3.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('whats-the-similarity')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        What’s the similarity?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">4.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('emr-vs-ehr')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        EMR vs EHR
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 pl-4">
                                                    <span className="text-gray-400">4.1</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors text-[14px]"
                                                        onClick={() => document.getElementById('emr-definition')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        1. Electronic Medical Records (EMR):
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 pl-4">
                                                    <span className="text-gray-400">4.2</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors text-[14px]"
                                                        onClick={() => document.getElementById('ehr-definition')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        2. Electronic Health Records (EHR):
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">5.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('emr-vs-ehr-systems')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        EMR vs. EHR systems
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">6.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('what-to-choose')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        What to choose?
                                                    </span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-gray-400">7.</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors"
                                                        onClick={() => document.getElementById('emr-system-comparison')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        EMR system comparison with EHR system
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 pl-4">
                                                    <span className="text-gray-400">7.1</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors text-[14px]"
                                                        onClick={() => document.getElementById('effect-on-patient-care')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        1. Effect on patient care:
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 pl-4">
                                                    <span className="text-gray-400">7.2</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors text-[14px]"
                                                        onClick={() => document.getElementById('regulatory-compliance')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        2. Regulatory compliance:
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 pl-4">
                                                    <span className="text-gray-400">7.3</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors text-[14px]"
                                                        onClick={() => document.getElementById('cost-effectiveness')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        3. Cost effectiveness:
                                                    </span>
                                                </li>
                                                <li className="flex gap-2 pl-4">
                                                    <span className="text-gray-400">7.4</span>
                                                    <span
                                                        className="hover:text-[#32B9E9] cursor-pointer transition-colors text-[14px]"
                                                        onClick={() => document.getElementById('scalability-factor')?.scrollIntoView({ behavior: 'smooth' })}
                                                    >
                                                        4. Scalability factor:
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Section Content */}
                                <div className="space-y-10 mb-16">
                                    <div id="what-is-the-difference">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            What is the difference between an EMR and an EHR?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p className="font-bold text-lg">
                                                The first thing you must know is: EMR and EHR are not the same.
                                            </p>
                                            <p>
                                                Although people use these terms interchangeably, they cater to different kinds and functions of healthcare enterprises. As a healthcare provider, you must be careful in choosing a system, as the wrong choice can lead to compliance risks, interruptions in your healthcare operations, and system overhauls that can be expensive.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="whats-the-similarity">
                                        <h3 className="text-[20px] font-bold text-[#00a9e4] mb-5">
                                            What’s the similarity?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                EMR and EHR are both digital record-keeping systems. They assist the healthcare industry in keeping records of the patients and retrieving it when needed. Yet, they are different when it comes to the accessibility, scope, and overall impact on the healthcare operations.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="emr-vs-ehr">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            EMR vs EHR
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Before we dive deep into the difference between EHR and EMR, let’s understand what they are:
                                            </p>
                                        </div>
                                    </div>

                                    <div id="emr-definition" className="pl-4 border-l-4 border-[#00a9e4]/30">
                                        <h4 className="text-[18px] font-bold text-[#0A1A2E] mb-3">
                                            1. Electronic Medical Records (EMR):
                                        </h4>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                EMR is a fine alternative to paper-based medical records where a person had to manually pen down each and every detail of a patient’s health history, medication, current status, and likewise.
                                            </p>
                                            <p>
                                                EMR stores and manages patient diagnoses, medical history, treatment plans, medications, and health status. This works well for private healthcare practitioners and small healthcare enterprises. The system is not designed to share data between different enterprises and healthcare providers.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="ehr-definition" className="pl-4 border-l-4 border-[#32B9E9]/30">
                                        <h4 className="text-[18px] font-bold text-[#0A1A2E] mb-3">
                                            2. Electronic Health Records (EHR):
                                        </h4>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                EHR is a comprehensive system that connects multiple healthcare enterprises, providers, and hospitals so that they can access and share the patient’s health records. So, if a patient changes a hospital or a healthcare provider, the new hospital or provider can follow the patient’s health history through EHR system.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="emr-vs-ehr-systems">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            EMR vs. EHR systems
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                The following are the comparisons between the two digitally renowned healthcare software systems. This EMR vs. EHR table will help you understand what to choose for your healthcare enterprise.
                                            </p>

                                            {/* Table Component */}
                                            <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
                                                <table className="w-full text-left border-collapse text-sm">
                                                    <thead>
                                                        <tr className="bg-[#00a9e4]/10 text-[#0A1A2E]">
                                                            <th className="p-4 font-bold border-b border-gray-200">Functionalities</th>
                                                            <th className="p-4 font-bold border-b border-gray-200">EMR</th>
                                                            <th className="p-4 font-bold border-b border-gray-200">EHR</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100 text-black">
                                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="p-4 font-semibold text-[#0A1A2E]">Primary Function</td>
                                                            <td className="p-4">Patient medical history is only for internal use by single provider</td>
                                                            <td className="p-4">Patient records can be shared across multiple hospitals and providers</td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="p-4 font-semibold text-[#0A1A2E]">Data-Sharing</td>
                                                            <td className="p-4">Only internally</td>
                                                            <td className="p-4">Completely interoperable, allowing data sharing externally</td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="p-4 font-semibold text-[#0A1A2E]">Compliance</td>
                                                            <td className="p-4">Meets HIPAA standards, but no interoperability</td>
                                                            <td className="p-4">In compliance with 21st Century Cures Act & ONC interoperability criteria</td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="p-4 font-semibold text-[#0A1A2E]">Perfect for</td>
                                                            <td className="p-4">Private clinics and small healthcare enterprises</td>
                                                            <td className="p-4">Large scale healthcare networks and big enterprises, chain of hospitals, and multi-location healthcare settings</td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="p-4 font-semibold text-[#0A1A2E]">Scope of Integration</td>
                                                            <td className="p-4">Limited</td>
                                                            <td className="p-4">Integrates well with telehealth, analytics, AI, and other advanced technologies</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="what-to-choose">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            What to choose?
                                        </h3>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                EMR and EHR don’t simply denote software. They reflect how well technology can align with healthcare regulatory standards, enterprise needs, and scalability of the healthcare service.
                                            </p>
                                            <p>
                                                So, EMR vs EHR systems isn’t merely about differentiating the software technologies. It is about understanding whether the needs of the healthcare service is met through the system.
                                            </p>
                                            <p>
                                                Let’s have a closer look at how each system impacts the working of a healthcare setting.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="emr-system-comparison">
                                        <h3 className="text-[20px] font-bold text-[#32B9E9] mb-5">
                                            EMR system comparison with EHR system
                                        </h3>
                                    </div>

                                    <div id="effect-on-patient-care" className="pl-4 border-l-4 border-[#00a9e4]/30">
                                        <h4 className="text-[18px] font-bold text-[#0A1A2E] mb-3">
                                            1. Effect on patient care:
                                        </h4>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                EMRs enhance internal efficiency of a private clinic. The system enables the staff to access patient records quickly. However, a physician from other clinic cannot access this data, if needed.
                                            </p>
                                            <p>
                                                EHR, on the contrary, lets hospitals, physicians, and labs access the patient data and enable seamless collaboration. This reduces the chance for misdiagnosis, medication errors, and duplicate tests, as a result, paving way for better patient care.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="regulatory-compliance" className="pl-4 border-l-4 border-[#32B9E9]/30">
                                        <h4 className="text-[18px] font-bold text-[#0A1A2E] mb-3">
                                            2. Regulatory compliance:
                                        </h4>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                Regulatory standards for healthcare are evolving. There are now stricter mandates for transparency, interoperability, and data access. In such a situation, EMRs lose their competency and EHRs come in handy.
                                            </p>
                                            <p>
                                                EHR systems are designed to meet the evolving regulatory standards. They comply with:
                                            </p>
                                            <ul className="space-y-2 ml-4">
                                                <li className="flex items-start gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2"></span>
                                                    <span><span className="font-bold">HIPAA</span> (Health Insurance Portability and Accountability Act) that mandates patient privacy</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2"></span>
                                                    <span><span className="font-bold">The 21st Century Cures Act</span> that mandates interoperability and the right of a patient to access medical records</span>
                                                </li>
                                                <li className="flex items-start gap-3 text-[15px]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563] mt-2"></span>
                                                    <span><span className="font-bold">ONC</span> (Office of the National Coordinator for Health Information Technology) that sets standards for interoperability</span>
                                                </li>
                                            </ul>
                                            <p>
                                                As per EMR system comparison, EMRs may meet HIPAA standards, but they fail to comply with interoperability.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="cost-effectiveness" className="pl-4 border-l-4 border-[#00a9e4]/30">
                                        <h4 className="text-[18px] font-bold text-[#0A1A2E] mb-3">
                                            3. Cost effectiveness:
                                        </h4>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                For smaller healthcare enterprises, cost is a vital factor to consider when installing software systems. As we talk about EMR vs EHR, we realize that EMR systems are usually cheaper and easier to implement than EHR systems. This makes EMRs a preferred choice for small enterprises and private practitioners.
                                            </p>
                                            <p>
                                                EHRs are costlier than EMRs. Yet, they offer long-term functional efficiencies by alleviating manual paperwork, data entry, and administrative overload. EHRs can be the best choice for big hospitals and large scale healthcare settings, as the system streamlines their operations. For them, EHRs prove to be more cost-effective than EMRs in the long run.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="scalability-factor" className="pl-4 border-l-4 border-[#32B9E9]/30">
                                        <h4 className="text-[18px] font-bold text-[#0A1A2E] mb-3">
                                            4. Scalability factor:
                                        </h4>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7]">
                                            <p>
                                                A small scale healthcare enterprise is bound to expand in the future. In this case, EMR system comparison shows us that this system won’t support a growing enterprise. It is meant only for small scale ones.
                                            </p>
                                            <p>
                                                So, unless you are a private practitioner who wishes to continue practicing on an individual basis, you must upgrade to EHR system in the future, as your enterprise grows. If you continue with EMR, you might face challenges in data sharing, integration, regulatory compliance, and efficiency of your healthcare system.
                                            </p>
                                            <p>
                                                EHRs are future-proof. They are designed to seamlessly integrate with AI technologies, telehealth services, remote patient monitoring technologies, and other advanced clinical systems that utilize machine learning to achieve precision in healthcare.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="space-y-5 text-black text-[16px] leading-[1.7] border-t border-gray-100 pt-6">
                                            <p>
                                                Now that you know the difference between EHR and EMR, it becomes easier to choose between the two. Interpret your present needs and your future requirements. Choose a system accordingly and, when the time comes, upgrade intelligently. Remember, the healthcare industry is rapidly changing. You can’t stay with one set system the whole time.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Related Posts Section */}
                                <div className="-mt-8 pt-5 border-t border-gray-100">
                                    <h3 className="text-[24px] font-bold text-[#0A1A2E] mb-10">
                                        What we’ve learned is yours for sharing!
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {relatedPosts.map((post, i) => (
                                            <div key={i} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                                                <div className="relative h-44 w-full">
                                                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                                                    <div className="absolute top-3 right-3 bg-[#0052FF] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                                                        {post.category}
                                                    </div>
                                                </div>
                                                <div className="p-5 flex flex-col flex-1">
                                                    <h4 className="text-[15px] font-bold text-[#0A1A2E] mb-4 line-clamp-3 leading-tight group-hover:text-[#32B9E9] transition-colors">
                                                        {post.title}
                                                    </h4>
                                                    <div className="mt-auto">
                                                        <button className="text-[#0052FF] font-bold text-[12px] uppercase tracking-wider flex items-center gap-1 hover:underline">
                                                            READ MORE »
                                                        </button>
                                                        <div className="mt-4 pt-4 border-t border-gray-50">
                                                            <span className="text-gray-400 text-[11px] font-medium uppercase tracking-tight">
                                                                {post.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-[20%] space-y-6">
                            {/* Search */}
                            <div className="flex w-full rounded-md border border-gray-200 overflow-hidden h-[45px] bg-[#F1F3F4] shadow-sm">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-1 px-4 py-2 outline-none text-sm bg-transparent placeholder:text-gray-500"
                                />
                                <button className="bg-[#00AEEF] px-4 flex items-center justify-center text-white transition-colors hover:bg-[#0096ce]">
                                    <Search className="w-4 h-4 stroke-[3]" />
                                </button>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                <h4 className="text-[#0A1A2E] font-bold text-base mb-5 border-b border-gray-100 pb-2">
                                    Recent Posts
                                </h4>
                                <div className="space-y-5">
                                    {[
                                        { title: "3 Undebatable Reasons to Hire ...", img: "/images/img1.png" },
                                        { title: "10 Smartest Tips For Hiring A ...", img: "/images/img2.png" },
                                        { title: "App Development Company Case S...", img: "/images/img3.png" }
                                    ].map((post, i) => (
                                        <div key={i} className="flex gap-3 group cursor-pointer items-start">
                                            <div className="relative w-[60px] h-[60px] flex-shrink-0 rounded-md overflow-hidden border border-gray-100 shadow-sm">
                                                <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="text-[13px] font-bold text-[#0A1A2E] group-hover:text-[#32B9E9] transition-colors line-clamp-2 leading-snug">
                                                    {post.title}
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Category (Spelled 'Catagory' as per image) */}
                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                <h4 className="text-[#0A1A2E] font-bold text-base mb-5 border-b border-gray-100 pb-2">
                                    Catagory
                                </h4>
                                <div className="flex items-center gap-2 text-[14px] text-[#32B9E9] font-bold cursor-pointer group">
                                    <Image src="/images/img1.png" width={16} height={16} alt="icon" className="rounded-sm" />
                                    Software
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                                <h4 className="text-[#0A1A2E] font-bold text-base mb-5 border-b border-gray-100 pb-2">
                                    Contact Us
                                </h4>
                                <form className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-3 py-2 rounded border border-gray-200 outline-none focus:border-[#32B9E9] text-md bg-white"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-3 py-2 rounded border border-gray-200 outline-none focus:border-[#32B9E9] text-md bg-white"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone number"
                                        className="w-full px-3 py-2 rounded border border-gray-200 outline-none focus:border-[#32B9E9] text-md bg-white"
                                    />
                                    <textarea
                                        placeholder="Message"
                                        rows={3}
                                        className="w-full px-3 py-2 rounded border border-gray-200 outline-none focus:border-[#32B9E9] text-md bg-white resize-none"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#1E4DFF] text-white font-bold py-2 rounded-full transition-all active:scale-95 mt-1 text-md tracking-wide"
                                    >
                                        Submit Details
                                    </button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <FloatingContactButtons />
        </>
    );
}
