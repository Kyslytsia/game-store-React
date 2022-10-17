import { useState } from "react";
import "./App.css";
import logo from "./img/celsius-degrees.svg";

function App() {
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [wind, setWind] = useState("");
  const [city, setCity] = useState("Киев");
  const [error, setError] = useState("");
  const [icon, setIcon] = useState("");
  const [date, setDate] = useState("");
  const [button, setButton] = useState("Показать погоду");

  const updateWeather = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=6e66119d46ba4aec8aa152151221510&q=${city}&aqi=no`
    )
      .then((el) => el.json())
      .then((data) => {
        setTemperature(data.current.temp_c);
        setCondition(data.current.condition.text);
        setWind(data.current.wind_kph);
        setIcon(data.current.condition.icon);
        setDate(data.current.last_updated);
        setButton("Поменять город");
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setTemperature("");
        setCondition("");
        setIcon("");
        setButton("Показать погоду");
      });
  };

  let a = setTimeout(updateWeather, 0);

  return (
    <div className="App">
      <div className="App__input">
        <input
          className="input"
          type="text"
          value={city}
          onInput={(e) => {
            setCity(e.target.value);
          }}
        />
        <button className="button" type="button" onClick={updateWeather}>
          {button}
        </button>
        <br></br>
      </div>
      {error && <div className="error">Такого города нет</div>}

      {temperature && condition && (
        <div className="App__weather-block">
          <div className="left-block">
            <img className="icon" src={icon} />
            <div className="condition">{condition}</div>
          </div>

          <div className="right-block">
            <div className="date">{date}</div>
            <div className="wind">wind speed {wind}</div>
            <div className="temperature">
              {Math.trunc(temperature).toString()}
              <img className="img" src={logo} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
