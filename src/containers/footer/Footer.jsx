import React from 'react';
import { HiHeart } from "react-icons/hi";
import './footer.css';
const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer_blue'>
<h4>Hit the ground running a minimalist look</h4>
<button>Learn More</button>
    </div>
<div className='footer_black'>

<h1>M</h1>
<p>Handcrafted with <HiHeart /> in India by Faheemuddin Naseem</p>
<div className='footer_black-media'>
<p>FACEBOOK</p>
<p>TWITTER</p>
<p>INSTAGRAM</p>
</div>
</div>
    </div>
  )
}

export default Footer