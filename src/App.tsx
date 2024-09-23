import './App.css'
import Footer from './components/Footer'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './pages/About'

import Fixtures from './pages/Fixtures&Results'
import Home from './pages/Home'
import GetInTouch from './components/GetInTouch'
import NavBar from './components/NavBar'
import Teams from './pages/Teams'
import { Stats } from './pages/Stats'
import HallBooking from './components/HallBooking'
import JoinUs from './components/JoinUs'
import MatchDetails from './components/MatchDetails'
import NotFound from './components/NotFound'

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
      <Route path='/stats' element={<Stats />} />
      <Route path='/hall' element={<HallBooking />} />
      <Route path='/join' element={<JoinUs />} />
      <Route path='/match-details' element={<MatchDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
