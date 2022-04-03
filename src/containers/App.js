import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad';

var apiKey = 'f8cac7d270f48e3ab1958a4e6fa968f7';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            feels_like: Math.round(recurso.main.feels_like),
            img: recurso.weather[0].icon,
            humidity: recurso.main.humidity,
            id: recurso.id,
            wind: recurso.wind.speed,
            pressure: recurso.main.pressure,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  };
  function dark(){
    let app = document.getElementById('App');
    if(app.classList.contains('dark-mode'))app.classList.remove('dark-mode');
    else app.classList.add('dark-mode');
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId)); // devuelve un array nuevo [] con los elementos que cumplan, en este caso, con la condicion de ser igual a "c.id"
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div id="App">
      <Route path={'/'} render={()=><Nav onSearch={onSearch} dark={dark}/>}/>
      <Route exact path={'/'} render={()=><Cards cities={cities} onClose={onClose}/>}/>
      <Route path={'/about'} render={()=><About/>}></Route>
      <Route path={'/ciudad/:ciudadId'} render={({match})=><Ciudad city={onFilter(match.params.ciudadId)} />}></Route>
      <hr />
    </div>
  );
}



export default App;
