import React from 'react';
import './App.scss';
import Layout from './layouts/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home/Home';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
