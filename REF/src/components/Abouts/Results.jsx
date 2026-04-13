import React from "react";
import icon from "../../assets/image/Frame 202.svg";
import bg from "../../assets/image/bgnew.png";

function Results() {
  const stats = [
    { id: 1, title: "Downloads", value: "50+" },
    { id: 2, title: "Users", value: "50+" },
    { id: 3, title: "Positive Reviews", value: "50+" },
    { id: 4, title: "Downloads", value: "50+" },
  ];

  return (
    <div className="relative w-full py-16 bg-gradient-to-r from-black via-[#000203] to-black text-white overflow-hidden">
      <img
        src={bg}
        alt="background"
        className="absolute opacity-60 w-[px]  md:h-[1009px] md:w-[986px] md:-ml-[180px]"
        style={{
          top: "-422px",
          left: "114px",
          transform: "rotate(-14.7deg)",
          zIndex: 0,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 z-10">
        <h2 className="text-2xl font-semibold mb-10">The Results</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-start">
          {stats.map((item) => (
            <div key={item.id} className="flex space-x-2">
              <img src={icon} className="h-10" alt="icon" />
              <div>
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-sm text-gray-300">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
