import './App.css';
import { useState } from 'react';
import {API_URL, apiOptions} from './components/Api';
import {AiOutlineSearch} from 'react-icons/ai'


function App() {

  const [search, setSearch] = useState('');

  const [weather, setWeather] = useState({})

  const searchPressed = () => {
    console.log('search pressed')

    // fetch(`${API_URL}${search}`, apiOptions)
	  // .then(response => response.json())
	  // .then(response => console.log(response))
	  // .catch(err => console.error(err));

    fetch(`${API_URL}${search}&days=3`, apiOptions)
    .then(response => response.json())
	  .then(response => {
      setWeather(response)
    })
    .catch(err => console.error(err));
  }; 

  return (

    <div className="App">

      <div className='top'>

        <div className='title'>Weather</div>

        <div className='search'>

          <input 
            className='input'
            placeholder='Search...'
            onChange={(e) => {setSearch(e.target.value)}}
          />
           <button className='btn' onClick={searchPressed}><AiOutlineSearch color='white' size={20}/></button>

        </div>

      </div>

      {/* <p>{weather.location.name}</p> */}

       <div className='location'>
        <p>{weather.location.name}, {weather.location.country}</p>
      </div>

      <div className='temp'>
        <p>{weather.current.temp_c}°C</p>
      </div>

      <div className='bottom'>

        <div className='discription'>
          <span className='index'>Local time</span>
          <span className='value'>{weather.location.localtime} </span>
        <div/>  

        <div className='discription'>  
          <span className='index'>Feels like</span>
          <span className='value'>{weather.current.feelslike_c}</span>
        </div>

        <div className='discription'>   
          <span className='index'>Wind</span>
          <span className='value'>{weather.current.wind_mph}</span>
        </div>

        <div className='discription'> 
          <span className='index'>Cloud</span>
          <span className='value'>{weather.current.cloud}</span>
        </div>

      </div>

      </div> 

    </div>

  );
}

export default App;
