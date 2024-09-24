import { Button, Card, ProgressBar } from '@tremor/react'
import React from 'react'


const CardCustom = ({ material }) => {

  const progressNum = material != null ? material?.disponible / material?.total * 100 : 0;

  return (
    <>
      <Card className="mx-auto w-64 lg:w-72 overflow-hidden relative flex flex-col justify-between">
        <img src={material?.imagen1 ? material.imagen1 : "https://res.cloudinary.com/dpiwmbsog/image/upload/v1726837099/esrn6/lpujbowpkid943l4w3qm.png"} alt="tela1" className='w-full md:w-full h-32 md:h-36 md:aspect-square object-cover overflow-hidden rounded-sm bg-right-top' />
        <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content h-11 overflow-hidden whitespace-nowrap text-ellipsis">
          {material?.descripcion ? material.descripcion : 'descripcion'}
        </h4>
        <p className=" font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong capitalize text-xl text-center text-color_custom2">
          {material?.nombre ? material.nombre : 'nombre default'}
        </p>
        <section className="flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content p-2">
          <div>
            <span>
              {material?.total ? material.total : 0}
            </span>
          </div>
          <span>{material?.disponible ? material.disponible : 0}</span>
        </section>
        <section className='w-full p-2 flex justify-between items-center gap-5'>
          <section className='flex justify-center items-center gap-2'>
            <Button variant='secondary' className='rounded-sm text-lg transition-colors ease-linear duration-300 m-0 px-3'>   -  </Button>
            <span className='text-color_custom2 font-semibold text-lg '>1</span>
            <Button variant='secondary' className='rounded-sm text-lg transition-colors ease-linear duration-300 m-0 px-3'>  + </Button>
          </section>
          <section>
            <Button variant='primary' className='transition-colors ease-linear duration-300 hover:bg-color_custom2'>
              solicitar
            </Button>
          </section>
        </section>
        <ProgressBar value={progressNum} className="mt-2" />
      </Card>
    </>
  )
}

export default CardCustom
