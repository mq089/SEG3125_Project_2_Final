import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useLanguage } from '../contexts/LanguageContext';
import './style.css'; // Import the CSS file

import { GB } from 'country-flag-icons/react/3x2'
import { FR } from 'country-flag-icons/react/3x2'

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <div className='lang'>Language/Langue:</div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {language === 'english' ? 'English' : 'French'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => switchLanguage('english')} id ="item">English&nbsp; <GB/></Dropdown.Item>
          <Dropdown.Item onClick={() => switchLanguage('french')} id ="item">French&nbsp;<FR/></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;