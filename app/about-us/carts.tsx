import Image from "next/image";

function carts() {
  return (
    <div className='mt-10 font-THICCCBOI grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mb-[80px] lg:mb-[120px] gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto '>
      <div className="bg-white p-6 md:p-8 shadow-sm rounded-[24px] hover:shadow-xl transition-all border border-gray-200 flex flex-col" >
        <Image
          src="/images/arrow.svg"
          alt="Our Mission"
          width={50}
          height={42} />
        <h1 className="text-[20px] md:text-[24px] font-bold mt-4 md:mt-6 mb-3">
          Our Mission
        </h1>
        <p className="text-[15px] sm:text-[16px] text-gray-500 leading-relaxed">
          At Appadvent, we blend creativity with technology to craft apps that truly deliver value. Our team focuses on innovation, user-friendly design, and scalable solutions tailored to your business goals. With us, you don’t just get an app—you get a partner in growth.
        </p>

      </div>
      <div className="bg-white p-6 md:p-8 shadow-sm rounded-[24px] hover:shadow-xl transition-all border border-gray-200 flex flex-col" >
        <Image
          src="/images/crad2.svg"
          alt="Our Vision"
          width={50}
          height={42} />
        <h1 className="text-[20px] md:text-[24px] font-bold mt-4 md:mt-6 mb-3">
          Our Vision
        </h1>
        <p className="text-[15px] sm:text-[16px] text-gray-500 leading-relaxed">
          At Appadvent, we blend creativity with technology to craft apps that truly deliver value. Our team focuses on innovation, user-friendly design, and scalable solutions tailored to your business goals. With us, you don’t just get an app—you get a partner in growth.
        </p>

      </div>
      <div className="bg-white p-6 md:p-8 shadow-sm rounded-[24px] hover:shadow-xl transition-all border border-gray-200 flex flex-col" >
        <Image
          src="/images/crad3.svg"
          alt="Our Proficiency"
          width={50}
          height={42} />
        <h1 className="text-[20px] md:text-[24px] font-bold mt-4 md:mt-6 mb-3">
          Our Proficiency
        </h1>
        <p className="text-[15px] sm:text-[16px] text-gray-500 leading-relaxed">
          At Appadvent, we blend creativity with technology to craft apps that truly deliver value. Our team focuses on innovation, user-friendly design, and scalable solutions tailored to your business goals. With us, you don’t just get an app—you get a partner in growth.
        </p>

      </div>
    </div>
  )
}

export default carts;