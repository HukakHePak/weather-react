import './App.css';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { NotificationMessage } from '../components/NotificationMessage/NotificationMessage';
import { NamedList } from '../components/NamedList/NamedList';
import { ClosinSelectItem } from './ClosinSelectItem/ClosinSelectItem';
import { getWeather } from '../modules/api/api';
import { useEffect, useState } from 'react';
import { WeatherDisplay } from './WeatherDisplay/WeatherDisplay';

function App() {
  const [favorites, setFavorites] = useState(new Set());
  const [weather, setWeather] = useState({}); // make default weather
  const [notify, setNotify] = useState([]);

  
  // useEffect(() => {
  //   console.log(favorites);
  // })


  async function searchWeatherHandler(city) {
    if(!city) {
      setNotify(['Write city!', true]);
      return;
    }

    try {
      const newWeather = await getWeather(city);
      newWeather.liked = isFavorite(city);

      setWeather(newWeather);
      setNotify(['', false]);
    }
    catch(error) {
      console.error(error);
      setNotify(['Unknown city', true]);
    }
  }

  function isFavorite(city) {
    return favorites.has(city);
  }

  function createFavoriteItem(city, index) {
    return (
      <ClosinSelectItem
        key={index}
        value={city}
        onOpen={ searchWeatherHandler }
        onClose={ removeFavorite }
      />
    );
  }

  function removeFavorite(city) {
    const newList = new Set(favorites);
    newList.delete(city);

    if(weather.city === city) weather.liked = false;

    setFavorites(newList);
  }

  function addFavorite() {
    const { liked, city } = weather;

    weather.liked = !liked;

    if(liked) {
      removeFavorite(city);
    } else {
      setFavorites(new Set(favorites).add(city));
    }
  }

  return (
    <div className="App">
      <main>
        <div className="weather">
          <SearchBar onSubmit={searchWeatherHandler} />
          <NotificationMessage value={notify[0]} active={notify[1]} />

          <div className="weather__inner">
            <WeatherDisplay
              weather={weather}
              onLike={ addFavorite }
              open={{ now: true }}
            />
            <NamedList
              title="Added Locations:"
              list={
                [...favorites.values()].map(createFavoriteItem)
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;