import gsap from 'gsap';
import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const Works = lazy(() => import('../pages/Works'));
const Teams = lazy(() => import('../pages/Teams'));

const Router = () => {
  const { pathname } = useLocation();
  if (pathname === '/contact') {
    gsap.to(' .btn-toggle span ', { background: '#222' });
    gsap.to('.changeLang', { color: '#222222' });
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/works" element={<Works />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  );
};

export default Router;
