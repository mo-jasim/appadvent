"use client";

import React, { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";

const services = [
  "Website Designing & Development",
  "Mobile App Development",
  "Staff Augmentation",
  "Digital Marketing",
  "Support & Maintenance",
  "Custom Based Services",
];

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset form when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      }, 400);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[98] bg-black/40 backdrop-blur-[2px]
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer Panel */}
      <div
        className={`
          fixed top-0 right-0 z-[99] h-full w-full max-w-[460px]
          transition-transform duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          background:
            "linear-gradient(160deg, #1ab5e8 0%, #0693c7 50%, #0478a8 100%)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close contact panel"
          className="absolute top-4 right-4 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
        >
          <X size={15} className="text-white" />
        </button>

        <div className="h-full overflow-y-auto px-7 pt-8 pb-8 font-THICCCBOI">
          {submitted ? (
            /* ——— Success State ——— */
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-white text-2xl font-bold mb-3">
                Details Submitted!
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Thank you! Our team will thoroughly review your project details
                and get back to you promptly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    message: "",
                  });
                }}
                className="text-white/70 text-sm underline underline-offset-2 hover:text-white transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            /* ——— Form State ——— */
            <>
              {/* Header */}
              <h2 className="text-white text-[26px] font-extrabold leading-snug mb-2 pr-8">
                Got a project in mind?
              </h2>
              <p className="text-white text-[14px] leading-relaxed mb-6">
                Share the details of your project – like scope, timeframes, or
                business challenges. Our team will thoroughly review the
                materials and respond to you promptly.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
                  />
                </div>

                {/* Services Dropdown */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{ color: formData.service ? "#1f2937" : "#9ca3af" }}
                    className="w-full px-3 py-3 pr-8 rounded-lg bg-white/95 text-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-white/60 transition-all"
                  >
                    <option value="" disabled>
                      Select your appropriate services
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-gray-800">
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-3 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-white/60 transition-all resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    w-full mt-1 py-3 rounded-lg
                    bg-[#0571a0] hover:bg-[#045d87]
                    text-white font-bold text-[15px] tracking-wide
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                    active:scale-[0.98]
                  "
                >
                  Submit Details
                  <span className="text-base leading-none">»</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactDrawer;
