
import React from 'react'

import './App.css';
import Home from './pages/Home';
// import Search from "./pages/Search";
 import SearchPage from "./pages/SearchPage";
import {BrowserRouter as  Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <div className="App">
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={[<Home/>]}/>
         <Route path="/search" element={<SearchPage/>} /> 
        {/* <Route path="/checkout" element={[<Checkout/>]}/>
        <Route path='/login' element={[<Login/>]}/> */}

      </Routes>
    </div>
    </Router>
    
  );
}
  
export default App;
