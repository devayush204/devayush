"use client"
import React, { useState } from 'react'
import Calendar from '../assets/Calender'
import Mail from '../assets/Mail'
import Phone from '../assets/phone'
import Collab from '../assets/collab'
import Linkedin from '../assets/linkedin'
import Github from '../assets/github'
import Instagram from '../assets/instagram'
import Facebook from '../assets/Facebook'
import File from '../assets/File'
import Link from 'next/link'

const ContactLinks = () => {
    const data = [
        {
            id: 1,
            title: "drop a mail here",
            image: <Mail />,
        },
        {
            id: 2,
            title: "phone number here",
            image: <Phone />,
        },
        {
            id: 3,
            title: "lets schedule meeting",
            image: <Calendar />,
        },
        {
            id: 4,
            title: "lets collab",
            image: <Collab />,
        },
    ]
    const data2 = [
        {
          "id": 1,
          "title": "LinkedIn",
          "image": <Linkedin/>
        },
        {
          "id": 2,
          "title": "Github",
          "image": <Github/>
        },
        {
          "id": 3,
          "title": "Instagram",
          "image": <Instagram/>
        },
        {
          "id": 4,
          "title": "Portfolio",
          "image": <File/>
        },
        {
          "id": 5,
          "title": "Facebook",
          "image": <Facebook/>
        }
      ]

      const [showTooltip, setShowTooltip] = useState(null);


    return (
        <div className='flex flex-col items-center justify-center gap-40 py-10  '>
            <div className=''>
                <ul className='flex flex-col justify-center items-center  p-10'>
                    {data.map((item, index) => (
                        <li className={`px-5 py-3 w-full flex justify-center items-center`} key={index}>
                            <a className={`${index === 0 ? 'bg-white/10 text-white/80 fill-white/80 '  : 'text-white/50 fill-white/50'} flex px-10 py-3 gap-3 items-center ${index != 0 ? 'border-[1px] border-zinc-800' : '' } rounded-full justify-center `} >
                                {item.image}
                                <p className='capitalize text-sm font-extralight w-40 '>{item.title}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className=''>
                <div className='flex items-center justify-center gap-14'>
                {data2.map((item, index) => (
                        <span
                            className='relative'
                            key={index}
                            onMouseEnter={() => setShowTooltip(index)}
                            onMouseLeave={() => setShowTooltip(null)}
                        >
                            <Link className='' href={"/"}>
                                <span className='fill-white/50'>
                                    {item.image}
                                </span>
                            </Link>
                            {showTooltip === index && (
                                <span className='absolute bottom-10 -left-[50%] bg-black text-white py-1 px-2 rounded-lg'>{item.title}</span> 
                            )}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ContactLinks
