import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import myImage from "./Group.png";
import { FiMenu } from "react-icons/fi"
import { GrClose } from "react-icons/gr"
import SearchMovie from '../SearchMovie/SearchMovie';

const Navbar = () => {

    const [click, setClicked] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setClicked(!click);
    };

    const handleCloseMobileMenu = () => {
        setShowNav(false);
    };

    useEffect(() => {
        document.addEventListener('scroll', () => {

            if (window.scrollY > 100) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        });
    }, []);

    return (

        <nav className={showNav ? 'navbar-container' : 'navbar-container active'}>
            <a href='/' className='navbar-logo'>
                {/* <p>MovShar</p> */}
                <img src={myImage} />
            </a>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <GrClose /> : <FiMenu />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-link-items' onClick={handleCloseMobileMenu}>
                    <a href='/' className='nav-link'>Accueil</a>
                </li>
                <li className='nav-link-items' onClick={handleCloseMobileMenu}>
                    <a href='/film' className='nav-link'>Film</a>
                </li>
                <li className='nav-link-items' onClick={handleCloseMobileMenu}>
                    <a href='/' className='nav-link'>Catégorie</a>
                </li>
                <li className='nav-link-items' onClick={handleCloseMobileMenu}>
                    <a href='/' className='nav-link'>Acteur</a>
                </li>
                <li className='nav-link-items' onClick={handleCloseMobileMenu}>
                    <a href='/' className='nav-link'>À propos</a>
                </li>
                <SearchMovie />
                <a href='/search'></a> 
            </ul>
        </nav>

    )
}

export default Navbar
