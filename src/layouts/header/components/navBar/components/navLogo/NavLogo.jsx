import { useNavigate } from "react-router-dom"

const NavLogo = () => {

  // useEffect(() => {
  //   dispatch(setActiveIndex(null))
  //   return () => { setActiveIndex(null) }
  // }, [])
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <button
      className='logoContainer font-titulo text-[40px] text-greenCustom flex lg:justify-center lg:items-center '
      onClick={handleClick}
    >
      <span className='capitalize font-titulo text-left'>
        Rukawe
      </span>
    </button>
  )
}

export default NavLogo