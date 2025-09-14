import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Home } from "../../components/Home";
import { About } from "../../components/About";
import { Founder } from "../../components/Founder";
import { Testimonial } from "../../components/Testimonial";
import { Programs } from "../../components/Programs";
import { Admissions } from "../../components/Admissions";
import { News } from "../../components/News";
import { Questions } from "../../components/Questions";


const useHashChange = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: topPos - 100, 
          behavior: 'smooth'
        });
      }
    };

    if (hash) {
      handleHashChange();
    }


    window.addEventListener('hashchange', handleHashChange);


    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [hash]);
};

export const Root = () => {
  useHashChange();

  return (
    <>
      {/* <NavBar /> */}
      <Home id="home" />
      <About id="about" />
      <Founder id="founder" />
      <Testimonial id="testimonial" />
      <Programs id="programs" />
      <Admissions id="admissions" />
      <News id="news" />
      <Questions id="questions" />
      {/* <Outlet/> */}
    </>
  );
};




