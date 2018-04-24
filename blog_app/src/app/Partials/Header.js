import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="blue-grey darken-4">
      <div className="container nav-wrapper blue-grey darken-4">
        <Link to='/' className="brand-logo">{props.title}</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/authors'>Authors</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Header;