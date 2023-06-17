import React from 'react'
import hero from "../images/hero.jpg"
import user from "../images/user.jpeg"

export default function Hero() {
    return (
        <div className='hero-container' style={{ backgroundImage: `url(${hero})` }}>

            <span className="credit">
                <a href="https://www.freepik.com/free-vector/white-banner-with-triangle-halftone-shapes_30753109.htm#query=parttern&position=33&from_view=search&track=sph">Image by starline</a> on Freepik
            </span>

            <div className='hero-left-section'>
                <div className='hero-img-container'>
                    <div className='hero-img-placeholder'>
                        <img src={user} alt='User Image' className='hero-img-placeholder'/>
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
                    Full stack developer with more than 5 years of experience in creating functional and user-friendly web and mobile applications. I have worked with various technologies and frameworks, such as ReactJS, MySQL, Laravel, WordPress, SlimPHP, React Native, GIS, AWS, Leaflet, and Sveltkit. I am proficient in both front-end and back-end development, as well as database management and deployment. I enjoy learning new skills and tools to improve my work and deliver high-quality products.
                        I am adaptable and flexible to changing requirements and deadlines, and I always strive to meet the expectations of my clients and users.
                    </span>
                </div>

                <div style={{ marginTop: 20 }} className='hero-buttons'>

                    <div style={{ marginRight: 10, display: 'inline' }}>
                        <button className='hero-button hero-button-black' onClick={() => window.open('https://anesu-portfolio-site.s3.amazonaws.com/resume/Resume_Anesu_Mugomba.pdf','_blank')}>Resume</button>
                    </div>

                    <button className='hero-button hero-button-white'>Check my work</button>
                </div>
            </div>
        </div>
    )
}
