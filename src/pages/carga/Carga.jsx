import React, { useEffect } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'


const Carga = () => {
  const { setActiveIndex } = ActiveIndex()

  useEffect(() => {
    setActiveIndex(2)
  }, [])

  return (
    <div className='w-full h-screen m-auto'>
      <h1>carga de datos</h1>
    </div>
  )
}

export default Carga