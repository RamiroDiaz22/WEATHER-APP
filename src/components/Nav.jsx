import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.jsx';
import './Nav.css'
import BtnSwitch from './BtnSwitch.jsx'
import { WiCloud } from "react-icons/wi";


function Nav({onSearch, dark}) {
  return (
    <nav className="contenedor-nav">
        <span className="text-nav">
      <Link to='/' className="inicio-nav">
          <WiCloud className='logo-nav'/>
          <span className="home-nav">Weather App</span>
      </Link>
      <Link to='/about' >
        <span className="about-nav">About</span>
      </Link>
        </span>
        <span className="barras-nav">
        <SearchBar
          onSearch={onSearch}
        />
        <BtnSwitch dark={dark}/>
        </span>
    </nav>
  );
};

export default Nav;
