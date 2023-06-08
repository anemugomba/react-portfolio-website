import React from 'react'
import Hero from '../components/Hero';
import ProjectCard from '../components/Project';
import Contact from "../contact/Contact";
import {projectsData} from "../data/data";

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
                {projectsData.map((item, index) => {
                    return <ProjectCard project={item} key={item.id}/>
                })}
            </div>

            <Contact/>
        </div>
    );
}
