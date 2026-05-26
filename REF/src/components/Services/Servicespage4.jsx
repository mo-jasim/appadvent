import React from "react";
import htmlLogo from "../../assets/image/Html 5.png";
import jsLogo from "../../assets/image/Component 20.png";
import reactLogo from "../../assets/image/react.png";
import angularLogo from "../../assets/image/angular.png";
import nodeLogo from "../../assets/image/devicon_nodejs.png";
import tsLogo from "../../assets/image/Typescript.png";
import javaLogo from "../../assets/image/ri_java-fill (1).png";
import pythonLogo from "../../assets/image/material-icon-theme_python.png";
import bgnew from "../../assets/image/bgnew.png";

const Servicespage4 = () => {
  return (
    <div
      className="relative w-full h-auto overflow-hidden bg-white bg-cover bg-center bg-no-repeat "
      // style={{
      //   backgroundImage: `url(${bgnew})`,
      // }}
    >
        <img
        src={bgnew}
        alt="Background shape"
        className="
          absolute 
          object-cover 
          pointer-events-none 
          select-none 
          -rotate-[14.7deg]
          opacity-70
         w-[500px] h-[0px] -top-[0px] -left-[40px]
     
         md:w-[1200px] md:h-[800px] md:-top-[50px] md:-left-[90px]
          lg:w-[1327px] lg:h-[1357px] lg:-top-[213px] lg:-left-[125px]
        "
      />

     
      <div
        className="absolute -top-[213px] -left-[125px] w-[1327px] h-[1357px] -rotate-[14.7deg] opacity-90"
        // style={{
        //   background:
        //     "linear-gradient(205.02deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.75) 80%)",
        // }}
      ></div>
      {/* <div className="absolute inset-0 bg-white/80"></div> */}

      <div className="relative z-10 py-16 px-6 md:px- flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-10">
        
        <div className="flex-1 p-4 rounded-xl md:text-left">
          <h2 className="text-3xl md:text-3xl text-black mb-4 font-['THICCCBOI'] font-bold lg:text-[40px] leading-[130%] tracking-[0]">
            <span className="text-sky-500 font-bold">Technologies</span> We Work With :-
          </h2>
          <p className="text-black max-w-md text-start font-['THICCCBOI'] font-medium text-[20px] leading-[160%] tracking-[0] mx-auto md:mx-0">
            We can create top-notch apps and extensions for businesses and 
            endeavours thanks to our proficiency in a wide range of astounding technologies.
          </p>
        </div>

        <div className="hidden md:block lg:h-[450px] md:h-[800px] h-[680px] border-l-2 border-black/30"></div>

        <div className="flex flex-col gap-12 flex-1 p-4 rounded-xl">
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black md:text-left">• Front-end</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              <TechItem img={htmlLogo} name="HTML" />
              <TechItem img={jsLogo} name="JavaScript" />
              <TechItem img={reactLogo} name="React.js" />
              <TechItem img={angularLogo} name="Angular" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-black md:text-left">• Back-end</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              <TechItem img={nodeLogo} name="Node.js" />
              <TechItem img={tsLogo} name="TypeScript" />
              <TechItem img={javaLogo} name="Java" />
              <TechItem img={pythonLogo} name="Python" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const TechItem = ({ img, name }) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center justify-center rounded-xl shadow-sm hover:shadow-lg transition lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[90px] h-[90px]">
      <img src={img} alt={name} className="w-[80%] h-[80%] object-contain" />
    </div>
    <p className="mt-4 text-sm font-medium text-black">{name}</p>
  </div>
);

export default Servicespage4;
