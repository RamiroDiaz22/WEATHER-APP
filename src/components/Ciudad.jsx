import React from "react";
import './Ciudad.css'

export default function Ciudad({city}) {
    return (
        <div className="fondo-ciudad fondo-duplicado">
                <div className="contenedor-ciudad contenedor-duplicado">
                    <h2 className="title-ciudad">{city.name}</h2>
                    <div className="info-ciudad">
                        <div>Temperature: {city.temp - 273} ºC</div>
                        <div>Climate: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Length: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}