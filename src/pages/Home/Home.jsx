import React, { useEffect, useState } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'

const Home = () => {
  const { setActiveIndex } = ActiveIndex()

  useEffect(() => {
    setActiveIndex(0)
    console.log("Home")
  }, [])

  return (
    <>
      <h1 className="text-red text-2xl font-titulo flex gap-1 justify-center items-center">
        <BeakerIcon className="size-6 text-blue-500" />home</h1>
    </>

  )
}

export default Home
