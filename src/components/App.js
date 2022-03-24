import "./App.css";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { NotificationMessage } from "../components/NotificationMessage/NotificationMessage";
import { NamedList } from "../components/NamedList/NamedList";
import { ClosinSelectItem } from "./ClosinSelectItem/ClosinSelectItem";
import { getWeather } from "../modules/api/api";
import { WeatherDisplay } from "./WeatherDisplay/WeatherDisplay";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { ACTION_TYPES } from "../modules/actions/actions";

function App(props) {
  const { weather, favorites } = useSelector((state) => state.toObject());
  const dispatch = useDispatch();

  async function searchWeather(city) {
    getWeather(city).then((weather) =>
      dispatch({
        type: ACTION_TYPES.SET_WEATHER,
        content: {
          weather,
        },
      })
    );
  }

  function changeFavorite(city) {
    dispatch({
      type: ACTION_TYPES.CHANGE_FAVORITES,
      content: {
        city,
      },
    });
  }

  return (
    <div className="App">
      <main>
        <div className="weather">
          
          <SearchBar onSubmit={searchWeather} />
          <NotificationMessage
            value={weather.error?.message}
            active={weather.status === "error"}
          />

          <div className="weather__content">
            <WeatherDisplay
              weather={weather}
              onLike={changeFavorite}
            />
            <NamedList
              title="Added Locations:"
              list={[...favorites].map((city, index) => (
                <ClosinSelectItem
                  key={index}
                  value={city}
                  onOpen={searchWeather}
                  onClose={changeFavorite}
                />
              ))}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
