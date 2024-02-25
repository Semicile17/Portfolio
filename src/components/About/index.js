import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import {useState,useEffect} from 'react'
import { Bars } from 'react-loader-spinner';
import { faAndroid, faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
const About=()=>{
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
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
               I'm a highly motivated and ambitious frontend developer with a passion for crafting captivating user experiences. 
               With a keen eye for design and a knack for coding, I thrive on turning ideas into reality through clean, efficient
                code and innovative solutions.  
                </p>
                <p>
                 I'm confident in my approaches and what  really sets me apart is my 
                 dedication to understanding not just the technical
                 aspects of development, but also the needs and goals of the end-users. 
                </p>
                <p>
                So if you're looking for a frontend developer who is not only skilled in coding but also passionate 
                about creating exceptional user experiences, then I'd love to connect and discuss how I can contribute to your projects.
                Let's turn your ideas into reality, one line of code at a time.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color='#4B8BBE'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faAndroid} color='#A4C639'/>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default About;