"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function TermsAndConditions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white font-THICCCBOI text-[#061C3D] flex flex-col justify-between">
      <Navbar />

      <main className="pt-20 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        <div className="bg-white p-0 shadow-none border-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#061C3D] leading-tight border-b border-gray-100 pb-6">
            Terms and Conditions
          </h1>

          <div className="space-y-8 text-[15px] sm:text-[16px] leading-relaxed text-[#4A5568]">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to Appadvent Technologies. These Terms and Conditions (&quot;Terms&quot;) govern your use of our services, including our software, websites, applications, and related products (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="mt-3">
                If you do not agree with these Terms, do not use our Services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                2. License to Use Software
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Grant of License:</strong> Subject to your compliance with these Terms, Appadvent Technologies grants you a limited, non-exclusive, non-transferable license to use our software in accordance with the documentation provided.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Restrictions:</strong> You may not reverse engineer, decompile, modify, or create derivative works from the software. You also agree not to distribute, sell, lease, or sublicense the software.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Ownership:</strong> All intellectual property rights in the software and associated documentation remain with Appadvent Technologies.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                3. Account Registration
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Account Creation:</strong> In order to access certain features or Services, you may need to create an account. You agree to provide accurate, complete, and up-to-date information when registering.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials, and for all activities under your account. Notify us immediately if you suspect any unauthorized use of your account.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                4. User Obligations
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Acceptable Use:</strong> You agree to use our Services only for lawful purposes and in a manner that does not infringe upon the rights of others or disrupt the Services.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Prohibited Activities: You agree not to:</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Engage in illegal activities.</li>
                    <li>Upload harmful software or malware.</li>
                    <li>Harass, abuse, or harm others through our Services.</li>
                    <li>Attempt to access other users&apos; accounts or interfere with the operation of the Services.</li>
                    <li>Violate applicable laws or regulations.</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                5. Payments and Subscription
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Pricing:</strong> Access to certain Services may require payment. You agree to pay all applicable fees associated with your subscription or purchase of Services.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Billing:</strong> All payments are processed in accordance with the billing cycle specified. Failure to make timely payment may result in suspension or termination of your access to the Services.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Refunds:</strong> Depending on the plan, refunds may not be issued except where required by law or as specified in the service agreement.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                6. Updates and Modifications
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Software Updates:</strong> We may periodically update or modify the software to improve functionality or security. You agree to install updates as provided by Appadvent Technologies.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Changes to Terms:</strong> We reserve the right to modify or update these Terms at any time. Any changes will be posted on our website, and the updated Terms will be effective as of the date indicated.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                7. Termination
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Termination by You:</strong> You may cancel your account at any time by contacting us, subject to the terms of your subscription or service agreement.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Termination by Us:</strong> We may suspend or terminate your access to the Services if you violate these Terms or engage in harmful behavior. Upon termination, your right to access the Services will cease, and you must immediately stop using the software.
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                8. Disclaimer of Warranties
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">No Warranty:</strong> Our Services are provided &quot;as-is,&quot; without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Limitation of Liability:</strong> In no event shall Appadvent Technologies be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Services.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                9. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold Appadvent Technologies harmless from any claims, losses, or damages, including attorney&apos;s fees, arising out of your use of the Services or your violation of these Terms.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                10. Privacy and Data Protection
              </h2>
              <p>
                By using our Services, you consent to the collection and processing of your personal data as outlined in our Privacy Policy.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                11. Governing Law and Dispute Resolution
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Dispute Resolution:</strong> Any dispute arising out of or related to these Terms shall be resolved through arbitration or in the courts of Noida, Uttar Pradesh, India.
                </li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                12. Force Majeure
              </h2>
              <p>
                We are not liable for any delay or failure to perform our obligations if the delay or failure is due to circumstances beyond our reasonable control, such as natural disasters, strikes, or technical failures.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                13. Miscellaneous
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Entire Agreement:</strong> These Terms constitute the entire agreement between you and Appadvent Technologies regarding the use of our Services and supersede all prior agreements or communications.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent.
                </li>
              </ul>
            </section>

            {/* Section 14 */}
            <section className="pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                14. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions or concerns about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-[#EAF8FD] p-5 rounded-2xl border border-sky-100 font-medium text-[#061C3D]">
                <p className="font-bold text-lg mb-1">APPADVENT TECHNOLOGIES</p>
                <p>H-190 NOIDA SECTOR 63, U.P (201301)</p>
                <p>Email: <a href="mailto:info@appadvent.com" className="text-[#32B9E9] hover:underline">info@appadvent.com</a></p>
                <p>Phone: <a href="tel:+918864023673" className="text-[#32B9E9] hover:underline">+91-8864023673</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
