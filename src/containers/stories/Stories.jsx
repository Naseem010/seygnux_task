import React from 'react';
import img3 from '../../asset/3.jpeg'
import img4 from '../../asset/4.jpeg'
import img5 from '../../asset/5.jpeg'
import img6 from '../../asset/6.jpeg'

import './stories.css'
const Stories = () => {
  return (
    <div className='story'>
    <div className='story-header'>
      <h1>We create stories.</h1>
      <p>A killer narrative will turn readers into raving fans.</p>

    </div>
    <div className='story-bar'></div>
    <div className='story-img_container'>
    <div className='story-img'>
<img src={img3} alt="img" />
<h4>OVERCOMING CREATIVE BLOCK</h4>
<p>Brian Gardner. May 1,2023</p>
    </div>
    <div className='story-img'>
    <img src={img4} alt="img"/>
    <h4>WHY COMMUNICATION IS KEY</h4>
<p>Brian Gardner. May 1,2023</p>
</div>
 <div className='story-img'>
 <img src={img5} alt="img" />
 <h4>THE PATH OF LEAST RESISTANCE</h4>
 <p>Brian Gardner. May 1,2023</p>
</div>
 <div className='story-img'>
<img src={img6} alt="img" />
 <h4>HOW TO REACH NEW HEIGHTS</h4>
 <p>Brian Gardner. May 1,2023</p>

</div>
</div>
    </div>
  )
}

export default Stories