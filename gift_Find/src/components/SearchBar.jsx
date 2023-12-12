import React, { useState } from 'react';
import '../styles/SearchBar.css';
import '../styles/FilterPanel.css';
import ProductCard from './ProductCard';
import BookmarkUnfilled from "../assets/bookmark_unfilled.png";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ebayResults, setEbayResults] = useState([]);
  const [homeDepotResults, setHomeDepotResults] = useState([]);
  const [targetResults, setTargetResults] = useState([]);

  
  const [sortOrder, setSortOrder] = useState('');
  const sortResults = (order) => {
    const sortFunction = (a, b) => {
      // Replace 'price.value' and 'offers.primary.price' with your actual price path
      let priceA = a.price ? a.price.value : a.offers.primary.price;
      let priceB = b.price ? b.price.value : b.offers.primary.price;

      return order === 'asc' ? priceA - priceB : priceB - priceA;
    };

    setEbayResults([...ebayResults].sort(sortFunction));
    setHomeDepotResults([...homeDepotResults].sort(sortFunction));
    setTargetResults([...targetResults].sort(sortFunction));
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    sortResults(event.target.value);
  };

  const search = async () => {
    const ebayPromise = fetch(`/api?q=${encodeURIComponent(searchQuery)}`);
    const homeDepotPromise = fetch(
      `https://api.bigboxapi.com/request?api_key=53870F884328437FAB50C49DA30856A6&search_term=${encodeURIComponent(
        searchQuery
      )}&category_id=5zja3&type=search`
    );
    const targetPromise = fetch(
      `https://api.redcircleapi.com/request?api_key=A5E3D9713DD2411999C317AAB757481E&search_term=${encodeURIComponent(
        searchQuery
      )}&category_id=5zja3&type=search`
    );



    const results = await Promise.allSettled([ebayPromise, homeDepotPromise, targetPromise]);

    results.forEach(async (result, index) => {
      if (result.status === 'fulfilled' && result.value.ok) {
        try {
          const data = await result.value.json();
          if (index === 0) {
            setEbayResults(data.itemSummaries);
            console.log('eBay API Response:', data);
          } else if (index === 1) {
            setHomeDepotResults(data.search_results);
            console.log('Home Depot API Response:', data);
          } else if (index === 2) {
            setTargetResults(data.search_results);
            console.log('Target API Response:', data);
          }
        } catch (error) {
          console.error('Error parsing data:', error);
        }
      } else {
        console.error(`API request ${index + 1} failed:`, result.reason);
      }
    });
  };

    return (
    <div className='home-page'>
      <h1>Search for Products</h1>
      <div className='search-bar'>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter your search term here"
          className="search-input"
        />
        <button onClick={search} className="search-button">
          Search
        </button>
        <div className="sort-menu">
          <label htmlFor="sortOrder">Sort by Price: </label>
          <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      <div id="results">
        <div className="column1">
          <h2 className='results-title'>eBay Results</h2>
          {ebayResults.map((item, index) => (
            <div key={index} className="item">
              <div className='item-header'>
                <a href={item.itemWebUrl} target="_blank" rel="noopener noreferrer" className='title-link'>
                      {item.title}
                    </a>
                  <img src={BookmarkUnfilled} alt='not saved' className='save-icon'/>
              </div>
              <img src={item.image.imageUrl} alt={item.title} className='image'/>
              <p className="price">${item.price.value} {item.price.currency}</p>
            </div>
          ))}
        </div>

        <div className="column1">
          <h2>Home Depot Results</h2>
          {homeDepotResults.map((item, index) => (
            <div key={index} className="item">
              <div className='item-header'>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className='title-link'>
                      {item.product.title}
                    </a>
                  <img src={BookmarkUnfilled} alt='not saved' className='save-icon'/>
              </div>
              <img src={item.product.primary_image} alt={item.title} width="225" height="225" className='image'/>
              <p className="price">${item.offers.primary.price} {item.offers.primary.currency}</p>
            </div>
            // <div key={index} className="item">
            //   <div className="item-details">
            //     <img src={item.product.primary_image} alt={item.title} width="225" height="225" />
            //     <div>
            //       <h3>{item.product.title}</h3>
            //       <p className="price">${item.offers.primary.price} {item.offers.primary.currency}</p>
            //       <a href={item.link} target="_blank" rel="noopener noreferrer">
            //         View on Home Depot
            //       </a>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>

        <div className="column1">
          <h2>Target Results</h2>
          {targetResults.map((item, index) => (
            <div key={index} className="item">
            <div className='item-header'>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className='title-link'>
                    {item.product.title}
                  </a>
                <img src={BookmarkUnfilled} alt='not saved' className='save-icon'/>
            </div>
            <img src={item.product.main_image} alt={item.title} width="225" height="225" className='image'/>
            <p className="price">${item.offers.primary.price} {item.offers.primary.currency}</p>
          </div>
            // <div key={index} className="item">
            //   <div className="item-details">
            //     {/* Add image source for Target items */}
            //     <img src={item.product.main_image} alt={item.title} width="225" height="225" />
            //     <div>
            //       <h3>{item.product.title}</h3>
            //       <p className="price">${item.offers.primary.price} {item.offers.primary.currency}</p>
            //       <a href={item.link} target="_blank" rel="noopener noreferrer">
            //         View on Target
            //       </a>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
