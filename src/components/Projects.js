import React from 'react'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import ProjectCard from './ProjectCard'


const Projects = () => {
    const projects = [
        {
            name: 'Fitness Club',
            desc: 'Developed a fitness club website using React that showcases various exercises for different body parts. Integrated the Rapid API to fetch over 1,500 exercises data based on the user’s input of body part or exercise name.',
            techStack: 'React.js, RapidAPI',
            link: 'https://github.com/marwan-ahmedd/Fitness-Club',
        },
        {
            name: 'Human Resources',
            desc: 'A Human Resources Website for my faculty to manage their employees and their data. The website uses Ajax to search for employees without reloading the page.',
            techStack: 'Python(Django), HTML, CSS, Javascript',
            link: '',
        },
        {
            name: 'Responsive Chatbot',
            desc: 'Designed and implemented a scalable and user-centric chatbot system utilizing a learning algorithm to generate responses based on input messages.',
            techStack: 'Python',
            link: 'https://github.com/marwan-ahmedd/Responsive-Chatbot',
        },
        {
            name: 'Unbeatable Tic Tac Toe',
            desc: 'Developed a Tic Tac Toe (XO) game with a smart computer opponent. Implemented the minimax algorithm to evaluate and select the best possible moves',
            techStack: 'C++',
            link: 'https://github.com/marwan-ahmedd/UnBeatable-XO',
        },
    ]
    return (
        <div className='mr-[200px] mt-[75px]' id='projects'>
                <motion.div 
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3}}
                    className='container mx-auto'
                >
                    <div className='text-LightestSlate font-primary text-[45px] font-bold flex items-center gap-8'>
                        <div><span className='text-Green'>#</span> projects</div>
                        <div className='line w-2/5 h-px bg-Green'></div>
                    </div>
                    <ul className='gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-2 mt-16'>
                        {projects.map(project => {
                            return (
                                <li className='
                                bg-[#282C33]
                                relative flex flex-col h-auto p-10 rounded-[15px]
                                border border-Green shadow-md hover:shadow-lg max-w-lg'>
                                    <ProjectCard project={project} />
                                </li>
                            
                            )
                        })}
                    </ul>

                </motion.div>

        </div>
    )
}

export default Projects;