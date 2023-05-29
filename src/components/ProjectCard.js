import React from 'react'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
    return (
        <div className='p-5'>
            <div className='mt-[-40px] ml-[375px] mb-2 flex px-0 flex-row justify-between border-none'>
                <a href={project.link} target='_blank' rel='noopener noreferrer'> <FaGithub size={30} /> </a>

            </div>

            <h3 className='text-[24px] font-primary text-LightestSlate font-bold mb-5 '>{project.name}</h3>
            <p className='font-primary text-Slate mb-10 text-[20px] '>{project.desc}</p>
            <p className='font-primary text-Slate mb-[-25px]'>{project.techStack}</p>
        </div>
            
    )

}
export default ProjectCard