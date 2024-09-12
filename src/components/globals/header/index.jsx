import React, { useState } from 'react';
import headerStyles from './header.module.scss';
import logo from '../../images/logo.png';
import Image from 'react-bootstrap/Image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
  
    return (
      <div className={`${headerStyles.container} ${isOpen ? headerStyles.open : ''}`}>
        <div className={headerStyles.imageContainer}>
          <Image src={logo} alt="logo" fluid />
        </div>
        <div className={headerStyles.buttonContainer} onClick={toggleMenu}>
          <div className={`${headerStyles.menuIcon} ${isOpen ? headerStyles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`${headerStyles.linksContainer} ${isOpen ? headerStyles.show : ''}`}>
          <div className={headerStyles.link}>Home</div>
          <div className={headerStyles.link}>Terms and Conditions</div>
          <div className={headerStyles.link}>Returns</div>
          <div className={headerStyles.link}>Contact</div>
          <div className={headerStyles.link}>About</div>
        </div>
      </div>
    );
  }