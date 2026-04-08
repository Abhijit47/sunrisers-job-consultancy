'use client';
import { useWOW, WOWProvider } from '@moondev/next-wow';
import { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import DataBg from '../elements/DataBg';
import Breadcrumb from './Breadcrumb';
import SearchPopup from './SearchPopup';
import Sidebar from './Sidebar';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from './footer/Footer3';
import Footer4 from './footer/Footer4';
import Footer5 from './footer/Footer5';
import Header1 from './header/Header1';
import Header2 from './header/Header2';
import Header3 from './header/Header3';
import Header4 from './header/Header4';
import Header5 from './header/Header5';

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
  wrapperCls,
}) {
  const [scroll, setScroll] = useState(0);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add('mobile-menu-visible')
      : document.body.classList.remove('mobile-menu-visible');
  };

  // Popup
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => setPopup(!isPopup);

  // Sidebar
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!isSidebar);

  useWOW(); // auto-init
  // useWOW({ animateClass: 'animate__animated' });

  useEffect(() => {
    // if (typeof window === 'undefined') return;
    // // const WOW = require('wowjs');
    // import('wowjs').then((WOW) => {
    //   window.wow = new WOW({
    //     live: true,
    //     mobile: true,
    //     animateClass: 'animated',
    //   });
    //   window.wow.init();
    // });

    // window.wow = new WOW.WOW({
    //   live: false,
    // });

    // window.wow = new Wow();
    // window.wow.init();

    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  return (
    <WOWProvider>
      <DataBg />
      <div className={`page-wrapper ${wrapperCls ? wrapperCls : ''}`} id='#top'>
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}
        {headerStyle == 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 2 ? (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 3 ? (
          <Header3
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 4 ? (
          <Header4
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}
        {headerStyle == 5 ? (
          <Header5
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        ) : null}

        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}

        {!footerStyle && <Footer1 />}
        {footerStyle == 1 ? <Footer1 /> : null}
        {!footerStyle && <Footer2 />}
        {footerStyle == 2 ? <Footer2 /> : null}
        {!footerStyle && <Footer3 />}
        {footerStyle == 3 ? <Footer3 /> : null}
        {!footerStyle && <Footer4 />}
        {footerStyle == 4 ? <Footer4 /> : null}
        {!footerStyle && <Footer5 />}
        {footerStyle == 5 ? <Footer5 /> : null}
      </div>
      <BackToTop scroll={scroll} />
    </WOWProvider>
  );
}
