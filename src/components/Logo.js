import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.png'

const Logo = () => (
  <Link to="/" className="logo">
    <img src={logo} alt="oearn" />
  </Link>
)

export default Logo