"use client"

import React from "react"
import Image from "next/image"


import img2 from "../public/images/1.png"
import img3 from "../public/images/2.png"
import img4 from "../public/images/3.png"
import img5 from "../public/images/4.png"

/* repeat images twice for seamless infinite scroll */
const baseImages = [img2, img3, img4, img5]
const images = [...baseImages, ...baseImages, ...baseImages, ...baseImages]

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

        /* ── scrolling box – continuous left scroll ─────────────────── */
        @keyframes heroScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-scroll-box {
          display: flex;
          gap: 1rem;
          position: relative;
          animation: heroScroll 35s linear infinite;
          width: max-content;
        }
        
        /* Pause on hover */
        .hero-curve-bg:hover .hero-scroll-box {
          animation-play-state: paused !important;
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
        @media (min-width: 640px)  { .hero-img-area { height: 200px; } }
        @media (min-width: 768px)  { .hero-img-area { height: 300px; } }
        @media (min-width: 1024px) { .hero-img-area { height: 380px; } }
      `}</style>

      {/* curved image strip */}
      <div className="hero-curve-bg hero-img-area w-full">
        <div className="hero-scroll-box">
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-[10px] md:rounded-[20px] overflow-hidden relative w-[300px] h-[130px] sm:w-[390px] sm:h-[170px] md:w-[550px] md:h-[270px] lg:w-[650px] lg:h-[360px]"
            >
              <Image
                src={img}
                alt={`slide-${i}`}
                fill
                priority={i < 6}
                style={{ objectFit: "fill", objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
