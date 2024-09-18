import { Suspense, lazy,useRef } from 'react';
import NavBar from '../components/NavBar';

const AboutClub = lazy(() => import('../components/AboutClub'));
const ClubContacts = lazy(() => import('../components/ClubContacts'));
const GetInTouch = lazy(() => import('../components/GetInTouch'));
const Ground = lazy(() => import('../components/Ground'));
const HeroSection = lazy(() => import('../components/HeroSection'));
const History = lazy(() => import('../components/History'));
const LatestNews = lazy(() => import('../components/LatestNews'));
const PastPlayers = lazy(() => import('../components/PastPlayers'));
const Sponsors = lazy(() => import('../components/Sponsors'));

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <NavBar onScrollTo={handleScrollToContact} />
        <HeroSection />
        <AboutClub />
        <LatestNews />
        <ClubContacts />
        <Ground />
        <History />
        <PastPlayers />
        <Sponsors />
        <GetInTouch ref={contactRef} />
      </div>
    </Suspense>
  );
};

export default Home;
