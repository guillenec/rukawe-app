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
    <div className='w-full min-h-56 py-14 flex flex-col justify-start items-center gap-5'>
      <section className='banner'>

      </section>
      <h1 className="text-red text-2xl font-titulo flex gap-1 justify-center items-center">Home</h1>

      <section className='w-full h-96 bg-tremor-brand-faint '>

        <CarruselHome />
      </section>
    </div>

  )
}

export default Home
