import React from 'react';
import './App.scss';
import Layout from './layouts/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import About from './about/About';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
