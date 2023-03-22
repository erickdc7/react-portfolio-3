import React, { useEffect, useState } from 'react'
import { FaBehance, FaDribbble, FaTwitter } from 'react-icons/fa'
import { links } from '../../Data'
import { BsSun, BsMoon } from 'react-icons/bs'
import './header.css'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const scrollTop = () => {
        animateScroll.scrollToTop()
    }

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu)
    }, [showMenu])


    return (
        <header className="header">
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
                    Miller
                </Link>

                <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {
                                links.map(({ name, path }, index) => {
                                    return (
                                        <li className="nav__item" key={index}>
                                            <Link
                                                className='nav__link text-cs'
                                                to={path}
                                                spy={true}
                                                hashSpy={true}
                                                smooth={true}
                                                offset={-150}
                                                duration={500}
                                                onClick={() => setShowMenu(!showMenu)}
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="header__socials">
                            <a href="" className="header__social-link">
                                <FaTwitter />
                            </a>

                            <a href="" className="header__social-link">
                                <FaDribbble />
                            </a>

                            <a href="" className="header__social-link">
                                <FaBehance />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="nav__btns">
                    <div className="theme__toggler">
                        <BsSun />
                    </div>

                    <div
                        className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header