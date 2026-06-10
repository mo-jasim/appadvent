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
    <Link href={href || `/portfolio/${slug}`} className="bg-white rounded-[16px] border border-[#E5E5E5] transition overflow-hidden block hover:shadow-lg hover:-translate-y-1">

      <div className="w-full h-95 p-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[8px]"
        />
      </div>


      <div className="px-6 py-2 pb-[32px] space-y-3">
        <h3 className="text-[24px] font-bold text-black">
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
            <span className="text-[16px] text-[#32B9E9] underline">
              Full details
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PortfolioCard
