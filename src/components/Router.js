import React, { lazy, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

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
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/legal-notice" component={LegalNotice} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}
