import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Basket from './pages/basket';
import MarkItem from './components/Item/item';



function App() {
  return (
    <>
    <header>
      <Link to = '/' >Home</Link>
      <Link to = '/basket' >Basket</Link>
      <Link to = '/item' >Item</Link>
    </header>
      <Routes>        
          <Route path='/' element = {<Basket />} />
          <Route path='/item' element = {<MarkItem />} />
      </Routes>
    </>    
  );
}

export default App;
