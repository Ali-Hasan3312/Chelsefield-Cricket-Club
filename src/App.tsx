import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Asjad from "./assets/All Teams/2nd captain (Asjad).jpg";
import SecondS from "./assets/All Teams/2S X1 .jpg";
import IndoorCaptain from "./assets/All Teams/Indoor captain.jpg";
import IndoorTeam from './assets/All Teams/Indoor league.png';
import thirdCaptain from "./assets/All Teams/karthick.jpg";
import firstS from "./assets/All Teams/saturday 1st xi.jpg";
import ThirdS from "./assets/All Teams/saturday 3S xi.jpg";
import sundaycaptain from "./assets/All Teams/sunday captain.jpg";
import SundayTigers2 from "./assets/All Teams/Sunday Tigers2.jpg";
import T20captain from "./assets/All Teams/T20 Captain.png";
import T20 from "./assets/All Teams/T20 Team.jpg";
import Ahsan from "./assets/users/Ahsan Sher.jpg";
import Loader from './components/Loader';
import {Toaster} from "react-hot-toast"

// Lazy load components
const Footer = lazy(() => import('./components/Footer'));
const About = lazy(() => import('./pages/About'));
const GetInTouch = lazy(() => import('./components/GetInTouch'));
const HallBooking = lazy(() => import('./components/HallBooking'));
const JoinUs = lazy(() => import('./components/JoinUs'));
const NavBar = lazy(() => import('./components/NavBar'));
const NotFound = lazy(() => import('./components/NotFound'));
const Equality = lazy(() => import('./pages/Equality'));
const Home = lazy(() => import('./pages/Home'));

const Teams = lazy(() => import('./pages/Teams'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const History = lazy(() => import('./pages/History'));

function App() {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/touch' element={<GetInTouch />} />
            <Route path='/teams/saturday1stxi' element={<Teams teamName='Saturday 1st XI' captainName="Ahsan Sher" captainImage={Ahsan} teamImage1={firstS} teamImage2={firstS} captainEmail='ahsanjsher@gmail.com' captainPhone='0787528664' />} />
            <Route path='/teams/saturday2ndxi' element={<Teams teamName='Saturday 2nd XI' captainName="Asjad Meer" captainImage={Asjad} teamImage1={SecondS} teamImage2={SecondS} captainEmail='asjadazeem@hotmail.com' captainPhone='07984 130132' />} />
            <Route path='/teams/saturday3rdxi' element={<Teams teamName='Saturday 3rd XI' captainName="Karthic" captainImage={thirdCaptain} teamImage1={ThirdS} teamImage2={ThirdS} captainEmail='karthick@hotmail.com' captainPhone='07984 130132' />} />
            <Route path='/teams/sundaytigers' element={<Teams teamName='Sunday Tigers' captainName="Naeem Ahad" captainImage={sundaycaptain} teamImage1={SundayTigers2} teamImage2={SundayTigers2} captainEmail='ahadn@hotmail.com' captainPhone='+44 7572 427856' />} />
            <Route path='/teams/t20' element={<Teams teamName='T20 Team' captainName="Kashif Malik" captainImage={T20captain} teamImage1={T20} teamImage2={T20} captainEmail='john@hotmail.com' captainPhone='49834948984835' />} />
            <Route path='/teams/indoor' element={<Teams teamName='Indoor League' captainName="Rajesh" captainImage={IndoorCaptain} teamImage1={IndoorTeam} teamImage2={IndoorTeam} captainEmail='Rajesh@hotmail.com' captainPhone='49834948984835' />} />
            
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/hall' element={<HallBooking />} />
            <Route path='/join' element={<JoinUs />} />
            <Route path='/equality' element={<Equality />} />
            <Route path='/club-history' element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
