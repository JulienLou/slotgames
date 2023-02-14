import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

const LazyHome = React.lazy(() => import('./components/Home'));
const LazySlotFrame = React.lazy(() => import('./components/SlotFrame'));
const LazyBank = React.lazy(() => import('./components/Bank'));
const LazyScoresPage = React.lazy(() => import('./components/Scores'));
const LazyPolicy = React.lazy(() => import('./components/Policy'));
const LazyErrorPage = React.lazy(() => import('./components/ErrorPage'));
const LazyErrorMachine = React.lazy(() => import('./components/ErrorMachine'));

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />
        <main>          
          <Routes>
            <Route path="/" element={<React.Suspense fallback='Chargement de la page...'><LazyHome /></React.Suspense>} /> {/* <Route path="/" element={<Home />} /> */}
            <Route path="/slotgame/:machine" element={<React.Suspense fallback='Chargement du jeu...'><LazySlotFrame /></React.Suspense>} /> {/* <Route path="/slotgame/:machine" element={<SlotFrame />} /> */}
            <Route path="/bank" element={<React.Suspense fallback='Chargement de la page...'><LazyBank /></React.Suspense>} /> {/* <Route path="/bank" element={<Bank />} /> */}
            <Route path="/scores" element={<React.Suspense fallback='Chargement de la page...'><LazyScoresPage /></React.Suspense>} /> {/* <Route path="/scores" element={<ScoresPage />} /> */}
            <Route path="/policy" element={<React.Suspense fallback='Chargement de la page...'><LazyPolicy /></React.Suspense>} /> {/* <Route path="/policy" element={<Policy />} /> */}
            <Route path="/error-machine" element={<React.Suspense fallback='Chargement de la page...'><LazyErrorMachine /></React.Suspense>} />
            <Route path="*" element={<React.Suspense fallback='Chargement de la page...'><LazyErrorPage /></React.Suspense>} />
          </Routes>
        </main>
        <Footer/>
        
      </Router>

    </div>
  );
}

export default App;
