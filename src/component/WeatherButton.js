import React from 'react'
import { Button } from 'react-bootstrap';

export const WeatherButton = ({ getWeatherByCity, getCurrentLocation }) => {
  return (
    <div>
        <Button variant="warning" onClick={getCurrentLocation}>Current Location</Button>
        <Button variant="warning" onClick={() => getWeatherByCity("Paris")}>Paris</Button>
        <Button variant="warning" onClick={() => getWeatherByCity("New York")}>new york</Button>
    </div>
  )
}
