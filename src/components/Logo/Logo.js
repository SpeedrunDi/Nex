import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

import logo from '../../assets/icons/logo.jpg'

const Logo = () => (
  <Link to="/" className="logo_link">
    <img src={logo} alt="logo" />
  </Link>
)

export default Logo
