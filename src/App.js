import React from 'react'

import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Credits from './components/Credits'

const App = () => {
    return (
        <div className='bg-background overflow-hidden' >
            <Banner />
            <Nav />
            <About />
            <Projects />
            <Credits />
        </div>
    )
}

export default App