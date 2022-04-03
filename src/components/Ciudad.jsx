import React from "react";
import './Ciudad.css'

export default function Ciudad({city}) {
    return (
        <div className="fondo-ciudad fondo-duplicado">
                <div className="contenedor-ciudad contenedor-duplicado">
                    <h2 className="title-ciudad">{city.name}</h2>
                    <div className="info-ciudad">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}