import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'

const Contain = ({ children }) => {

  const personalLnk = "h-10 w-24 flex justify-center items-center p-4 hover:bg-color_custom2 hover:text-color_custom4 transition-colors ease-linear duration-300 z-10"

  return (
    <div className="w-full min-h-screen bg-red-300 flex flex-col justify-start items-start content-start overflow-hidden gap-4 relative">
      {/* <header className='relative w-full h-24 lg:w-full lg:h-24 bg-slate-800 text-white  text-base '>
        <nav className='naviMenu h-24 w-full flex flex-row justify-start items-center flex-nowrap p-2 gap-3 bg-slate-400 text-xl font-titulo apitalize font-medium border-2'>
          <section className='bg-[#180C0C] flex flex-nowrap justify-start items-center gap-3'>
            <div className={`activeButton absolute left-2.2 bg-color_custom3 h-10 w-24 z-0 rounded-md `}> </div>
            <Link to={'/'} className={`${personalLnk}`} >Home</Link>
            <Link to={'/login'} className={`${personalLnk}`} >Login</Link>
            <Link to={'/materiales'} className={`${personalLnk}`} >Materiales</Link>
            <Link to={'/carga'} className={`${personalLnk}`} >Subir</Link>
          </section>
        </nav>
        <section></section>
      </header> */}
      <Header />
      <main className='bg-yellow-200 w-full h-full min-h-screen flex justify-center items-center text-slate-900'>
        {children}
      </main>
      <footer className='w-full h-24 bg-slate-500'></footer>
    </div>
  )
}

export default Contain