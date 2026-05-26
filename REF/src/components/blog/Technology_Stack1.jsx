import React from "react";
import htmlLogo from "../../assets/image/Html 5.png";
import jsLogo from "../../assets/image/Component 20.png";
import reactLogo from "../../assets/image/react.png";
import angularLogo from "../../assets/image/angular.png";
import nodeLogo from "../../assets/image/devicon_nodejs.png";
import tsLogo from "../../assets/image/Typescript.png";
import javaLogo from "../../assets/image/Vector (3).svg";
import pythonLogo from "../../assets/image/material-icon-theme_python.png";

const Technology_Stack1 = () => {
  return (
    <div
      className="relative w-full h-auto overflow-hidden bg-black text-white bg-cover bg-center bg-no-repeat"
    >
      <div className="relative z-10 py-16 px-6 md:px-10 lg:px-6 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-10">
        
      
        <div className="flex-1 p-4 rounded-xl md:text-left">
          <h2 className="text-3xl  mb-4 font-['THICCCBOI'] font-bold lg:text-[40px] leading-[130%] tracking-[0]">
           Our Technology Stack In Goalkick application:-
          </h2>
         
        </div>

        <div className="hidden md:block lg:h-[450px] h-[680px] border-l-2 border-white/30"></div>

        <div className="flex flex-col gap-12 flex-1 p-4 rounded-xl">
          
          <div>
            <h3 className="text-lg font-semibold mb-4 md:text-left">• Front-end</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              <TechItem img={htmlLogo} name="HTML" />
              <TechItem img={jsLogo} name="JavaScript" />
              <TechItem img={reactLogo} name="React.js" />
              <TechItem img={angularLogo} name="Angular" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 md:text-left">• Back-end</h3>
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
    <p className="mt-4 text-sm font-medium text-white">{name}</p>
  </div>
);

export default Technology_Stack1;
