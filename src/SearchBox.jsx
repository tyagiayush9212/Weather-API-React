import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'

export default function SearchBox({ updateWeather }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6ab7378cf07e04fb2fbc91129f5f9ee9"

    let getWeatherInfo = async () => {
        try {
            let API_RESPONSE = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await API_RESPONSE.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };

            console.log(result);
            return result;
        } catch ( err ) {
            throw err;
        }
    
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateWeather(newInfo);
            setCity("");
    
        } catch ( err ) {
            setError(true);
        }
    }
    return (
        <div className='SearchBox'>
            <form action="#" onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Submit
                </Button>
            
            {error && <p style={{color : "red"}}>No such place exists in our API</p> }
            </form>
        </div>
    );
}