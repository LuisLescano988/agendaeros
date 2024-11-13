import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Landing from './views/Landing'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Schedule from './views/Schedule'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App