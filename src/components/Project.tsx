import React from 'react'
import Tag from './Tag'

export default function Project() {
    return (
        <div className='project-card-container'>
            <div className='project-image-header'>
                <img src='https://placehold.co/300x300.png' alt='Project Image' className='project-img' />
            </div>
            <div className='project-details'>

                <div>
                    <Tag name='MySql'/>
                    <Tag name='SlimPHP'/>
                    <Tag name='AWS'/>
                    <Tag name='+2'/>
                </div>

                <div className='project-title'>
                    <span>
                        Truckpark Admin
                    </span>
                </div>

                <div className='project-description'>
                    <span>
                        Calculating calculatable interaction between ai and humans. Will ai takover the world just like what McDonalds did to the ants while fishing.
                        The solar system found love and went on to the roof of a battery. ...
                    </span>
                </div>
            </div>
        </div>
    )
}
