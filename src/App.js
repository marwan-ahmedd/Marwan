import React from 'react'

import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'


const App = () => {
    return (
        <div className='bg-slate-900' >
            <Banner />
            {/* <Nav /> */}
            <About />
            {/* <Contact /> */}
            <div className='h-[4000px]'></div>
        </div>
    )
}

export default App