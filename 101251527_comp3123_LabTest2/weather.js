import React, { useState, useEffect } from 'react';
import axios from 'axios';
const React = require('react');

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={{APIkey}}&units=metric`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error: Could not fetch weather!", error);
            }
        };
        fetchWeather();
    }, [city]);

    const { main, weather, name } = weatherData;

    return (
        <div>
            <h1>Weather App</h1>
            <p>Country: {name}</p>
            <p>Temperature: {main.temp}°C</p>
            <p>Condition: {weather[0].description}</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt={weather[0].description}
            />
        </div>
    );
};

export default Weather;