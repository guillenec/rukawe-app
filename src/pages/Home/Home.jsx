import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BeakerIcon } from '@heroicons/react/24/solid'

const Home = () => {
  const [activeIndex, setActiveIndex] = useState()

  useEffect(() => {
    console.log(activeIndex)
  }, [activeIndex])


  const personalLnk = "h-10 w-24 flex justify-center items-center p-4 hover:bg-color_custom2 hover:text-color_custom4 transition-colors ease-linear duration-300 z-10"
  return (
    <div className="w-full h-screen bg-red-300 flex flex-col justify-start items-start overflow-hidden gap-4">
      <header className='fixed w-full h-[80px] lg:w-52 lg:h-full bg-slate-800 text-white  text-base '>
        <nav className='naviMenu w-full h-full flex flex-row justify-start items-center flex-nowrap p-2 gap-3 bg-slate-400 text-xl font-titulo apitalize font-medium border-2'>
          <section className='bg-[#180C0C] flex flex-nowrap justify-start items-center gap-3'>
            <div className={`activeButton absolute left-2.2 bg-color_custom3 h-10 w-24 z-0 rounded-md `}> </div>
            <Link to={'/'} className={`${personalLnk}`} onClick={setActiveIndex(1)}>Home</Link>
            <Link to={'/login'} className={`${personalLnk}`} onClick={setActiveIndex(2)}>Login</Link>
            <Link to={'/materiales'} className={`${personalLnk}`} onClick={setActiveIndex(3)}>Materiales</Link>
            <Link to={'/carga'} className={`${personalLnk}`} onClick={setActiveIndex(4)}>Subir</Link>
          </section>
        </nav>
        <section></section>
      </header>
      <main className='w-full h-full lg:w-[calc(100vw-210px)] left-auto ml-auto p-5 flex justify-center items-center bg-white'>
        <h1 className="text-red text-2xl font-titulo">home</h1>
        <BeakerIcon className="size-6 text-blue-500" />
      </main>
    </div>
  )
}

export default Home
