import React from "react";
import uiImage from "../../assets/image/Rectangle 71 (3).png"; 
import bg from "../../assets/image/bgnew.png";

const Ui = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-tr from-[#fdfeff] via-[#fffdfd] to-[#fcfbfb] py-20 px-4 flex flex-col items-center text-center">

      <img
        src={bg}
        alt="background"
        className="absolute top-[-890px] right-[0px] w-[608px] h-[1357px] opacity-90 rotate-[-14.7deg] pointer-events-none select-none"
      />
      <img
        src={bg}
        alt="background"
        className="absolute -bottom-[500px] left-[-450px] w-[938px] h-[857px] opacity-90 rotate-[-14.7deg] pointer-events-none select-none"
      />

      <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 relative z-10">
        Glimpses of App UI Screens
      </h2>

      <div className="lg:w-[1117px] rounded-[8px] overflow-hidden  relative z-10">
        <img
          src={uiImage}
          alt="App UI Screens"
          className="w-full lg:h-[800px] object-cover"
        />
      </div>
    </div>
  );
};

export default Ui;
