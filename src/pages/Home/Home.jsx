import React, { useEffect, useState } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'
import { Card, ProgressBar } from '@tremor/react'

const Home = () => {
  const { setActiveIndex } = ActiveIndex()

  useEffect(() => {
    setActiveIndex(0)
    console.log("Home")
  }, [])

  return (
    <div className='w-full h-56 bg-pink-200 flex flex-col justify-start items-center gap-5'>
      <h1 className="text-red text-2xl font-titulo flex gap-1 justify-center items-center">
        <BeakerIcon className="size-6 text-blue-500" />home</h1>

      <Card className="mx-auto max-w-md">
        <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Sales
        </h4>
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          $71,465
        </p>
        <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <span>32% of annual target</span>
          <span>$225,000</span>
        </p>
        <ProgressBar value={32} className="mt-2" />
      </Card>


    </div>

  )
}

export default Home
