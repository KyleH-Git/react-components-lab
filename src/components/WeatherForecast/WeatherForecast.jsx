import './WeatherForecast.css'
import WeatherData from '../WeatherData/WeatherData.jsx';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';

const WeatherForecast = ({forecasts}) => {

    return (
        <div className="weather">
            <WeatherIcon img={forecasts.img} imgAlt={forecasts.imgAlt}/>
            <WeatherData day={forecasts.day} conditions={forecasts.conditions} time={forecasts.time}/>
        </div>
    );
};

export default WeatherForecast;