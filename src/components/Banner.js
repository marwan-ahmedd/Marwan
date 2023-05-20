import React from "react"

import { FaGithub, FaYoutube, FaDribble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { fadeIn } from '../variants'

const Banner = () => {
    return (
        <section className="section mr-[200px]" id='home'>
            <motion.div 
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3}}
                className='container mx-auto'>

                <div>
                    <h1 className='mb-[20px] text-[65px] font-bold font-primary leading-[0.8] lg:text-[60px] text-Green'>
                        Marwan
                    </h1>
                </div>
                <div className='flex-1 mb-6 text-[30px] lg:text-[60px] font-primary 
                                font-semibold leading-[1]'>
                    <span className='text-white mr-4'>I am a</span>
                    <TypeAnimation 
                        sequence={[
                            'Software Engineer', 2000,
                            'Software Developer', 2000,
                        ]}
                        speed={50}
                        className='text-Green' 
                        wrapper='span'
                        repeat={Infinity}
                    />
                </div>
                <p className='text-Slate text-[17px] font-secondary font-bold'>
                Passionate software engineer with a strong foundation in building <br /> scalable and efficient applications. I have great interest in<br /> software design, artificial intelligence and game development.
                    </p>
            </motion.div>
        </section>
    )
}

export default Banner