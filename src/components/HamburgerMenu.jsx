import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    // Toggle navigation visibility or perform other actions as needed
  };

  return (
    <div id="hamburger-menu" className="hamburger-icon" onClick={handleClick}>
      <span className="line line-1"></span>
      <span className="line line-2"></span>
      <span className="line line-3"></span>
    </div>
  );
}

export default HamburgerMenu;
