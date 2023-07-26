import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import NavigationBlock from './NavigationBlock/NavigationBlock'
import './Header.css'

const Header = () => {
  const [active, setActive] = useState(false)

  const actionMenu = () => {
    setActive(!active)
  }

  return (
    <>
      <header className="header">
        <div className="container header_con">
          <div className="header_logo">
            <Logo />
          </div>
          <div className="header_nav">
            <NavigationBlock />
          </div>
          <div className={`burger ${active ? 'burger_active' : ''}`} onClick={actionMenu}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </div>
      </header>
      <div className={active ? 'menu active' : 'menu'}>
        <NavigationBlock actionMenu={actionMenu} />
      </div>
    </>
  )
}

export default Header
