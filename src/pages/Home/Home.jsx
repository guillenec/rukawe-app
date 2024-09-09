import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu(!menu)
  }
  const handleLink = () => {
    setMenu(false)
  }

  const personalLnk = ""
  return (
    <div className="w-full h-screen bg-red-300 flex flex-col justify-start items-start overflow-hidden gap-4">
      <header className='fixed w-full h-[80px] lg:w-52 lg:h-full bg-slate-800 text-white  text-base '>
        <nav className='naviMenu w-full h-full flex flex-row justify-start items-center flex-nowrap p-2 gap-3 bg-slate-400 text-xl font-titulo apitalize font-medium border-2'>
          <Link to={'/'} className='h-10 bg-slate-800 flex justify-center items-center p-4 hover:bg'>Home</Link>
          <Link to={'/login'} className=''>Login</Link>
          <Link to={'/materiales'} className=''>Materiales</Link>
          <Link to={'/carga'} className=''>Carga Prods</Link>
        </nav>
        <section></section>
      </header>
      <main className='w-full h-full lg:w-[calc(100vw-210px)] left-auto ml-auto p-5 flex justify-center items-center bg-white'>
        <h1 className="text-red text-2xl">home</h1>
      </main>
    </div>
  )
}

export default Home
