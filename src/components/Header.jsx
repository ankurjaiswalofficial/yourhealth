import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import ActionButton from './ActionButton';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
            <Nav />
            <ActionButton />
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
