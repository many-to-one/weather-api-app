import './App.css';
import { useState } from 'react';
import {API_URL, apiOptions} from './components/Api';


function App() {

  const [search, setSearch] = useState('');

  const [weather, setWeather] = useState({})

  const searchPressed = () => {
    console.log('search pressed')
    fetch(`${API_URL}${search}`, apiOptions)
    .then(response => response.json())
	  .then(response => {
      setWeather(response)
    })
	  .catch(err => console.error(err));
  }; 

  return (
    <div className="App">

      <div className='main-container'>

        {/* HEADER */}

      <div className='header'>
        Weather - App
      </div>

      {/* SEARCH-BOX */}
      
      <div className='search-section'>
        <input 
          type='text' 
          placeholder='Search...'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>

      {/* LOCATION */}
      <p>{weather.location.name}, {weather.location.country}</p>

      {/* TEMPERATURE */}
      <p>{weather.current.temp_c}°C</p>

      {/* CONDITION-SUNNY */}
      <p>{weather.current.cloud}</p>

      </div>

    </div>
  );
}

export default App;
