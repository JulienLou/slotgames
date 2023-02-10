import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import SlotFrame from './components/SlotFrame';
import Bank from './components/Bank';
import ScoresPage from './components/Scores';
import Policy from './components/Policy';
import ErrorPage from './components/ErrorPage';
import ErrorMachine from './components/ErrorMachine';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />
        <main>          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/slotgame/:machine" element={<SlotFrame />} />
            <Route path="/bank" element={<Bank />} />
            <Route path="/scores" element={<ScoresPage />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/error-machine" element={<ErrorMachine />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer/>
        
      </Router>

    </div>
  );
}

export default App;
