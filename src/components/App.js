import "./App.css";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { NotificationMessage } from "../components/NotificationMessage/NotificationMessage";
import { getWeather } from "../modules/api/getWeather";
import { WeatherDisplay } from "./WeatherDisplay/WeatherDisplay";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { changeFavorite, setWeather } from "../modules/actions/actions";
import { storage } from "../modules/storage/storage";
import { FavoriteList } from "./FavoriteList/FavoriteList";

function App() {
  const { weather, favorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  function handleSearch(city) {
    getWeather(city).then((weather) => dispatch(setWeather(weather)));
  }

  function handleChangeFavorite(city) {
    dispatch(changeFavorite(city));
  }

  return (
    <div className="App">
      <main>
        <div className="weather">
          <SearchBar onSubmit={handleSearch} />
          <NotificationMessage
            value={weather.error?.message}
            active={weather.status === "error"}
          />

          <div className="weather__content">
            <WeatherDisplay
              weather={weather}
              liked={favorites.includes(weather.city)}
              storage={storage}
              onLike={handleChangeFavorite}
            />
            <FavoriteList
              favorites={favorites}
              onSelect={handleSearch}
              onRemove={handleChangeFavorite}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
