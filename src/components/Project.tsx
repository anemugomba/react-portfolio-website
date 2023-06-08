import React, {FC} from 'react'
import Tag from './Tag'
import Project from "../models/Project";

type ProjectCardProps = {
    project : Project
}
const ProjectCard: FC<ProjectCardProps> = ({project}) => {
    return (
        <div className='project-card-container'>
            <div className='project-image-header'>
                <img src={project.coverImage} alt='Project Cover' className='project-img' />
            </div>
            <hr/>
            <div className='project-details'>

                <div>
                    {project.technologies.map((tech, index) => {
                        return <Tag name={tech} key={index}/>
                    })}
                </div>

                <div className='project-title'>
                    <span>
                        {project.title}
                    </span>
                </div>

                <div className='project-description'>
                    <span>
                        {project.description}
                    </span>
                </div>

                <div className="projects-buttons">

                    {project.githubLink ? (
                        <span>
                            <i className="fa fa-github xl"></i>
                        </span>
                    ) : null}

                    {project.liveLink ? (
                        <span>
                            <i className="fa fa fa-external-link"></i>
                        </span>
                    ) : null}

                    {project.moreInfoLink ? (
                        <span>
                            <i className="fa fa-info-circle"></i>
                        </span>
                    ) : null}

                </div>

            </div>
        </div>
    )
}

export default ProjectCard