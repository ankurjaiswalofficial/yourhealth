import React from 'react';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <NavItem href="#">Company</NavItem>
        <NavItem href="#">Hospital</NavItem>
        <NavItem href="#">Enterprise</NavItem>
        <NavItem href="#">Ambulances</NavItem>
        <NavItem href="#">Solutions</NavItem>
        <NavItem href="#">RESOURCES</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
