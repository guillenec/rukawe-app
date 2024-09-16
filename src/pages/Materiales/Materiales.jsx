import React, { useEffect } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'

const Materiales = () => {
  const { setActiveIndex } = ActiveIndex()

  useEffect(() => {
    setActiveIndex(1)
  }, [])

  return (
    <div>
      <h1>materialles</h1>
    </div>
  )
}

export default Materiales