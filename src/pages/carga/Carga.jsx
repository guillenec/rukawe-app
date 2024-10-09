import React, { useEffect } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'
import imagen1 from '../../img/runkaweLogo.png'

const Carga = () => {
  const { setActiveIndex } = ActiveIndex()

  useEffect(() => {
    setActiveIndex(2)
  }, [])

  return (
    <div className='w-full min-h-screen m-auto bg-white box-border flex flex-col justify-center items-center'>
      <h1 className='font-titulo font-semibold text-xl'>carga de datos</h1>
      <section className='cargaDeDatos mt-20 w-full h-auto flex flex-col flex-nowrap justify-center items-center md:flex md:flex-row md:justify-center md:items-start  box-border'>
        <section className='formLeft w-full md:w-1/2 min-h-6 box-border grid place-content-center'>
          <form className='w-full max-w-96  min-w-80h-full flex flex-col justify-center items-center bg-fuchsia-300'>
            <input type="text" czlassName='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Nombre' />
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Apellido' />
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Edad' />
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Correo' />
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Telefono' />
            <button className='w-1/2 h-10 border-2 border-black rounded-lg'>Enviar</button>
          </form>
        </section>
        <section className='contentRight w-full md:w-1/2 min-h-64 box-border'>
          <img src={imagen1} alt="logo" />
        </section>
      </section>
    </div>
  )
}

export default Carga