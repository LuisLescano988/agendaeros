import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-transparent text-white text-right text-4xl absolute z-20 bottom-10 right-20 w-1/3 h-1/3">
      <div className=" h-full w-full mx-auto px-4">
        <div className="flex items-center justify-between h-full w-full">
          <div className="flex flex-col h-full w-full space-x-4">
            <Link 
              to="/home" 
              className="px-3 py-2 rounded-md"
            >
              Menu
            </Link>
            <Link 
              to="/services" 
              className="px-3 py-2 rounded-md"
            >
              Servicios
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 rounded-md"
            >
              Nosotros
            </Link>
            <Link 
              to="/schedule" 
              className="px-3 py-2 rounded-md"
            >
              Agenda tu reserva
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar