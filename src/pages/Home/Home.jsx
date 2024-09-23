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
  const fetchMateriales = async () => {
    // creamos la referencia a la colleccion de materiales
    // const querySnapshot = await getDocs(collection(db, "materiales"));
    // const querySnapshot = await getDocs(collection(db, "materiales"));
    // const materialesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    // setMateriales(materialesList);
  }

  // Llamar a la función fetchMateriales cuando el componente se monta
  useEffect(() => {
    const productosRef = collection(db, "materiales");
    getDocs(productosRef)
      .then((res) => {
        // const materialesList = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // setMateriales(materialesList);
        console.log("response ==> ", res)
      })
  }, []);

  console.log("estos son los materiales -> ", materiales)

  return (
    <div className='w-full min-h-56 py-14 bg-pink-200 flex flex-col justify-start items-center gap-5'>
      <h1 className="text-red text-2xl font-titulo flex gap-1 justify-center items-center">Lista de Materiales</h1>
      <CardCustom />
    </div>

  )
}

export default Home
