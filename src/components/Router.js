import React, { lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// page components
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const Home = lazy(() => import('./Home'));
const LegalNotice = lazy(() => import('./LegalNotice'));
const NotFound = lazy(() => import('./NotFound'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const Projects = lazy(() => import('./Projects'));

export default function Router() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/legal-notice" element={<LegalNotice />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}
