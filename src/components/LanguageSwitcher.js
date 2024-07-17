import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <Button onClick={() => switchLanguage('english')} variant="primary">English</Button>
      <Button onClick={() => switchLanguage('french')} variant="secondary">French</Button>
    </div>
  );
};

export default LanguageSwitcher;