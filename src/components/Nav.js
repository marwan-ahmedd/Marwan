import React from "react"
import { Sidenav } from "rsuite"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import EmailRoundedIcon from "@mui/icons-material/EmailRounded"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GithubIcon from "@mui/icons-material/GitHub"
import FadeInSection from "./FadeInSection"

import "../styles/Nav.css"
import "react-typist/dist/Typist.css"

const isMobile = window.innerWidth < 600;


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
        const { expanded } = this.state;

        const links = [
            <a href="#intro">/home</a>,
            <a href="#about">/about</a>,
            <a href="#projects">/projects</a>
        ]
        return (
            <div className='fixed right-0 bottom-10% flex flex-col items-end'>
                { !isMobile && (
                    <Sidenav
                        expanded={expanded}
                        defaultOpenKeys={['3', '4']}
                        activeKey={this.state.activeKey}
                        appearance={'subtle'}
                    >
                        <Sidenav.Body>
                            <div id="nav-links">
                                {links.map((link, i) => (
                                    <FadeInSection delay={`${i+1}00ms`}>
                                        <div>{link}</div>
                                    </FadeInSection>
                                ))}
                            </div>
                        </Sidenav.Body>
                    </Sidenav>
                )}
                <div id="nav-logos" href='/'>
                    <a href='marwann.ahmedd2003@gmail.com'>
                        <EmailRoundedIcon style={{ fontSize: 19 }}></EmailRoundedIcon>
                    </a>
                    <a href='https://github.com/marwan-ahmedd'>
                        <GithubIcon style={{ fontSize: 19 }}></GithubIcon>
                    </a>
                    <a href='https://www.linkedin.com/in/marwan-ahmed-b37b45245/'>
                        <LinkedInIcon style={{ fontSize: 20 }}></LinkedInIcon>
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav