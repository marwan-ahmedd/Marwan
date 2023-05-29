import React from 'react'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const About = () => {
    
    const one = <p className='font-primary text-Slate max-w-[700px] text-justify'>
                    I'm currently in my sophomore year studying computer
                    science and artificial intelligence at
                    <b className='text-Green' ><a href='https://cu.edu.eg/Home'> Cairo University</a></b>
                    . I plan to pursue a master's degree in <span className=' text-LightestSlate font-bold'>Artificial Intelligence</span> after completing my undergraduate studies.
                </p>
    const two = <p className='mt-10 mb-2 font-primary text-Slate'>
                    Technologies and languages I have been working with:
                </p>
    const tech = [
        "Python",
        "Javascript ES6+",
        "C++",
        "React.js",
        "Java",
        "Tailwind CSS",
        "HTML & CSS",
        "Django",
        "SQL",
        "Git & Github",
    ]
    const tech_list = tech.map(stack => <li>{stack}</li>)

    return (
        <div className='mr-[200px] mt-[-100px]' id='about'>
                <motion.div 
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3}}
                    className='container mx-auto'
                >
                    <div className='text-LightestSlate font-primary text-[45px] font-bold flex items-center gap-8'>
                        <div><span className='text-Green'>#</span> about-me</div>
                        <div className='line w-2/5 h-px bg-Green'></div>
                    </div>
                    <div className='text-[24px] mt-10'>
                        {one}
                        {two}
                        <div className='grid grid-cols-[200px_minmax(_100px,_1fr)] list-disc text-Green' >
                            {tech.map((item, i) => {
                                return (
                                    <li className='text-Slate text-[22px] font-primary'>{item}</li>
                                )
                            })}

                        </div>
                    </div>
                </motion.div>
                
        </div>
    )
}

export default About