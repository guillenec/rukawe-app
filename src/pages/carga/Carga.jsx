import React, { useEffect } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'

const Carga = () => {
  const { setActiveIndex } = ActiveIndex()

  useEffect(() => {
    setActiveIndex(2)
  }, [])

  return (
    <div>Carga</div>
  )
}

export default Carga