import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoR from '../../assets/images/LogoR.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import LogoSubtitle from '../../assets/images/LogoSubtitle.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoR} alt="logo"/>
            <img className= 'logo-sub' src={LogoSubtitle} alt="logo"/>

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={  faHome } color="#000000"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color="#000000"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#000000"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rohit-mahant/">
                    <FontAwesomeIcon icon={faLinkedin} color="#000000"/>

                </a>
            </li>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Semicile17">
                    <FontAwesomeIcon icon={faGithub} color="#000000"/>

                </a>
            </li>
            <li>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Semicile17">
                    <FontAwesomeIcon icon={faYoutube} color="#000000"/>

                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar