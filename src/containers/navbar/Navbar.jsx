import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css'

import logo from '../../assets/logo.png'

const List = () => 
  (
    <>
      <p><a href="#top">Top</a></p>
      <p><a href="#forEveryone">For Everyone</a></p>
      <p><a href="#benefit">Benefit</a></p>
      <p><a href="#preview">Preview</a></p>
      <p><a href="#penulis">Penulis</a></p>
    </>
  )

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="ebook__navbar section__padding">
      <div className="ebook__navbar-logo">
        <img src={logo} alt="logo the malaka" />
        <h4>The Malaka</h4>
      </div>
      <div className="ebook__navbar-list">
        <List />
      </div>
      <div className="ebook__navbar-download">
        <button type='button'>Download</button>
      </div>
      <div className="ebook__navbar-responsive">
        {
          toggleMenu
          ?
            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : 
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu 
          && 
            (
              <div className="ebook__navbar-responsive_container scale-up-center">
                <div className="ebook__navbar-responsive_container-list">
                  <List />
                </div>
                <div className="ebook__navbar-responsive_container-download">
                  <button type='button'>Download</button> 
                </div> 
              </div>
            )
        }
      </div>
    </nav>
  )
}

export default Navbar