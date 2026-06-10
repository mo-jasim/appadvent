import React from "react";
// import img from '../assets/image/Polygon 1.png'
import Hero from "../components/Hero";
import Shadow from "../components/Shadow";
import Sevices from "../components/Sevices";
import Images from "../components/Images";
import Industries from "../components/Industries";
import Cards from "../components/Cards";
import Clients from "../components/Clients";
import "./style.css";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <div className="hero-container">
        <Hero />
        {/* <HeroSection />       */}
        <Shadow />
        <Sevices />
      </div>
       <Images />
       <div className="hero-containerind">
        {/* <Images /> */} 
        <Industries />
</div>
        <div className="hero-containerss  ">
          <Cards />
         <Clients/>
         </div>
            <div className="hero-">
               
          <Contact />
          </div>

        
      </div>
    
  );
}

export default Home;
