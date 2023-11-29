import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import ProductGrid from './components/ProductGrid'; // Un-comment this line
//import HomePage from './components/HomePage'; // Assuming you have a home page
// import './styles/global.css'; // Importing global styles

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <SearchBar />
      <FilterPanel />
      <ProductGrid />
    </div>
  );
};

export default App;
