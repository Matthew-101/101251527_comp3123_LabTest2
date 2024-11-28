import React, { useState } from 'react';
const React = require('react');

const Search = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city.trim()) onSearch(city);
    };

    return (
        <div>
            <form>
            <input type="text" id="location" placeholder="Enter city here"></input>
            <button onClick={handleSearch}>Search</button>
            </form>
           
        </div>
    );
};

export default Search;