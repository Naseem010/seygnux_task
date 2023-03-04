import React ,{useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className='navbar'>
    <div className='navbar_main'>
    <div className='navbar_logo'>
<h1>M</h1>
    </div>
    <div className='navbar_links'>
<p>Sample</p>
<p>Features</p>
<p>Layouts</p>
<p>Our Shop</p>
<p>Buy Theme</p>
<AiOutlineSearch />
    </div>
    </div>
    <div className='navbar_menu'>
<AiOutlineSearch />
    {toggleMenu?<RiCloseLine color='#000000' size={27} onClick={()=>setToggleMenu(false)} />
:<RiMenu3Line color='#000000' size={27} onClick={()=>setToggleMenu(true)} />
}
{toggleMenu &&( 
  <div className='navbar_links_menu'>
<p>Sample</p>
<p>Features</p>
<p>Layouts</p>
<p>Our Shop</p>
<p>Buy Theme</p>
    </div>
)}
    </div>
    </div>
  );
}

export default Navbar