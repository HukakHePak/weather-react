import "./App.css";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { NotificationMessage } from "../components/NotificationMessage/NotificationMessage";
import { NamedList } from "../components/NamedList/NamedList";
import { ClosinSelectItem } from "./ClosinSelectItem/ClosinSelectItem";
import { getWeather } from "../modules/api/api";
import { useEffect, useState } from "react";
import { WeatherDisplay } from "./WeatherDisplay/WeatherDisplay";

function App(props) {
  const { city, storage } = props;
  const [favorites, setFavorites] = useState(
    new Set(storage.get("favorites") || [])
  );

  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (!weather.city && !weather.error) searchWeather(city);
    
    storage.set("favorites", [...favorites.values()]);
  });

  async function searchWeather(city) {
    getWeather(city).then(setWeather);
  }

  function isFavorite(city) {
    return favorites.has(city);
  }

  function changeFavorite(city) {
    const list = new Set(favorites);
    list.delete(city);

    setFavorites(isFavorite(city) ? list : new Set(favorites).add(city));
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
              liked={isFavorite(weather.city)}
              onLike={changeFavorite}
              storage={storage}
            />
            <NamedList
              title="Added Locations:"
              list={[...favorites.values()].map((city, index) => (
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

//recommit

export default App;