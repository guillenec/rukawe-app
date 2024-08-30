import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header></header>
     <main>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
     </main>
      <footer></footer>
    </>
  )
}

export default App
  