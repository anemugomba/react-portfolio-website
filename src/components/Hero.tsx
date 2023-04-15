import React from 'react'

export default function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-left-section'>
                <div className='hero-img-container'>
                    <div className='hero-img-placeholder'>
                        <img src='https://placehold.co/200x200.png' alt='User Image' className='hero-img-placeholder'/>
                    </div>
                </div>
            </div>

            <div className='hero-right-section'>
                <div className="hero-intro">
                    Hi, I'm Anesu and I'm
                </div>

                <div className="hero-work">
                    a <span>FullStack Developer</span>
                </div>

                <div style={{ marginTop: 20 }} className='hero-bio'>
                    <span>
                    I'm an Experienced Software Engineer with a demonstrated history of
                    working ReactJS, MySQL, Laravel, Wordpress, SlimPHP, react
                    Native and Sveltkit. Skilled in Engineering, Geomatics, FullStack Development, Software
                    Development, and Geographic Information Systems (GIS). Strong
                    engineering
                    professional with a Bachelor's degree focused in Surveying
                    Technology/Surveying from
                    Midlands State University.
                    </span>
                </div>

                <div style={{ marginTop: 20 }} className='hero-buttons'>

                    <div style={{ marginRight: 10, display: 'inline' }}>
                        <button className='hero-button hero-button-black'>Contact me</button>
                    </div>

                    <button className='hero-button hero-button-white'>Check my work</button>
                </div>
            </div>
        </div>
    )
}
