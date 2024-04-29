import React from 'react'
import img1 from "../assets/Calender.svg"
import img2 from "../assets/collab.svg"
import img3 from "../assets/linkedin.svg"
import img4 from "../assets/Mail.svg"
import img5 from "../assets/instagram.svg"
import img6 from "../assets/phone.svg"
import Image from 'next/image'

const ContactLinks = () => {
    const data = [
        {
            id: 1,
            title: "drop a mail here",
            image: img4,
        },
        {
            id: 2,
            title: "phone number here",
            image: img6,
        },
        {
            id: 3,
            title: "lets schedule a meeting",
            image: img1,
        },
        {
            id: 4,
            title: "lets collab",
            image: img4,
        },
    ]
    return (
        <div className='flex flex-col items-center justify-center py-10 '>
            {data.map((item, index) => (
                <a className="flex gap-3 items-center justify-center" key={index}>
                    <Image className='w-[30px]' alt="img" src={item.image} />
                    <p className='capitalize text-sm text-white/50'>{item.title}</p>
                </a>
            ))}
        </div>
    )
}

export default ContactLinks