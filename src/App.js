import React from 'react';
import './App.css';
import {Brands,Features,Footer,Header,Navbar,Stories} from './containers';
const App = () => {
  return (
    <div className='App'>
<Navbar />
<Header />
<Features />
<Brands />
<Stories />
<Footer />
    </div>
  )
}

export default App