import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './InfoBox.css';


export default function InfoBox({ info }) {

    const IMG_URL = "https://plus.unsplash.com/premium_photo-1667239532950-db28085dacd0?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://cdn-icons-png.flaticon.com/512/3161/3161249.png";
    const COLD_URL = "https://www.shutterstock.com/image-vector/3d-weather-forecast-icons-snowy-600nw-2320827615.jpg";
    const RAIN_URL = "https://cdn-icons-png.flaticon.com/512/4724/4724091.png";

    return (
        <div className="InfoBox">
            <div className="info-card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 75 ? RAIN_URL : info.temp > 17 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>Weather feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}