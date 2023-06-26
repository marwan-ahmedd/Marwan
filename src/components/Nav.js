import React from 'react'

import { fadeIn } from '../variants'
import { Sidenav } from 'rsuite'
import { LinkedIn, GitHub, EmailRounded } from '@mui/icons-material'
import { motion } from 'framer-motion'

const isMobile = window.innerWidth < 600
class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: true,
            activeKey: '1'
        }
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        })
    }
    render() {
        const { expanded } = this.state
        const links = [
              <a href="#home">#home</a>,
              <a href="#about">#about</a>,
              <a href="#projects">#projects</a>
        ]

        return (
            <div className='flex flex-col items-end fixed right-0 pr-[5%] bottom-[10%] bg-transparent'>
                {!isMobile && (
                    <Sidenav 
                    expanded={expanded}
                    defaultOpenKeys={["3", "4"]}
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                    appearance={"subtle"}
                    >
                        <Sidenav.Body>
                            <div className='flex flex-col text-right font-primary text-[20px] font-bold tracking-normal leading-6 text-Green'>
                                {links.map((link, i) => (
                                    <motion.div
                                    variants={fadeIn('up', 0.1)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{ once: true, amount: 0.3}}
                                    className='container mx-auto'
                                    >
                                    <div>{link}</div>
                                    </motion.div>
                                ))}
                            </div>
                            </Sidenav.Body>
                    </Sidenav>
                )}
                <div className='pt-[42px] w-[100px] flex flex-row justify-between pb-[8px]'>
                    <a href='mailto:marwann.ahmedd2003@gmail.com'>
                        <EmailRounded size={20} className='mr-2'/>
                    </a>
                    <a href='https://github.com/marwan-ahmedd'>
                        <GitHub size={19} className='mr-2'/>
                    </a>
                    <a href='https://www.linkedin.com/in/marwan-ahmed-26a840280/'>
                        <LinkedIn size={21} className='mr-2'/>
                    </a>
                </div>
            </div>
        )
    }

}
export default Nav
