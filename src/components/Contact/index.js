import './index.scss'
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
const Contact=()=>{
    const [letterClass,setLetterClass]= useState ('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2500);
    
        return () => {
            clearTimeout(timeoutId); // Clear the timeout when the component unmounts
        };
    }, []);
    return(
        <>
             <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                         strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}/>

                    </h1>
                    <p>
                        I am interestedin freelance oppurtunities - especially ambitious or 
                        large projects . However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder="Name" required/>


                                </li>
                                <li className='half'>
                                    <input 
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    required/>

                                </li>
                                <li>
                                    <input 
                                    type='text'
                                    name='subject'
                                    placeholder='Subject'
                                    required/>

                                </li>
                                <li>
                                    <textarea
                                    placeholder='Message'
                                    name='message'
                                    required></textarea>

                                </li>
                                <li>
                                    <input 
                                    type='submit'
                                    className='flat-button1'
                                    value='SEND'/>

                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
             </div>
        </>
    )
}
export default Contact