import './App.css'
import Footer from './components/Footer'

import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Fixtures from './pages/Fixtures&Results'

function App() {
 

  return (
   <Router>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/fixtures' element={<Fixtures />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
