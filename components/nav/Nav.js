import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const router = useRouter()

  const handleClickOpen = () => setOpen((prevOpen) => !prevOpen)

  const activeLink = (path) => {
    return router.pathname === path && ' active'
  }

  return (
    <nav role="navigation" className="nav">
      <div className="nav__wrapper">
        <div style={{ top: 5, position: 'relative' }} className="nav__brand">
          <Link href="/">
            <a>
              <Image height={50} width={220} src={require('../../assets/img/menu-logo2.svg')} alt="Logo" />
            </a>
          </Link>
        </div>
        <button className="nav__toggle" onClick={handleClickOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" className="txt--gray-50" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={`nav__responsive justify--end ${open ? 'open' : ''}`}>
          <ul className="nav__links">
            <li className={`nav__link ${activeLink('/')}`}>
              <Link href={`/`}>
                <a>HOME</a>
              </Link>
            </li>
            <li className={`nav__link ${activeLink('/gallery')}`}>
              <Link href={`/gallery`}>
                <a>GALLERY</a>
              </Link>
            </li>
            <li className={`nav__link ${activeLink('/about-us')}`}>
              <Link href={`/about-us`}>
                <a>ABOUT</a>
              </Link>
            </li>
            <li className={`nav__link ${activeLink('/contact-us')}`}>
              <Link href={`/contact-us`}>
                <a>CONTACT US</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
