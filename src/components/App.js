import "./App.css";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { NotificationMessage } from "../components/NotificationMessage/NotificationMessage";
import { WeatherDisplay } from "./WeatherDisplay/WeatherDisplay";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { storage } from "../modules/storage/storage";
import { FavoriteList } from "./FavoriteList/FavoriteList";
import { searchWeather } from "../modules/redux-reducers/weather/weather";
import { changeFavorite } from "../modules/redux-reducers/favorites/favorites";

function App() {
  const { weather, favorites }  = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!weather.city) {
      handleSearch("City");
    }
  });

  function handleSearch(city) {
    dispatch(searchWeather(city));
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
