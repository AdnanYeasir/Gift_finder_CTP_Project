import React, { useState } from 'react';
import '../styles/SearchBar.css';
import mockData from '../data/mockData.json';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = mockData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
        // handle logistics for API
    };

    return (
        <form className='search-bar' onSubmit={handleSearch}>
            <input
                type='text'
                className='search-input'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit' className='search-button'>
                Search
            </button>
        </form>
    );
}

export default SearchBar;
