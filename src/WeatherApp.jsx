import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp () {

    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 37.05,
        humidity: 89,
        temp: 30.05,
        tempMax: 30.05,
        tempMin: 30.05,
        weather: "mist"
    });

    let updateWeather = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weather-app" style={{textAlign : "center"}}>
            <h2>Weather App - React Project by Ayush</h2>
            <SearchBox updateWeather = { updateWeather }/>
            <InfoBox info = { weatherInfo }/>
        </div>
    );
}