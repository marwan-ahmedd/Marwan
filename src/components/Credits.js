import React from 'react'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Credits = () => {
    return (
        <div className='flex items-center pt-[100px]'>
            <motion.div
            variants={fadeIn('up', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.1}}
            className='container mx-auto'
            >
                <div className='font-primary text-Slate text-center w-[100%] text-[17px] pb-[40px]'>
                    <div>Built by Marwan Ahmed</div>
                    <div>All rights reserved. ©</div>
                </div>
            </motion.div>
        </div>
    )
}
export default Credits