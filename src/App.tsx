import './App.css'
import Footer from './components/Footer'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './pages/About'

import GetInTouch from './components/GetInTouch'
import HallBooking from './components/HallBooking'
import JoinUs from './components/JoinUs'
import MatchDetails from './components/MatchDetails'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import Equality from './pages/Equality'
import Fixtures from './pages/Fixtures&Results'
import Home from './pages/Home'
import { Stats } from './pages/Stats'
import Teams from './pages/Teams'

function App() {
  return (
   <Router>
   <div className=' overflow-x-hidden'>
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
      <Route path='/equality' element={<Equality />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
   </div>
   </Router>
  )
}

export default App
