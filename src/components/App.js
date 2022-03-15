import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="weather">
          <SearchBar />
          <NotificationMessage />
          <div className="weather__inner">
            <div className="weather__display">
              { tabs }

              <div className="weather__switcher">
                { buttons }
              </div>
            </div>
            <NamedList />
          </div>         
        </div>
      </main>
    </div>
  );
}

export default App;
