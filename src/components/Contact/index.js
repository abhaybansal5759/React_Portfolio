import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState } from 'react'


const Contact = () => {
    const [letterClass] = useState('text-animate')
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                    </h1>
                    <p>I am interested in freelance opportunities - especially ambitious or large projects . However, if you have any other request or query , please don't hesitate to contact me using below from either .</p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type ="text" name="name"placeholder="Name" required/>

                                </li>
                                <li className='half'>
                                    <input type ="email" 
                                    name="email"
                                    placeholder="Email" 
                                    required/>

                                </li>

                                <li>
                                    <input type ="text" 
                                    name="subject"
                                    placeholder="Subject" 
                                    required/>

                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>

                    </div>

            </div>

        </div>
        <Loader type ="pacman"/>
        </>
    )
}


export default Contact