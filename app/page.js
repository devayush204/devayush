"use client"
import React, { useEffect, useRef, useState } from 'react';
import Header from './(components)/Header';
import Hero from './(components)/Hero';
import Profile from './(components)/Profile';
import Skills from './(components)/Skills';
import Projects from './(components)/Projects';
import Loader from './(components)/Loader';
import Contact from './(components)/Contact';
import ContactLinks from './(components)/ContactLinks';

export default function Home() {
  const [loading, setLoading] = useState(true); 
  const scrollToHero = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProfile = () => {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToprojects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <section className="bg-[#191919]">
      {/* Render loading component if isLoading state is true */}
      {loading && <Loader />}
      {/* Render Header and Hero components only if isLoading is false */}
      {!loading && (
        <>
          <Header
            scrollToHero={scrollToHero}
            scrollToProfile={scrollToProfile}
            scrollToSkills={scrollToSkills}
            scrollToprojects={scrollToprojects}
            scrollToContact={scrollToContact}
          />
          <div className="px-5">
            <Hero />
            {/* <HeroHighlight/> */}
          </div>
        </>
      )}
      {/* Render Profile, Skills, and Projects components only if isLoading is false */}
      {!loading && (
        <>
          <div className="h-[100vh] w-[100vw] flex justify-center items-center" >
            <Profile />
          </div>
          <Skills />
          <Projects/>
          <Contact/>
          <ContactLinks/>
        </>
      )}
    </section>
  );
}
