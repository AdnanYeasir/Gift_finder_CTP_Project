// src/components/FilterPanel.jsx
import React, { useState } from 'react';
import '../styles/FilterPanel.css';

function FilterPanel({ onApplyFilters }) {
  const [price, setPrice] = useState('');

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onApplyFilters({ price });
  };

  return (
    <div className="filter-panel">
      <form onSubmit={handleSubmit}>
        <div className="filter-group">
          <label htmlFor="price">Price under:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter max price"
          />
        </div>
        {/* You can add more filter options here */}
        <button type="submit" className="apply-filters">
          Apply Filters
        </button>
      </form>
    </div>
  );
}

export default FilterPanel;
