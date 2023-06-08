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
                <span className='work-heading'>Personal Projects</span>
            </div>
            <div className='work-section-description'>
                <span>Checkout my personal projects. These are projects are work on in my spare time to demonstrate my skills</span>

                <span>If you have any questions for me feel free to ask me for more information.</span>
            </div>

            <h1>Blank at the moment</h1>
            {/*<div className='projects-container'>
                {projectsData.map((item, index) => {
                    return <ProjectCard project={item} key={item.id}/>
                })}
            </div>*/}


            <div className='work-heading'>
                <span className='work-heading'> Commercial Projects</span>
            </div>
            <div className='work-section-description'>
                <span>Checkout my commercial projects. These is work that I did for various companies.</span>

                <span>If you have any questions for me feel free to ask me for more information.</span>
            </div>

            <div className='projects-container'>
                {projectsData.map((item, index) => {
                    return <ProjectCard project={item} key={index}/>
                })}
            </div>

            <Contact/>
        </div>
    );
}
