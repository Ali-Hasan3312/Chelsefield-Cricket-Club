import './App.css'
import Footer from './components/Footer'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Fixtures from './pages/Fixtures&Results'
import Home from './pages/Home'

function App() {
  return (
   <Router>
   
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
