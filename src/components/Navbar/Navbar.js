import { useContext, useEffect, useRef, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const [hideNav, setHideNav] = useState(false)
  const lastScrollY = useRef(0)
  const navRef = useRef(null)
  const hideTimerRef = useRef(null)

  const toggleNavList = () => setShowNavList(!showNavList)
  const closeNavList = () => setShowNavList(false)

  const handleNavClick = (event, selector) => {
    event.preventDefault()
    closeNavList()
    const target = document.querySelector(selector)
    setHideNav(true)
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
    }
    hideTimerRef.current = setTimeout(() => {
      setHideNav(false)
    }, 1100)
    if (target) {
      target.classList.add('section--ping')
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => {
        target.classList.remove('section--ping')
      }, 700)
    }
  }

  useEffect(() => {
    const scrollHost = document.querySelector('.app') || window

    const handleScroll = () => {
      const currentY =
        scrollHost === window
          ? window.scrollY
          : /** @type {HTMLElement} */ (scrollHost).scrollTop
      const scrollingDown = currentY > lastScrollY.current
      const shouldHide = scrollingDown && currentY > 140 && !showNavList
      setHideNav(shouldHide)
      lastScrollY.current = currentY
    }

    scrollHost.addEventListener('scroll', handleScroll, { passive: true })
    return () => scrollHost.removeEventListener('scroll', handleScroll)
  }, [showNavList])

  useEffect(() => {
    if (showNavList) {
      setHideNav(false)
    }
  }, [showNavList])

  useEffect(() => {
    const headerEl = navRef.current?.closest('.header')
    if (!headerEl) return
    if (hideNav) {
      headerEl.classList.add('header--hidden')
    } else {
      headerEl.classList.remove('header--hidden')
    }
  }, [hideNav])

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current)
      }
    }
  }, [])

  return (
    <nav ref={navRef} className={`center nav ${hideNav ? 'nav--hidden' : ''}`}>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <a
            href='#about'
            onClick={(e) => handleNavClick(e, '#about')}
            className='link link--nav'
          >
            About
          </a>
        </li>

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={(e) => handleNavClick(e, '#projects')}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={(e) => handleNavClick(e, '#skills')}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={(e) => handleNavClick(e, '#contact')}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
