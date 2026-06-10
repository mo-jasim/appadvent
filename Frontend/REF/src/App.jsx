import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutsmain from "./components/Abouts/Aboutsmain";
import Portfoliomain from "./components/Portfolio/Portfoliomain";
import Industriesmain from "./components/Industries/Industriesmain";
import Sevicesmain from "./components/Services/Sevicesmain";
import Blogmain from "./components/blog/Blogmain";
import Fintech_Cryptomain from "./components/Fintech_Crypto/Fintech_Cryptomain";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<Aboutsmain />} />
  <Route path="/Portfolio" element={<Portfoliomain />} />
  <Route path="/industries" element={<Industriesmain />} />
  <Route path="/Services" element={<Sevicesmain />} />
  <Route path="/Blogmain" element={<Blogmain />} />
  <Route path="/fintechCrypto" element={<Fintech_Cryptomain/>}/>
</Routes>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutsmain />} />
       <Route path="/Portfolio" element={<Portfoliomain/>}/>
       <Route path="/industries"element={<Industriesmain/>}/>
       <Route path="/Services" element={<Sevicesmain/>}/>
       <Route path="/Blogmain" element={<Blogmain/>}/>
       <Route path="/FintechCryptomain" element={<Fintech_Cryptomain/>}/>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
