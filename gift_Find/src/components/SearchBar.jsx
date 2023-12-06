import React, { useState } from 'react';
import '../styles/FilterPanel.css';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ebayResults, setEbayResults] = useState([]);
  const [homeDepotResults, setHomeDepotResults] = useState([]);
  const [targetResults, setTargetResults] = useState([]); // Added state for Target results

  const search = async () => {
    try {
      // Create three separate promises for eBay, Home Depot, and Target API requests
      const ebayPromise = fetch(`/api?q=${encodeURIComponent(searchQuery)}`);
      const homeDepotPromise = fetch(
        `https://api.bigboxapi.com/request?api_key=53B6500E1E5144D3B3BE8D223186394C&search_term=${encodeURIComponent(
          searchQuery
        )}&category_id=5zja3&type=search`
      );
      const targetPromise = fetch(
        `https://api.redcircleapi.com/request?api_key=28CB512187E345228012A4CE1849463F&search_term=${encodeURIComponent(
          searchQuery
        )}&category_id=5zja3&type=search`
      );

      // Use Promise.all to make parallel requests
      const [ebayResponse, homeDepotResponse, targetResponse] = await Promise.all([
        ebayPromise,
        homeDepotPromise,
        targetPromise, // Added Target API promise
      ]);

      // Check if all responses are ok
      if (!ebayResponse.ok) {
        throw new Error(`eBay API error! status: ${ebayResponse.status}`);
      }

      if (!homeDepotResponse.ok) {
        throw new Error(`Home Depot API error! status: ${homeDepotResponse.status}`);
      }

      if (!targetResponse.ok) {
        throw new Error(`Target API error! status: ${targetResponse.status}`);
      }

      // Parse the responses
      const ebayData = await ebayResponse.json();
      const homeDepotData = await homeDepotResponse.json();
      const targetData = await targetResponse.json(); // Added Target API data

      // Log the responses for debugging
      console.log('eBay API Response:', ebayData);
      console.log('Home Depot API Response:', homeDepotData);
      console.log('Target API Response:', targetData); // Log Target API data

      // Set the search results separately for eBay, Home Depot, and Target
      setEbayResults(ebayData.itemSummaries);
      setHomeDepotResults(homeDepotData.search_results);
      setTargetResults(targetData.search_results); // Set Target results
    } catch (error) {
      console.error('Failed to fetch: ', error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Search for Products</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter your search term here"
      />
      <button onClick={search} className="apply-filters">
        Search
      </button>

      <div id="results">
        <div className="column1">
          <h2>eBay Results</h2>
          {ebayResults.map((item, index) => (
            <div key={index} className="item">
              <div className="item-details">
                <img src={item.image.imageUrl} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p className="price">${item.price.value} {item.price.currency}</p>
                  <a href={item.itemWebUrl} target="_blank" rel="noopener noreferrer">
                    View on eBay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="column1">
          <h2>Home Depot Results</h2>
          {homeDepotResults.map((item, index) => (
            <div key={index} className="item">
              <div className="item-details">
                <img src={item.product.primary_image} alt={item.title} width="225" height="225" />
                <div>
                  <h3>{item.product.title}</h3>
                  <p className="price">${item.offers.primary.price} {item.offers.primary.currency}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View on Home Depot
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="column1">
          <h2>Target Results</h2>
          {targetResults.map((item, index) => (
            <div key={index} className="item">
              <div className="item-details">
                {/* Add image source for Target items */}
                <img src={item.product.main_image} alt={item.title} width="225" height="225" />
                <div>
                  <h3>{item.product.title}</h3>
                  <p className="price">${item.offers.primary.price} {item.offers.primary.currency}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View on Target
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
