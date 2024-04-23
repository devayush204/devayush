import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from "../assets/home.svg";
import img2 from "../assets/profile.svg";
import img3 from "../assets/bulb.svg";
import img4 from "../assets/breifcase.svg";
import img5 from "../assets/contact.svg";
import img6 from "../assets/light.svg";
import img7 from "../assets/file.svg";

const Header = ({ scrollToHero, scrollToProfile, scrollToSkills, scrollToprojects,  scrollToContact }) => {
    const [activeItem, setActiveItem] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const heroOffset = getOffset('hero');
            const profileOffset = getOffset('profile');
            const skillsOffset = getOffset('skills');
            const projectsOffset = getOffset('projects');
            const contactOffset = getOffset('contact');
            const scrollPosition = window.scrollY;
        
            if (scrollPosition < heroOffset) {
                setActiveItem("hero");
            } else if (scrollPosition >= heroOffset && scrollPosition < profileOffset) {
                setActiveItem('hero');
            } else if (scrollPosition >= profileOffset && scrollPosition < skillsOffset) {
                setActiveItem('profile');
            } else if (scrollPosition >= skillsOffset && scrollPosition < projectsOffset) {
                setActiveItem('skills');
            } else if (scrollPosition >= projectsOffset && scrollPosition < contactOffset) {
                setActiveItem('projects');
            } else {
                setActiveItem('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getOffset = (id) => {
        const element = document.getElementById(id);
        return element ? element.offsetTop : 0;
    };

    return (
        <div className='bg-[#191919] md:py-5 py-4 px-5 fixed w-full border-b-2 border-gray-500 md:border-0 z-10'>
            <ul className='md:flex md:gap-16 hidden items-center justify-center'>
                <li className={`p-3 cursor-pointer ${activeItem === 'hero' ? 'border-b-2 border-b-zinc-600 rounded-b-xl' : ''}`} onClick={scrollToHero}>
                    <Image className='w-[25px]' src={img1} alt='Home' />
                </li>
                <li className={`p-3 cursor-pointer ${activeItem === 'profile' ? 'border-b-2 border-b-zinc-600 rounded-b-xl' : ''}`} onClick={scrollToProfile}>
                    <Image className='w-[25px]' src={img2} alt='Profile' />
                </li>
                <li className={`p-3 cursor-pointer ${activeItem === 'skills' ? 'border-b-2 border-b-zinc-600 rounded-b-xl' : ''}`} onClick={scrollToSkills}>
                    <Image className='w-[35px]' src={img3} alt='Bulb' />
                </li>
                <li className={`p-3 cursor-pointer ${activeItem === 'projects' ? 'border-b-2 border-b-zinc-600 rounded-b-xl' : ''}`} onClick={scrollToprojects}>
                    <Image className='w-[25px]' src={img4} alt='projects' />
                </li>
                <li className={`p-3 cursor-pointer ${activeItem === 'contact' ? 'border-b-2 border-b-zinc-600 rounded-b-xl' : ''}`} onClick={scrollToContact}>
                    <Image className='w-[25px]' src={img5} alt='Contact' />
                </li>
                <li className="w-[30px]  " >
                    <Image className='w-[25px]' src={img6} alt='Light' />
                </li>
            </ul>
            <ul className='flex justify-between items-center md:hidden'>
                <li className='flex gap-2 items-center'>
                    <Image className='w-[30px]' src={img7} alt='Download CV' />
                    <p className='text-white font-semibold'>Download CV</p>
                </li>
                <li>
                    <Image className='w-[30px]' src={img6} alt='Light' />
                </li>
            </ul>
        </div>
    );
}

export default Header;
