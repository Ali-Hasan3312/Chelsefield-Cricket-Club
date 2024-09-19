import './App.css'
import Footer from './components/Footer'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './pages/About'

import Fixtures from './pages/Fixtures&Results'
import Home from './pages/Home'
import GetInTouch from './components/GetInTouch'
import NavBar from './components/NavBar'
import Teams from './pages/Teams'

function App() {
  return (
   <Router>
   <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/fixtures' element={<Fixtures />} />
      <Route path='/touch' element={<GetInTouch />} />
      <Route path='/teams' element={<Teams />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
