import './App.css';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { NotificationMessage } from '../components/NotificationMessage/NotificationMessage';
import { NamedList } from '../components/NamedList/NamedList';
import { ClosinItem } from '../components/ClosinItem/ClosinItem';
import { SelectButton } from './SelectButton/SelectButton';
import { getWeather } from '../modules/api/api';
import { SimplyTab } from './WeatherTab/SimplyTab/SimplyTab';
import { useState } from 'react';
import { FullTab } from './WeatherTab/FullTab/FullTab';
import { ForecastTab } from './WeatherTab/ForecastTab/ForecastTab';

function App() {
  const [favorites, setFavorites] = useState(new Set());
  const [weather, setWeather] = useState({forecast:[{}]});
  const [activeTab, setTab] = useState();

  let error = undefined;
  

  async function searchSubmitHandler(city) {
    try {
      const newWeather = await getWeather(city);
 
      newWeather.liked = city === favorites.has(city);
      setWeather(newWeather);
    }
    catch(err) {
      error = <NotificationMessage value="fetch was crashed" />
      console.log(err)
    }
  }

  function createFavoriteItem(city, index) {
    return (
      <ClosinItem
        key={index}
        value={city}
        onClick={() => removeFavorite(city)}
      />
    );
  }

  function removeFavorite(city) {
    const newList = favorites;
    newList.delete(city);

    setFavorites(newList);
  }

  return (
    <div className="App">
      <main>
        <div className="weather">
          <SearchBar onSubmit={searchSubmitHandler} />

          {error}

          <div className="weather__inner">
            <div className="weather__display">
              {activeTab}

              <div className="weather__switcher">
                <SelectButton
                  onClick={() =>
                    setTab(
                      <SimplyTab
                        weather={weather}
                        onLike={() =>
                          setFavorites(
                            weather.liked
                              ? new Set(favorites).add(weather.city)
                              : removeFavorite(weather.city)
                          )
                        }
                      />
                    )
                  }
                />
                <SelectButton
                  onClick={() => setTab(<FullTab weather={weather} />)}
                />
                <SelectButton
                  onClick={() =>
                    setTab(<ForecastTab forecast={weather.forecast} />)
                  }
                />
              </div>
            </div>
            <NamedList
              title="Added Locations:"
              list={[...favorites.values()].map(createFavoriteItem)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;