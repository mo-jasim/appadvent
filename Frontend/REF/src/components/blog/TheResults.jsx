import React from "react";
import icon from "../../assets/image/Frame 202.svg";

function TheResults() {
  const stats = [
    { id: 1, title: "Downloads", value: "50+" },
    { id: 2, title: "Users", value: "50+" },
    { id: 3, title: "Positive Reviews", value: "50+" },
    { id: 4, title: "Downloads", value: "50+" },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-r from-black via-[#0b223d] to-black text-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-2xl font-semibold mb-10">The Results</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-start">
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-start space-y-3"
            >
              <img src={icon} className="h-10" alt="" />
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-300">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TheResults;
