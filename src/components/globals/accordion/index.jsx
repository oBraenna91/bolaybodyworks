import React, { useState } from 'react';
import styles from './accordion.module.scss';
import Image from 'react-bootstrap/Image';

const Accordion = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <div className={styles.iconContainer}>
          <Image
            src={icon}
            alt="icon"
            fluid
            className={`${styles.accordionIcon} ${isOpen ? styles.rotate : ''}`}
          />
        </div>
        <div className={styles.accordionTitle}><h4>{title}</h4></div>
        <div className={`${styles.accordionIconRight} ${isOpen ? styles.rotate : ''}`}>
          {isOpen ? '−' : '+'}
        </div>
      </div>
      <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
