import { Link} from "react-router-dom"
import logo from '../../public/img/logo.svg'
import Navegacion from "./navegacion"

function Header() {


  return (
    <div className='header'>
      <div className='contenedor barra'>
        <Link to='/' className='logo'>
          <img src={logo} alt="imagen logo" className="logo" />
        </Link >
       <Navegacion/>
      </div>
    </div>
  )
}

export default Header
