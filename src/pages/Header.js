import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return(
    <div>
      <Link to="/" className="header-links">Home</Link>
      <Link to="/favourites" className="header-links">Favourites</Link>
    </div>
  )
}

export default Header;