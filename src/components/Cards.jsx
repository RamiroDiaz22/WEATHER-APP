import React from 'react';
import './Cards.css'
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities.length){
    return (
      <div className="contenido-cards">
        {cities.map(c => <Card
            id={c.id} // este id se lo pone para que se lo pueda concatenar con la URL en el Link del titulo de Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            humidity={c.humidity}
            wind={c.wind}
            pressure={c.pressure}
            feels_like={c.feels_like}
            onClose={() => onClose(c.id)}
          /> )}
      </div>
    );
  } else{
    return <div>
      <p className='home-cards'>You must enter a city...</p>
    </div>
  }
}
