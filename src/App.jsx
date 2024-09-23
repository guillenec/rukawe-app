import './App.css'
import Contain from "./layouts/contain/Contain"
import RoutesApp from './routes/routes'
import { app } from './firebase/config';

function App() {

  return (

    <Contain>
      <RoutesApp />
    </Contain>

  )
}

export default App
