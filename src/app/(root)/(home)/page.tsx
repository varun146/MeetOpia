import MeetingList from '@/components/MeetingList';
import React from 'react'

const Home = () => {

  const now = new Date()

  const time = now.toLocaleTimeString("en-IN", {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).toUpperCase();
  const date = now.toLocaleDateString("en-IN", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] lg:h-[350px] sm:p-4 w-full rounded-md border-2 border-white bg-[url("/images/hero-background.png")] bg-cover' >
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
            <p className='font-medium  text-lg lg:text-2xl  text-sky-1'>{date}</p>
          </div>
          <h2 className='bg-white/10 p-2 max-w-[270px] rounded-md'>Upcoming Meeting at 12:30 PM</h2>
        </div>
      </div>
      <MeetingList />
    </section >
  )
}

export default Home
