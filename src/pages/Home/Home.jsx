import React, { useEffect, useState } from 'react'
import ActiveIndex from '../../store/activeIndex/ActiveIndex'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'; // ajusta la ruta según tu archivo firebase.js
import CardCustom from '../../components/CardCustom/CardCustom';

const Home = () => {
  const { setActiveIndex } = ActiveIndex()
  const [materiales, setMateriales] = useState([])

  useEffect(() => {
    setActiveIndex(0)
    console.log("Home")
  }, [])

  // funcion paa obtener datos desde firestore
  // const fetchMateriales = async () => {
  //   const querySnapshot = await getDocs(collection(db, "materiales"));
  //   const materialesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //   setMateriales(materialesList);
  // }

  // Llamar a la función fetchMateriales cuando el componente se monta
  useEffect(() => {
    const productosRef = collection(db, 'materiales');
    getDocs(productosRef)
      .then((resp) => {
        // setMateriales(materialesList);
        const materialesList = resp.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMateriales(materialesList);
        console.log("materialesList ==> ", materialesList)

      })
  }, []);

  console.log("estos son los materiales -> ", materiales)

  return (
    <div className='w-full min-h-56 py-14 bg-pink-200 flex flex-col justify-start items-center gap-5'>
      <h1 className="text-red text-2xl font-titulo flex gap-1 justify-center items-center">Lista de Materiales</h1>
      <section className='w-full h-auto grid gap-4 grid-cols-1 md:gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {
          materiales.length > 0 && materiales.map((material, index) => (
            <CardCustom key={index} material={material} />
          ))
        }
      </section>
    </div>

  )
}

export default Home
