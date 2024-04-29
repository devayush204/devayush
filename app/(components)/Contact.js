"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../assets/contact-peep.svg'
import { db } from '@/utils/firestoreConfig'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('contacts').add(formData);
      console.log('Data saved successfully!');
      // Optionally, reset the form after submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error saving data:', error.message);
    }
  };
  return (
    <section className='flex py-10 items-center h-[100vh] ' id='contact'>
      <div className='flex-1 flex justify-end '>
        <Image src={img} alt='img'  />
      </div>
      <div className='flex-1 flex flex-col '>
        <div>
          <span className={`text-lg xl:text-xl px-5 py-3 rounded-xl bg-black  text-white/70 `}>Contact</span>
        </div>
        <div className='flex'>
          <form className='flex flex-col py-10 text-white/50 font-light gap-4'>
            <div className='flex flex-col text-sm'>
              <label className='' htmlFor="name">Name</label>
              <input className='bg-transparent text-lg border-[1px] rounded-lg py-2 px-3 outline-none focus:border-white/30 border-white/10 text-white/70' 
              type="text" 
              value={name}
              onChange={e => setName(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email">Email</label>
              <input className='bg-transparent border-[1px] rounded-lg py-2 px-3 outline-none focus:border-white/30 text-lg border-white/10 text-white/70' 
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="message">Leave your message here</label>
              <textarea 
              className='bg-transparent border-[1px] rounded-lg px-3 outline-none focus:border-white/30 text-lg border-white/10 text-white/70' 
              name="message" id="" cols="50" rows="5"
              value={message}
              onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            
              <button className='text-center bg-[#262626] text-xl rounded-lg py-3 hover:bg-black hover:text-white transition-all duration-50 '
              onClick={handleSubmit}
              >Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact