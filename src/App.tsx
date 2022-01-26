import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Basket from './pages/basket';
import MarkItem from './components/Item/item';
import ShowProducts from './components/Item/item';



function App() {
  return (
    <>
    <div className = 'container'>
      <header className = 'header'>
        <Link to = '/' className = 'link'>Home</Link>
        <Link to = '/basket' className = 'link'>Basket</Link>
        <Link to = '/item' className = 'link'>Item</Link>
      </header>
        <Routes>        
            <Route path = '/' element = {<ShowProducts />} />
            <Route path = '/item' element = {<MarkItem />} />
            <Route path = '/basket' element = {<Basket/>} />
        </Routes>
    </div>
    
    </>    
  );
}

export default App;
