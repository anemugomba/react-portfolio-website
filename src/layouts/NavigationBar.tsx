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


  return (
    <div className='fixed'>
      <div className='navigation-container'>
        <div className={`topnav ${responsive ? 'responsive' : ''}`} id="myTopnav">
          <span className='social-icons'>
            <i className="fa fa-github fa-xs"></i>

            <i className="fa fa-linkedin-square"></i>

            <i className="fa fa-twitter"></i>
          </span>

          <div className="url-container">
            <Link to={{ pathname: "/home" }} className="active">About Me</Link>
            <Link to={{ pathname: "/home" }} >Experience</Link>
            <Link to={{ pathname: "/portfolio" }}>Projects</Link>
            <Link to={{ pathname: "/contact" }}>Contact</Link>
          </div>


          <span className="icon" onClick={() => { setResponsive(!responsive) }}>
            <i className="fa fa-bars"></i>
          </span>
        </div>

        {responsive ? (
          <div className='topnav-float'>
            <div className='topnav-popup-container'>
              <Link to={{ pathname: "/home" }} className="active">Home</Link>
              <Link to={{ pathname: "/about" }}>About Me</Link>
              <Link to={{ pathname: "/contact" }}>Contact</Link>
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