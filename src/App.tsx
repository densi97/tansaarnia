import React, { useEffect, useState } from 'react';
import './App.css';
import { AppShell } from '@mantine/core';
import HeaderResponsive from './components/Header';
import { HeroContentLeft } from './components/Hero';
import AboutUs from './components/AboutUs';
import Project from './components/Project';
import ImageGrid from './components/ImageGrid';
import Contact from './components/Contact';
import Location from './components/Location';
import DonationModal from './components/DonationModal';
import { showNotification } from '@mantine/notifications';
import { Check } from 'tabler-icons-react';
import { CookiesBanner } from './components/CookieBanner';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const headerLinks =  [
  {link: "home", label: "Home"},
  {link: 'about-us', label: "Über uns"},
  {link: 'project', label: "Projekt"},
  {link: 'location', label: "Lage"},
  {link: 'fotos', label: "Fotos"},
  {link: 'contact', label: "Kontakt"},
  {link: 'imprint', label: "Impressum"},
]


function App() {

  const [donationModalOpened, setdonationModalOpened] = useState(false);
  const [showCookieBanner, setshowCookieBanner] = useState(false);

  useEffect(() => {
    AOS.init();
    if (window.location.pathname.includes("success")) {
      setTimeout(() => {
        showNotification({
          icon: <Check size={16} />,
          color: "green",
          title: "Vielen Dank!",
          message: "Ihre Spende ist bei uns eingegeben.",
          autoClose: false
        });
      }, 1000);
      
    } else if (window.location.pathname.includes("fail")) {
      setTimeout(() => {
        showNotification({
          color: "red",
          title: "Fehler",
          message: "Es ist ein Fehler aufgetreten. Die Spenden konnte nicht abgeschlossen werden.",
          autoClose: false,
        });
      }, 1000);
    }

    // if (!document.cookie.includes("showCookieBanner")) {
    //   setshowCookieBanner(true);
    // }

  }, [])

  function disableCookieBanner() {
    setshowCookieBanner(false);
    document.cookie = "showCookieBanner=0";
  }

  return (
    <>
      <AppShell
        padding={0}
        header={<HeaderResponsive links={headerLinks} />}
        style={{padding: 0}}
      >
        <DonationModal modalOpen={donationModalOpened} setModalOpen={setdonationModalOpened} />
        <HeroContentLeft setModalOpen={setdonationModalOpened} />
        <AboutUs />
        <Project />
        <Location />
        <ImageGrid />
        <Contact />
        <CookiesBanner showCookieBanner={showCookieBanner} setShowCookieBanner={disableCookieBanner} />
      </AppShell>
    </>
  );
}

export default App;
