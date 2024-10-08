import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Asjad from "./assets/All Teams/2nd captain (Asjad).jpg"
import thirdCaptain from "./assets/All Teams/3rd xi captain (Asjad).jpg"
import firstS from "./assets/All Teams/saturday 1st xi.jpg"
import SecondS from "./assets/All Teams/saturday 2nd xi.jpg"
import ThirdS from "./assets/All Teams/saturday 3rd xi.jpg"
import sundaycaptain from "./assets/All Teams/sunday captain.jpg"
import SundayTigers2 from "./assets/All Teams/Sunday Tigers2.jpg"
import T20captain from "./assets/All Teams/T20 (captain).jpg"
import T20 from "./assets/All Teams/T20.jpg"
import Ahsan from "./assets/users/Ahsan Sher.jpg"
import Footer from './components/Footer'
import About from './pages/About'

import GetInTouch from './components/GetInTouch'
import HallBooking from './components/HallBooking'
import JoinUs from './components/JoinUs'

import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import Equality from './pages/Equality'
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
      <Route path='/touch' element={<GetInTouch />} />
      <Route path='/teams/saturday1stxi' element={<Teams teamName='Saturday 1st XI' captainName = "Ahsan Sher" captainImage={Ahsan} teamImage1={firstS} teamImage2={firstS} captainEmail='ahsanjsher@gmail.com' captainPhone='0787528664
      ' />} />
      <Route path='/teams/saturday2ndxi' element={<Teams teamName='Saturday 2nd XI' captainName = "Asjad" captainImage={Asjad} teamImage1={SecondS} teamImage2={SecondS} captainEmail='asjadazeem@hotmail.com' captainPhone='07984 130132
      ' />} />
      <Route path='/teams/saturday3rdxi' element={<Teams teamName='Saturday 3rd XI' captainName = "Karthic" captainImage={thirdCaptain} teamImage1={ThirdS} teamImage2={ThirdS} captainEmail='asjadazeem@hotmail.com' captainPhone='07984 130132
      ' />} />
      <Route path='/teams/sundaytigers' element={<Teams teamName='Sunday Tigers' captainName = "Naeem Ahad" captainImage={sundaycaptain} teamImage1={SundayTigers2} teamImage2={SundayTigers2} captainEmail='ahadn@hotmail.com' captainPhone='+44 7572 427856
      ' />} />
      <Route path='/teams/t20' element={<Teams teamName='T20' captainName = "Kashif Malik" captainImage={T20captain} teamImage1={T20} teamImage2={T20} captainEmail='john@hotmail.com' captainPhone='49834948984835
      ' />} />
      <Route path='/stats' element={<Stats />} />
      <Route path='/hall' element={<HallBooking />} />
      <Route path='/join' element={<JoinUs />} />
      <Route path='/equality' element={<Equality />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
   </div>
   </Router>
  )
}

export default App
