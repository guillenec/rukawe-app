
import NavBar from './components/navBar/NavBar'
import Toggle from './components/toggle/Toggle'

const Header = () => {
  return (
    <header className=' fixed top-0 lg:left-0 w-[100%] h-[100px] lg:h-auto  text-blackCustom flex justify-center items-center font-bold text-xl uppercase text-center pt-[0] z-50'>
      <NavBar />
      <Toggle />
    </header>
  )
}

export default Header