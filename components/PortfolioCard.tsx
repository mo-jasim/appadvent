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
      <div className="relative h-full rounded-[20px] bg-white border border-gray-100/80 flex flex-col shadow-none hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="w-full p-6 relative z-10 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="w-full max-h-[300px] object-cover rounded-[8px] transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="px-6 py-2 pb-[32px] space-y-3 relative z-10 flex-grow flex flex-col justify-between">
          <h3 className="text-[24px] font-bold text-black group-hover:text-[#0d2a3a] transition-colors duration-300">
            {title}
          </h3>

          <div className="flex justify-between text-[14px] font-medium text-gray-500 pt-2">
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
    </Link>
  )
}

export default PortfolioCard
