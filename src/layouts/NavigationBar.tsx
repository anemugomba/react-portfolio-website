import React, { useState, useLayoutEffect, useEffect } from 'react'
import {
  Link
} from "react-router-dom";

function NavigationBar() {

  const [responsive, setResponsive] = useState(false)
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width > 600) {
      setResponsive(false)
    }
  }, [width])

  const redirectSocial = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className='fixed'>
      <div className='navigation-container'>
        <div className={`topnav ${responsive ? 'responsive' : ''}`} id="myTopnav">
          <span className='social-icons'>
            <i className="fa fa-github fa-xs" onClick={() => redirectSocial('https://github.com/anemugomba')}></i>

            <i className="fa fa-linkedin-square" onClick={() => redirectSocial('https://www.linkedin.com/in/anesu-mugomba-a51a851a2/')}></i>

            <i className="fa fa-twitter" onClick={() => redirectSocial('https://twitter.com/mambowechidiki')}></i>

          </span>

          <div className="url-container">
            <a href={"#home"}>Home</a>
            <a href={"#portfolio"}>Projects</a>
            <a href={"#contact-section"}>Contact</a>
          </div>


          <span className="icon" onClick={() => { setResponsive(!responsive) }}>
            <i className="fa fa-bars"></i>
          </span>
        </div>

        {responsive ? (
          <div className='topnav-float'>
            <div className='topnav-popup-container'>
              <a href={"#home"}>Home</a>
              <a href={"#portfolio"}>Projects</a>
              <a href={"#contact-section"}>Contact</a>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  )
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
export default NavigationBar