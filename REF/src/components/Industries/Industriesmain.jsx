import React from 'react'
import Industriespage1 from './Industriespage1'
import Industriespage2 from './Industriespage2'
import "./Industries.css";
import FintechSlider from '../Fintech_Crypto/FintechSlider';
function Industriesmain() {
  return (
    <div className='hero-container1'>
      <Industriespage1/>
      <Industriespage2/>
      {/* <FintechSlider/>  */}
    </div>
  )
}

export default Industriesmain
