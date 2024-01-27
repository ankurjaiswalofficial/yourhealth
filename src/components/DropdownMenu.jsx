import React, { useState } from 'react';

function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
      {props.children}
    </ul>
  );
}

export default DropdownMenu;
