"use client";
import React from "react";
import { motion } from "framer-motion";

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-row gap-4 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/+918864023673"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 group"
        aria-label="Contact on WhatsApp"
        initial={{ y: -300, opacity: 0, scaleY: 1, scaleX: 1 }}
        animate={{
          y: [-300, 0, -28, 0, -14, 0, -6, 0],
          scaleY: [1.1, 0.90, 1.03, 0.95, 1.01, 0.98, 1.005, 1.0],
          scaleX: [0.95, 1.05, 0.98, 1.025, 0.99, 1.01, 0.997, 1.0],
          opacity: [0, 1, 1, 1, 1, 1, 1, 1]
        }}
        transition={{
          y: {
            duration: 1.5,
            times: [0, 0.36, 0.53, 0.63, 0.73, 0.83, 0.91, 1.0],
            ease: ["easeIn", "easeOut", "easeIn", "easeOut", "easeIn", "easeOut", "easeIn"],
            delay: 0.2
          },
          scaleY: {
            duration: 1.5,
            times: [0, 0.36, 0.53, 0.63, 0.73, 0.83, 0.91, 1.0],
            ease: ["easeIn", "easeOut", "easeIn", "easeOut", "easeIn", "easeOut", "easeIn"],
            delay: 0.2
          },
          scaleX: {
            duration: 1.5,
            times: [0, 0.36, 0.53, 0.63, 0.73, 0.83, 0.91, 1.0],
            ease: ["easeIn", "easeOut", "easeIn", "easeOut", "easeIn", "easeOut", "easeIn"],
            delay: 0.2
          },
          opacity: {
            duration: 0.25,
            delay: 0.2
          }
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-9 h-9 fill-white transition-transform group-hover:rotate-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default FloatingContactButtons;
