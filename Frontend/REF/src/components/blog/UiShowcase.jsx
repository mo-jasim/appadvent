import React from "react";
import img1 from "../../assets/image/ph360-2.png";
import img2 from "../../assets/image/360-3.png";
import img3 from "../../assets/image/Claim details.png";
import img4 from "../../assets/image/360-4.png";
import bg from "../../assets/image/bgnew.png";

function UiShowcase() {
  return (
    <div className="relative px-4 lg:px-16 py-6 overflow-hidden">
   
      <img
        src={bg}
        alt="Background Top Right"
        className="absolute opacity-90 rotate-[-12.09deg]"
        style={{
          width: "1085.1540318577952px",
          height: "1084.8096715128574px",
          top: "-128px",
          left: "574px",
          zIndex: "-1",
        }}
      />

     
      <img
        src={bg}
        alt="Background Bottom Left"
        className="absolute opacity-60 rotate-[22.7deg]"
        style={{
          width: "1085.154010118348px",
          height: "1084.8096497803092px",
          top: "1259px",
          left: "-504px",
          zIndex: "-1",
        }}
      />

      <h1 className="text-[48px] font-bold leading-[100%] tracking-[0%] text-center font-[THICCCBOI] mt-4 py-5">Glimpses of App UI Screens</h1>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center py-8">
        <div className="h-[1200px] md:h-[830px] lg:h-[951px] w-full lg:w-[280px] row-span-3 col-span-1 rounded-[20px] overflow-hidden">
          <img src={img1} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="h-[407px] md:col-span-1 lg:col-span-2  overflow-hidden rounded-[20px]">
          <img src={img2} alt="" className="w-full h-full rounded-[20px] object-cover" />
        </div>

        <div className="h-[407px] rounded-[20px] overflow-hidden">
          <img src={img3} alt="" className="w-full h-full rounded-[20px] object-cover" />
        </div>

        <div className="h-[524px] md:col-span-2 lg:col-span-3 rounded-[20px] overflow-hidden">
          <img src={img4} alt="" className="w-full h-full rounded-[20px] object-cover" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 justify-center">
        <div className="h-[407px] lg:w-full lg:col-span-2 rounded-[20px] overflow-hidden">
          <img src={img2} alt="" className="w-full h-full object-cover rounded-[20px]" />
        </div>

        <div className="h-[407px] w-full rounded-[20px] overflow-hidden">
          <img src={img3} alt="" className="w-full h-full object-cover rounded-[20px]" />
        </div>

        <div className="h-[407px] w-full rounded-[20px] overflow-hidden">
          <img src={img3} alt="" className="w-full h-full object-cover rounded-[20px]" />
        </div>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 justify-center px-0 md:px-4">
        <div className="h-[590px] w-full lg:w-[268px] rounded-[20px] overflow-hidden">
          <img src={img2} alt="" className="w-full h-[610px] object-cover rounded-[20px]" />
        </div>

        <div className="h-[590px] w-full lg:w-[268px] rounded-[20px] overflow-hidden">
          <img src={img3} alt="" className="w-full h-[610px] object-cover rounded-[20px]" />
        </div>

        <div className="h-[580px] w-full lg:w-[610px] lg:col-span-2 rounded-[20px] overflow-hidden">
          <img src={img3} alt="" className="h-[582px] w-[640px] object-cover rounded-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default UiShowcase;
