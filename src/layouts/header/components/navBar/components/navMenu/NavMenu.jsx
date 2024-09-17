import React from 'react'
import { Link } from 'react-router-dom'
import ActiveIndex from '../../../../../../store/activeIndex/ActiveIndex'

const NavMenu = () => {
  const { activeIndex } = ActiveIndex()

  console.log("active index ->", activeIndex)

  const fontGen1 = 'capitalize font-titulo font-normal flex flex-col justify-start items-start content-start gap-2 relative'

  return (
    <>
      <nav className='navMenu w-[170px] px-1 lg:px-auto lg:w-auto flex flex-col justify-center items-start gap-3 lg:flex lg:flex-row lg:justify-start lg:items-center lg:content-center lg:gap-5 text-[1.2rem] font-bold'>
        <Link
          to='/'
          className={`${fontGen1} ${activeIndex === 0 ? 'text-color_custom3' : 'text-color_custom1'}`}
        >
          home
          <span className={`h-[5px] rounded-[30px] bg-color_custom3 absolute -bottom-1 transition-all duration-200 ease-in ${activeIndex === 0 ? 'w-[100%]' : 'w-0'}`} />
        </Link>
        <Link to='/materiales' className={`${fontGen1} ${activeIndex === 1 ? 'text-color_custom3' : 'text-color_custom1'} `}>
          Materiales
          <span className={`h-[5px] rounded-[30px]  bg-color_custom3  absolute -bottom-1 transition-all duration-200 ease-in ${activeIndex === 1 ? 'w-[100%]' : 'w-0'}`} />
        </Link>
        <Link to='/carga' className={`${fontGen1} ${activeIndex === 2 ? 'text-color_custom3' : 'text-color_custom1'} `}>
          carga
          <span className={`h-[5px] rounded-[30px] bg-color_custom3 absolute -bottom-1 transition-all duration-200 ease-in ${activeIndex === 2 ? 'w-[100%]' : 'w-0'}`} />
        </Link>
      </nav>
    </>
  )
}

export default NavMenu