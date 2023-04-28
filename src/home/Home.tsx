import React from 'react'
import Hero from '../components/Hero';
import Tag from '../components/Tag';
import Project from '../components/Project';
import Contact from "../contact/Contact";

export default function Home() {
    return (
        <div style={{paddingTop: 50,paddingBottom: 200}}>
            <Hero />
            <div className='work-heading'>
                <span className='work-heading'>Projects</span>
            </div>
            <div className='work-section-description'>
                <span>Checkout my commercial and non commercial projects.</span>

                <span>If you have any questions for me feel free to ask me for more information.</span>
            </div>

            <div className='projects-container'>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>

            <Contact/>
        </div>
    );
}
