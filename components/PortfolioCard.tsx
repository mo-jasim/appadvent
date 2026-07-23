import React from "react"
import Link from 'next/link'

type PortfolioCardProps = {
  image: string
  title: string
  duration: string
  platform: string
  slug?: string
  href?: string
}

const PortfolioCard = ({
  image,
  title,
  duration,
  platform,
  slug,
  href
}: PortfolioCardProps) => {
  return (
    <Link href={href || `/portfolio/${slug}`} className="group relative block h-full">
      <div className="relative h-full rounded-[20px] p-[2px] transition-all duration-500 bg-transparent hover:bg-[#F0F0F0] group-hover:bg-gradient-to-br group-hover:from-[#32B9E9] group-hover:via-[#6DD5FA] group-hover:to-[#2193b0]">
        <div className="relative h-full rounded-[18px] bg-white flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(50,185,233,0.12)] overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
          
          <div className="absolute inset-0 overflow-hidden rounded-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#32B9E9]/10 to-transparent"
              style={{ animation: "shimmer 2s ease-in-out infinite" }}
            />
          </div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#32B9E9] to-transparent transition-all duration-700 rounded-full z-10" />

          <div className="w-full p-6 relative z-10 flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="w-full max-h-[300px] object-cover rounded-[8px] transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="px-6 py-2 pb-[32px] space-y-3 relative z-10">
            <h3 className="text-[24px] font-bold text-black group-hover:text-[#0d2a3a] transition-colors duration-300">
              {title}
            </h3>

            <div className="flex justify-between text-[14px] font-medium text-gray-500">
              <span>
                <p className="text-black">Completion Time</p>
                <p className="text-[16px] text-black font-bold">{duration}</p>
              </span>

              <span>
                <p className="text-black">Platform</p>
                <p className="text-[16px] text-black font-bold">{platform}</p>
              </span>

              <span>
                <p className="text-black">View</p>
                <span className="text-[16px] text-[#32B9E9] underline group-hover:text-[#2193b0]">
                  Full details
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PortfolioCard
