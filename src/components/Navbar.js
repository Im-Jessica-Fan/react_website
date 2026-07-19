import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <div className='navbar-blur'/>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link className="navbar-logo" onClick={() => {
                        closeMobileMenu();
                        setTimeout(() => {
                            document.getElementById("hero")?.scrollIntoView();
                        }, 0);
                    }}>
                        <i className="fa-solid fa-seedling"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link className="nav-links" onClick={() => {
                                closeMobileMenu();
                                setTimeout(() => {
                                    document.getElementById("hero")?.scrollIntoView();
                                }, 0);
                            }}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-links" onClick={() => {
                                closeMobileMenu();
                                setTimeout(() => {
                                    document.getElementById("about")?.scrollIntoView();
                                }, 0);
                            }}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-links" onClick={() => {
                                closeMobileMenu();
                                setTimeout(() => {
                                    document.getElementById("experience")?.scrollIntoView();
                                }, 0);
                            }}>
                                Experience
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/#projects' className="nav-links" onClick={() => {
                                closeMobileMenu();
                                setTimeout(() => {
                                    document.getElementById("projects")?.scrollIntoView();
                                }, 0);
                            }}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/#contact' className="nav-links" onClick={() => {
                                closeMobileMenu();
                                setTimeout(() => {
                                    document.getElementById("contact")?.scrollIntoView();
                                }, 0);
                            }}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            {!button && <Button href='/cv.pdf' buttonStyle='btn--nav'>Resume</Button>}
                        </li>
                    </ul>
                    {button && <Button href='/cv.pdf' buttonStyle='btn--outline'>Resume</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar
