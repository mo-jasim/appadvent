import React from "react";
import phoneImg from "../../assets/image/blog.png";
import bg from "../../assets/image/bgnew.png";
import home from "../../assets/image/home.svg";

function Opportunities() {
  const opportunitiesData = [
    {
      title: "Digital Transformation in Insurance:-",
      desc: "The insurance sector is still transitioning from paper-based systems to digital workflows. Claim360 can become a flagship platform for digital claim management, reducing manual work and improving efficiency for insurers.",
    },
    {
      title: "Enhanced Customer Experience:-",
      desc: "By offering transparency, instant updates, and guided claim filing, Claim360 positions itself as a customer-centric solution — a major differentiator in an industry known for slow, confusing processes.",
    },
    {
      title: "Integration with Smart Technologies:-",
      desc: "There’s an opportunity to integrate AI and IoT features — such as automated damage detection using photos or drone footage, or predictive analytics to assess claim risks. These innovations can significantly improve claim accuracy and speed.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-blue-50 to-white py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <img
        src={bg}
        alt="Background Design"
        className="absolute opacity-60 rotate-[20deg]"
        style={{
          width: "1327.87px",
          height: "1357.31px",
          top: "1479px",
          left: "-124px",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Opportunities Await
          </h2>

          <ul className="space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
            {opportunitiesData.map((item, index) => (
              <li key={index} className="flex flex-col items-start gap-3">
                <div className="flex items-start gap-3">
                  <img
                    src={home}
                    alt="icon"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  />
                  <p className="font-semibold text-gray-900 text-start">
                    <span className="text-gray-900 font-semibold">
                      {item.title}{" "}
                    </span>
                    <span className="text-gray-700 font-normal">
                      {item.desc}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-[600px] md:max-w-[775px] h-[300px] sm:h-[380px] md:h-[442px] rounded-[1.5rem] overflow-hidden shadow-lg">
            <img
              src={phoneImg}
              alt="App Mockup"
              className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunities;
