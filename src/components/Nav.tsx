import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { menu, contact } from '../data/nav';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="menuAreaWrapper">
      <nav role="navigation">
        <div id="menuToggle">
          <div
            className={`changeLangWrapper ${
              ['/works', '/contact'].includes(pathname.toLocaleLowerCase()) ? 'cl-black' : ''
            }`}
          >
            <div
              onClick={() => handleLanguage('ko')}
              className={`changeLang ko ${i18n.language === 'ko' ? 'select' : ''}`}
            >
              KR
            </div>
            <div
              onClick={() => handleLanguage('en')}
              className={`changeLang ${i18n.language === 'en' ? 'select' : ''}`}
            >
              EN
            </div>
          </div>
          <div
            className={`${openMenu ? 'btn-toggle open' : 'btn-toggle'} ${
              ['/works', '/contact'].includes(pathname.toLocaleLowerCase()) ? 'cl-black' : ''
            }`}
            onClick={handleToggleMenu}
          >
            <span></span>
            <span></span>
          </div>
          <ul id="menu" className={`${openMenu ? 'open' : ''}`}>
            <div className="changeLangWrapperMenu">
              <div
                onClick={() => handleLanguage('ko')}
                className={`changeLangMemnu ko ${i18n.language === 'ko' ? 'select' : ''}`}
              >
                KR
              </div>
              <div
                onClick={() => handleLanguage('en')}
                className={`changeLangMemnu ${i18n.language === 'en' ? 'select' : ''}`}
              >
                EN
              </div>
            </div>
            {menu.map((val, key) => (
              <Link
                key={key}
                onClick={handleToggleMenu}
                className={`list ${
                  pathname.toLowerCase() === val.path.toLowerCase() ? 'select' : ''
                }`}
                to={val.path}
              >
                <li>{val.display}</li>
              </Link>
            ))}
            <div className="infoWrapper">
              <p id="adress">
                {i18n.language === 'en' ? contact.adress_en : contact.adress_ko}
                <br />
                {contact.tell}
              </p>
              <p className="link">
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr"
                  target="blank"
                >
                  View Map
                </a>
              </p>
              <br />
              <p>Work with us.</p>
              <p className="link">
                <a href={`mailto:${contact.email}`} title="">
                  {contact.email}
                </a>
              </p>
              <br />
              <p>Recruiting</p>
              <p className="link">
                <a href={`mailto:${contact.email}`} title="">
                  {contact.email}
                </a>
              </p>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
