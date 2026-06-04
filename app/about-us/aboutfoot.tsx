import Image from "next/image";

function Aboutfoot() {
  return (
    <div className='flex flex-col lg:flex-row gap-3 lg:gap-12 px-4 sm:px-6 lg:px-8 font-THICCCBOI max-w-7xl mx-auto mb-[80px]'>
      <div className='flex-1 font-THICCCBOI mt-20'>
        <ul className="font-bold text-[16px] sm:text-[20px] lg:text-[24px] mb-3">A Culture of Experience & Creativity</ul>
        <h1 className="font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight sm:leading-tight lg:leading-[1.15] mt-3 mb-2 lg:mb-4 max-w-2xl">Transforming Ideas In Our Work Collaborative Work Culture</h1>

        <div className='flex flex-row gap-3 mb-[10px]'>
          <Image
            src="/images/star1.png"
            alt="logo"
            width={24}
            height={24}
            className='flex-shrink-0 mt-1'
          />
          <h1 className='text-sm sm:text-base'>Emphasis Teamwork and Clear Communication.</h1>
        </div>

        <div className='flex flex-row gap-3 mb-[10px]'>
          <Image
            src="/images/star1.png"
            alt="logo"
            width={24}
            height={24}
            className='flex-shrink-0 mt-1'
          />
          <h1 className='text-sm sm:text-base'>Foster a Culture of Innovation and Creativity.</h1>
        </div>

        <div className='flex flex-row gap-3 mb-[10px]'>
          <Image
            src="/images/star1.png"
            alt="logo"
            width={24}
            height={24}
            className='flex-shrink-0 mt-1'
          />
          <h1 className='text-sm sm:text-base'>Encourage Continuous Learning and Development.</h1>
        </div>

        <div className='flex flex-row gap-3 mb-[10px]'>
          <Image
            src="/images/star1.png"
            alt="logo"
            width={24}
            height={24}
            className='flex-shrink-0 mt-1'
          />
          <h1 className='text-sm sm:text-base'>Promote Diversity and Inclusion in the Workplace.</h1>
        </div>

        <div className='flex flex-row gap-3 mb-[10px]'>
          <Image
            src="/images/star1.png"
            alt="logo"
            width={24}
            height={24}
            className='flex-shrink-0 mt-1'
          />
          <h1 className='text-sm sm:text-base'>Implement Effective Feedback Mechanisms.</h1>
        </div>
      </div>

      <div className='flex-1 w-full'>
        <Image
          src="/images/down2.png"
          alt="Collaborative work culture"
          width={500}
          height={500}
          className='w-full h-auto'
        />
      </div>

    </div>
  )


}
export default Aboutfoot;