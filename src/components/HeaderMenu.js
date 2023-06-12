import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const menuIconClasses = `menu-icon ${isMobileMenuOpen ? 'open' : ''}`;
  const menuClasses = `menu ${isMobileMenuOpen ? 'open' : ''}`;

  return (
    <header>
      <nav>
        <div className={menuIconClasses} onClick={toggleMobileMenu}>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
        </div>
        <ul className={menuClasses}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;
