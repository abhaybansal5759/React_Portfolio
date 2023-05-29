import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
// import Loader from 'react-loaders'


const Skills = () => {

    const [letterClass] = useState('text-animate')
    return(
        <>
        <div className='container skills-page'>
            <div className='text-zone'>
            <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S','k','i','l','l','s']}
                        idx={15}
                    />
                </h1>
            </div>
        </div>
        {/* <Loader type="pacman"/> */}
        </>
    )
}
export default Skills ;