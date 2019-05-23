import React from 'react'

import Logo from '../components/Logo'
import Navbar from '../components/Navbar'

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="upper">
          <Logo />
        </div>
        <Navbar />
      </div>
    )
  }
}

export default Header