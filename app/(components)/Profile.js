import Image from 'next/image'
import React, { forwardRef } from 'react'
import img from "../assets/peep-bio.svg"
import file from "../assets/file.svg"
// import resumePdf from "../assets/Ayush-resume.pdf"

const Profile = ()  => {
    const handleDownloadResume = () => {
        const newWindow = window.open('/Ayush-resume.pdf');
        newWindow.opener = null;
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id='profile' className='xl:px-44 px-5 md:px-10 '>
            <div className='flex justify-center items-center gap-10  '>
                <div className=' hidden xl:flex'>
                    <span className='flex px-10  '>
                    <Image className='w-[500px]' src={img} alt="ayush" />
                    </span>
                </div>

                <div className='flex-1 flex-col'>
                    <div>
                        <p className='xl:text-lg text-base  font-light text-white/50 xl:leading-8 '>I am a Full Stack and Front End Developer with a passion for crafting seamless experiences across both web and mobile platforms. With a keen eye for detail and a commitment to quality, I specialize in building user-friendly designs that seamlessly blend aesthetics with functionality.
                            In addition to my development expertise, I actively contribute to open-source projects, leveraging my skills to drive innovation and collaboration within the developer community. <br />
                            My dedication to staying ahead of industry trends and embracing new technologies ensures that my clients receive cutting-edge solutions that elevate their digital presence.</p>
                    </div>
                    <div className='flex gap-2 md:gap-4 mt-10 xl:mt-5'>
                    <button onClick={handleDownloadResume} className='flex-1 text-white flex gap-1 md:gap-2 items-center justify-center outline-none px-4 md:px-5 md:py-3 bg-zinc-600 rounded-full'>
                            <Image alt='file' src={file} />
                            Know More
                        </button>
                        <button onClick={scrollToContact} className='text-white flex-1 border border-white/20 hover:border-white/50 rounded-full px-5 py-3'>Contact </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile