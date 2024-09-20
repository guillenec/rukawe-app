import React, { useEffect, useState } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'
import { Card, ProgressBar } from '@tremor/react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'; // ajusta la ruta según tu archivo firebase.js

const Home = () => {
  const { setActiveIndex } = ActiveIndex()
  const [materiales, setMateriales] = useState([])

  useEffect(() => {
    setActiveIndex(0)
    console.log("Home")
  }, [])

  // funcion paa obtener datos desde firestore
  const fetchMateriales = async () => {
    const querySnapshot = await getDocs(collection(db, "materiales"));
    const materialesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMateriales(materialesList);
  }

  // Llamar a la función fetchMateriales cuando el componente se monta
  useEffect(() => {
    fetchMateriales();
  }, []);

  console.log(materiales)

  return (
    <div className='w-full min-h-56 py-14 bg-pink-200 flex flex-col justify-start items-center gap-5'>
      <h1 className="text-red text-2xl font-titulo flex gap-1 justify-center items-center">Lista de Materiales</h1>
      <Card className="mx-auto max-w-md">
        <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1726837099/esrn6/lpujbowpkid943l4w3qm.png" alt="tela1" className='w-full h-36 object-cover overflow-hidden rounded-sm' />
        <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Tela color vino
        </h4>
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong capitalize">
          tela color vino gamusa
        </p>
        <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <span>total telas: 5</span>
          <span>disponibles 5</span>
        </p>
        <section className='w-full p-2 flex justify-center items-center gap-5'>
          <section>
            <button className='text-color rounded-sm text-color_custom3 font-semibold text-2xl p-3  hover:bg-color_custom4 hover:text-color_custom1 transition-colors ease-linear duration-300'>-</button>
            <span className='text-color_custom1 font-semibold text-2xl p-1'>1</span>
            <button className='rounded-sm text-color_custom3 font-semibold text-2xl p-3  hover:bg-color_custom4 hover:text-color_custom1 transition-colors ease-linear duration-300'>+</button>
          </section>
          <section>
            <button className='grid place-content-center h-10 px-4 rounded-md bg-color_custom3 capitalize text-white font-semibold'>solicitar</button>
          </section>
        </section>
        <ProgressBar value={100} className="mt-2" />
      </Card>
    </div>

  )
}

export default Home
