import React from 'react'
import { Link } from 'react-router-dom'

const Contain = ({ children }) => {

  const personalLnk = "h-10 w-24 flex justify-center items-center p-4 hover:bg-color_custom2 hover:text-color_custom4 transition-colors ease-linear duration-300 z-10"

  return (
    <div className="w-full h-screen bg-red-300 flex flex-col justify-start items-start overflow-hidden gap-4">
      <header className='fixed w-full h-[80px] lg:w-52 lg:h-full bg-slate-800 text-white  text-base '>
        <nav className='naviMenu w-full h-full flex flex-row justify-start items-center flex-nowrap p-2 gap-3 bg-slate-400 text-xl font-titulo apitalize font-medium border-2'>
          <section className='bg-[#180C0C] flex flex-nowrap justify-start items-center gap-3'>
            <div className={`activeButton absolute left-2.2 bg-color_custom3 h-10 w-24 z-0 rounded-md `}> </div>
            <Link to={'/'} className={`${personalLnk}`} >Home</Link>
            <Link to={'/login'} className={`${personalLnk}`} >Login</Link>
            <Link to={'/materiales'} className={`${personalLnk}`} >Materiales</Link>
            <Link to={'/carga'} className={`${personalLnk}`} >Subir</Link>
          </section>
        </nav>
        <section></section>
      </header>
      <main className='bg-yellow-200 w-full h-full flex justify-center items-center text-slate-900'>
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

export default Contain