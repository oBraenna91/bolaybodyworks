import React, { useState } from 'react';
import headerStyles from './header.module.scss';
import logo from '../../images/logo.png';
import Image from 'react-bootstrap/Image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);

    const redirectToReturns = () => {
        window.location.href="/returns";
    }
    const redirectToTerms = () => {
        window.location.href="/terms&conditions";
    }
    const redirectToContact = () => {
        window.location.href="/contact";
    }
    const redirectToHome = () => {
        window.location.href="/";
    }
    const redirectToPrivacy = () => {
        window.location.href="/privacy";
    }
  
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
          <div className={headerStyles.link} onClick={redirectToHome}>Home</div>
          <div className={headerStyles.link} onClick={redirectToTerms}>Terms and Conditions</div>
          <div className={headerStyles.link} onClick={redirectToReturns}>Returns</div>
          <div className={headerStyles.link} onClick={redirectToContact}>Contact</div>
          <div className={headerStyles.link} onClick={redirectToPrivacy}>Privacy</div>
        </div>
      </div>
    );
  }