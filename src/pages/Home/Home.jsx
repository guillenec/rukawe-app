import React, { useEffect, useState } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'

import CarruselHome from './components/carruselHome/CarruselHome';

const Home = () => {
  const { setActiveIndex } = ActiveIndex()


  useEffect(() => {
    setActiveIndex(0)
    console.log("Home")
  }, [])


  return (
    <div className='w-full min-h-56 py-14 flex flex-col justify-start items-start'>
      <section className='w-full min-h-[350px] h-[calc(100vh-150px)]'>
        <CarruselHome />
      </section>
    </div>

  )
}

export default Home
