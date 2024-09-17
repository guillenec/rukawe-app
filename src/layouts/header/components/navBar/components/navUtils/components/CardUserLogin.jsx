import React, { useState } from 'react'
import { IoChevronDownSharp, IoLogOutOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const CardUserLogin = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const navigate = useNavigate()
  const user = { role_id: 2, email: 'XXXXXXXXXXXXXXXX', idByRole: 1 }

  const activeMenuHandler = () => {
    setActiveMenu(!activeMenu)
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <>
      <section className='relative bg-slate-200 cardUSerLogin w-[200px] h-[70px]'>
        <div className={`w-[200px] flex flex-col justify-start items-start rounded-md  transition-all duration-150 ease-linear overflow-hidden ${activeMenu ? 'h-[180px] bg-white' : 'h-[70px'} `}>

          {/* section submenu HEader */}
          <section className='w-[100%] h-[70px] flex flex-row justify-center items-center overflow-hidden border-2'>

            <section className='titlesPerfil w-[150px] h-[100%] flex flex-col justify-center items-start gap-1 p-2 overflow-hidden'>
              <h2 className='nameUSer text-color_custom1 font-titulo font-bold capitalize text-lg overflow-hidden'>{user.email}</h2>
              <h3 className='font-parrafo font-light text-color_custom1  capitalize text-sm overflow-hidden'>

                {user?.role_id === 1 ? 'Usuario' : user?.role_id === 2 ? 'Restaurante' : ''}

              </h3>
            </section>

            <section className='w-[50px] h-[100%] grid place-content-center'>
              <div
                onClick={activeMenuHandler}
                className='border-2 border-color_custom4 p-[1px] rounded-full grid place-content-center'
              >
                <IoChevronDownSharp className='text-color_custom1  text-[1.1rem]' />
              </div>
            </section>

          </section>

          {/* section submenu main */}
          {
            activeMenu &&
            <div className='submenuLogin2 bg-slate-300 pt-3 w-[100%] h-[40px] flex-col justify-center items-center border-t-2'>
              <Link
                to={user.idByRole && user.role_id === 2 ? `/restaurant/${user.idByRole}` : '/profile'}
                className='w-[100%]  cursor-pointer flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm capitalize font-parrafo font-normal px-5 py-1 rounded-md hover:bg-lightBrownCustom transition-all duration-150 ease-in'
              >
                <IoLogOutOutline className='text-lg text-greenCustom2' />
                Mi Perfil
              </Link>
              <button
                onClick={handleLogout}
                className='w-[100%]  cursor-pointer flex flex-row flex-nowrap justify-start items-center content-center gap-1 text-sm capitalize font-parrafo font-normal px-5 py-1 rounded-md hover:bg-lightBrownCustom transition-all duration-150 ease-in'
              >
                <IoLogOutOutline className='text-lg text-greenCustom2' />
                Cerrar sesión
              </button>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default CardUserLogin