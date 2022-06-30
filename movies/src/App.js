import logo from './logo.svg';
// import { Routes ,Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourite from './components/Favourite';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={

            <Movies  />
        } />
        <Route path='/favourites' element={<Favourite/>} />
      </Routes>

    </Router>
  );
}

export default App;
