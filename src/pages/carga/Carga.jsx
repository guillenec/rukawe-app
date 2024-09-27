import React, { useEffect } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'
import imagen1 from '../../img/runkaweLogo.png'

const Carga = () => {
  const { setActiveIndex } = ActiveIndex()

  useEffect(() => {
    setActiveIndex(2)
  }, [])

  return (
    <div className='w-full h-screen m-auto'>
      <h1>carga de datos</h1>
      <section className='cargaDeDatos mt-20 w-full h-auto flex flex-col flex-nowrap justify-center items-center lg:flex-row lg:justify-center lg:items-end gap-2 box-border'>
        <section className='formLeft w-1/2 min-h-6 box-border'>
          <form className='w-full h-full flex flex-col justify-center items-center bg-fuchsia-300'>
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Nombre' />
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Apellido' />
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Edad' />
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Correo' />
            <input type="text" className='w-1/2 h-10 border-2 border-black rounded-lg' placeholder='Telefono' />
            <button className='w-1/2 h-10 border-2 border-black rounded-lg'>Enviar</button>
          </form>
        </section>
        <section className='contentRight w-1/2 min-h-64 box-border'>
          <img src={imagen1} alt="logo" />
        </section>
      </section>
    </div>
  )
}

export default Carga