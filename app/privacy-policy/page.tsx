"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function PrivacyPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white font-THICCCBOI text-[#061C3D] flex flex-col justify-between">
      <Navbar />

      <main className="pt-20 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        <div className="bg-white p-0 shadow-none border-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#061C3D] leading-tight border-b border-gray-100 pb-6">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-[15px] sm:text-[16px] leading-relaxed text-[#4A5568]">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                1. Introduction
              </h2>
              <p>
                At Appadvent Technologies, we value the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our services, including software applications, websites, and other products (collectively, &quot;Services&quot;). By using our Services, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We collect several types of information to provide and improve our Services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Personal Information:</strong> Information that identifies you as an individual, such as your name, email address, phone number, and payment details.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Usage Data:</strong> Data on how you interact with our Services, including IP addresses, browser type, operating system, and timestamps.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to track your activity and improve the functionality of our Services.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Third-Party Integrations:</strong> If you use third-party services (e.g., Google Analytics, social media logins), we may collect data through those integrations as well.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">
                We may use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain our Services.</li>
                <li>To personalize your experience and improve the functionality of our software.</li>
                <li>To process transactions and manage payments.</li>
                <li>To communicate with you about updates, support, and promotional materials.</li>
                <li>To comply with legal obligations or resolve disputes.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                4. Data Sharing and Disclosure
              </h2>
              <p className="mb-3">
                We may share your information with the following parties under specific circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#061C3D]">Service Providers:</strong> Trusted third-party vendors who help us deliver our Services (e.g., hosting providers, payment processors).
                </li>
                <li>
                  <strong className="text-[#061C3D]">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                </li>
                <li>
                  <strong className="text-[#061C3D]">Legal Compliance:</strong> We may disclose your information if required by law or in response to a valid legal request (e.g., a court order or government inquiry).
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                5. Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your data from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee complete security.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                6. Data Retention
              </h2>
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                7. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access, correct, or delete your information.</li>
                <li>The right to restrict or object to certain types of data processing.</li>
                <li>The right to withdraw consent if processing is based on consent.</li>
              </ul>
              <p className="mt-3">
                If you wish to exercise any of these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                8. International Data Transfers
              </h2>
              <p>
                If you are located outside India and choose to provide us with information, please note that your data may be transferred to and processed in India. By using our Services, you consent to this transfer.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our Services are not intended for use by children under the age of 13 (or other relevant age in your jurisdiction). We do not knowingly collect personal data from children. If we learn that we have inadvertently collected data from a child, we will take steps to delete that information.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will post the revised policy on our website and update the effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            {/* Section 11 */}
            <section className="pt-4 border-t border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-[#061C3D] mb-3">
                11. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
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
