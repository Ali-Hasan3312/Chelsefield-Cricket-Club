import { Suspense, lazy } from 'react';

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
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        
        <HeroSection />
        <AboutClub />
        <LatestNews />
        <ClubContacts />
        <Ground />
        <History />
        <PastPlayers />
        <Sponsors />
        <GetInTouch />
      </div>
    </Suspense>
  );
};

export default Home;
