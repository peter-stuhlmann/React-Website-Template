import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './components/Router';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="loading">
              <CircularProgress />
            </div>
          }
        >
          <Router />
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
