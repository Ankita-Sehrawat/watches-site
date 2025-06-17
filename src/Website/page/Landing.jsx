import React from 'react'
import { useTheme } from '../../ThemeContext'
import Navbar from '../component/Navbar'
import Trial from '../component/Trial'
import Cards from '../component/Cards'

const Landing = () => {

    return (
        <div>
            <Trial />
            <Navbar />
            <Cards />
        </div>
    )
}

export default Landing
