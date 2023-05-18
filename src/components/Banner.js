import React from "react"

import { FaGithub, FaYoutube, FaDribble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { fadeIn } from '../variants'

const Banner = () => {
    return (
        <section className="section mr-[200px]" id='home'>
            <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7}}
                className='container mx-auto'>

                <div>
                    <h1 className='mb-[20px] text-[55px] font-bold font-primary leading-[0.8] lg:text-[60px] text-engineer'>
                            Marwan
                        {/* <h1 className='text-[55px] font-bold font-primary leading-[0.8] lg:text-[60px] text-engineer'>Marwan</h1> */}
                        </h1>
                </div>
                <div className='flex-1 mb-6 text-[30px] lg:text-[50px] font-primary 
                                font-semibold uppercase leading-[1]'>
                    <span className='text-white mr-4'>I am a</span>
                    <TypeAnimation 
                        sequence={[
                            'Software Engineer', 2000,
                            'Software Developer', 2000,
                        ]}
                        speed={50}
                        className='text-engineer' 
                        wrapper='span'
                        repeat={Infinity}
                    />
                </div>
                <p className='text-desc text-[17px] font-primary'>
                Passionate software engineer with a strong foundation in building <br /> scalable and efficient applications. I have great interest in<br /> software design, artificial intelligence and game development.
                    </p>
            </motion.div>
        </section>
    )
}

export default Banner