import React, { useState } from 'react';
const React = require('react');
import Weather from './Weather';
import Search from './Search';

const App = () => {
    const [city, setCity] = useState('Toronto');

    return (
        <div>
            <h1>Weather App</h1>
            <Search onSearch={setCity} />
            <Weather city={city} />
        </div>
    );
};

export default App;