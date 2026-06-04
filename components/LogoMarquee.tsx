"use client"

import React from "react"
import Image from "next/image"


import img2 from "../public/images/pccc1.jpg"
import img3 from "../public/images/pccc2.jpg"
import img4 from "../public/images/pccc3.jpg"
import img5 from "../public/images/pccc4.jpeg"

/* repeat images to fill arc — same pattern as REF Hero.jsx */
const images = [img2, img3, img4, img5, img2, img3, img4, img5,]

export default function LogoMarquee() {
  return (
    <>
      <style>{`
        /* ── curve mask  (identical to REF Hero.css .curve-bg) ──────── */
        .hero-curve-bg {
          --c: 85;
          aspect-ratio: 3/2;
          
          -webkit-mask-composite: intersect;
          mask-composite: intersect;
          clip-path: ellipse(calc(var(--c) * 1%) 100% at center);
          overflow: hidden;
        }

        /* ── scrolling box (REF .box animation) ─────────────────────── */
        @keyframes heroScroll {
          100%   { transform: translateX(900px); }
          100% { transform: translateX(1200px); }
        }
        .hero-scroll-box {
          display: flex;
          gap: 1rem;
          justify-content: center;
          position: relative;
          animation: heroScroll 8s ease-in-out infinite alternate;
          max-width: 100vw;
        }

        /* ── responsive height (perfectly matched for true vertical masking symmetry) ── */
        .hero-img-area {
          max-width: 100%;
          height: 130px;
          margin: 0 auto;
          margin-top: 2.5rem;
          display: flex;
          align-items: center;
        }
        @media (min-width: 640px)  { .hero-img-area { height: 190px; } }
        @media (min-width: 768px)  { .hero-img-area { height: 260px; } }
        @media (min-width: 1024px) { .hero-img-area { height: 380px; } }
      `}</style>

      {/* curved image strip */}
      <div className="hero-curve-bg hero-img-area w-full">
        <div className="hero-scroll-box">
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-[10px] md:rounded-[20px] overflow-hidden relative w-[270px] h-[150px] sm:w-[370px] sm:h-[250px] md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[380px]"
            >
              <Image
                src={img}
                alt={`slide-${i}`}
                fill
                priority={i < 6}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
