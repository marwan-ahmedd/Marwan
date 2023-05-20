import React from 'react'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const About = () => {
    
    const one = <p className='mt-10 font-secondary text-Slate max-w-[600px]'>
                    I'm currently in my sophomore year studying computer
                    science and artificial intelligence at
                    <b className='text-Green'>
                        <a href='https://cu.edu.eg/Home'> Cairo University</a>
                    </b>.<br /> I plan to pursue a master's degree in Artificial Intelligence after completing my undergraduate studies.
                </p>
    const two = <p className='mt-10 mb-2 font-secondary text-Slate'>
                    Technologies and languages I have been working with:
                </p>
    const tech = [
        "Python",
        "React.js",
        "Javascript ES6+",
        "Node.js",
        "C++",
        "django",
        "Java",
        "Tailwind CSS",
        "HTML & CSS",
        "Git & Github",
    ]
    const tech_list = tech.map(stack => <li>{stack}</li>)

    return (
        <div className='mr-[200px]'>
            <div>
                <motion.div 
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3}}
                    className='container mx-auto'
                >
                    <h1 className='font-primary text-LightestSlate text-[45px] font-bold'>/ About me</h1>
                    <div className='pl-[20px] text-[17px] font-bold'>
                        {one}
                        {two}
                        <div className=' grid grid-cols-[200px_minmax(_100px,_1fr)]' >
                            {tech.map((item, i) => {
                                return (
                                    <li className='text-Slate text-[17px]'>{item}</li>
                                )
                            })}

                        </div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}

export default About