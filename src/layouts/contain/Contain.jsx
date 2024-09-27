import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Contain = ({ children }) => {

  const personalLnk = "h-10 w-24 flex justify-center items-center p-4 hover:bg-color_custom2 hover:text-color_custom4 transition-colors ease-linear duration-300 z-10"

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-start content-start overflow-hidden gap-4 relative">
      <Header />
      <main className=' w-full h-full min-h-screen flex flex-col justify-start items-center text-slate-900 mt-16 lg:mt-20'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Contain