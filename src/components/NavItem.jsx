import React from 'react';

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href={props.href}>{props.children}</a>
      {props.hasDropdown && <DropdownMenu />}
    </li>
  );
}

export default NavItem;
