import React from "react"

import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { fadeIn } from '../variants'
import { EmailRounded } from "@mui/icons-material"

const Banner = () => {
    return (
        <div className="section mr-[200px]" id='home'>
            <motion.div 
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3}}
                className='container mx-auto'>

                <div>
                    <h1 className='mb-[20px] text-[65px] font-bold font-primary leading-[0.8] lg:text-[60px] text-LightestSlate'>
                        hi, <span className='text-Green'>marwan</span> here. 
                    </h1>
                </div>
                <div className='flex-1 mb-6 text-[30px] lg:text-[60px] font-primary 
                                font-semibold leading-[1]'>
                    <span className='text-LightestSlate mr-4'>I am a</span>
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
                <p className=' text-[24px] text-Slate font-primary max-w-[700px] text-justify'>
                    Passionate software engineer with a strong foundation in building 
                    scalable and efficient applications. I have great interest in
                    software design, artificial intelligence and code puzzles.
                </p>
                <p className=' text-[24px] text-LightestSlate font-primary max-w-[700px] text-justify font-bold'>I'm seeking a summer training in a competitive environment where i can apply my skills and learn from highly talented people</p>
                {/* Contact Me */}
                <br />
                <a 
                href='mailto:marwann.ahmedd2003@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='
                text-[22px] font-bold font-primary p-[10px] text-LightestSlate
                cursor-pointer border-[1px] border-Green border-radius-[5px] 
                hover:bg-Green hover:text-LightestSlate transition-all 
                duration-300 ease-in-out flex items-center w-[200px] justify-center'
                >
                    <EmailRounded className="mr-2"/>
                    {'Contact Me'}
                </a>
            </motion.div>
        </div>
    )
}

export default Banner