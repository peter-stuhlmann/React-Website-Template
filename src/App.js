import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

// styles
import GlobalStyles from './components/GlobalStyles';

// components
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
