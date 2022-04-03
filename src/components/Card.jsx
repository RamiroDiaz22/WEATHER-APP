import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import { WiStrongWind, WiThermometer,  WiBarometer } from "react-icons/wi";

export default function Card (props) {



    return (
      <div>
        <div className="fondo-card fondo-duplicado">
          <div className="contenedor-card contenedor-duplicado">
            <div>
                <button onClick={props.onClose} className="btn-card">X</button>
            </div>
            <div className='rami-card'>
              <h5 className="titulo-card">{props.name}</h5>
              <div>
              <div className="contenido-card">
                <div className="datos-card">
                  <p className="text-card">Max</p>
                  <p className="valor-card">{props.max - 273}°</p>
                </div>
                <div className="datos-card">
                  <p className="text-card">Min</p>
                  <p className="valor-card">{props.min - 273}°</p>
                </div>
                </div>
                <div className='contenedor-img-logos-card'>
                  <div>
                    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" className='img-card'/>
                  </div>
                  <div className='logos-card'>
                      <div>
                        <p className='sT-card'>S.T {props.feels_like - 273}º</p>
                      </div>
                      <div>
                        <WiStrongWind className='logos-tamaño-card'/>
                        <p className='logos-valor-card'>{props.wind} m/s</p>
                      </div>
                    </div>
                    <div className='logos-card'>
                      <div>
                        <WiThermometer className='logos-tamaño-card'/>
                        <p className='logos-valor-card'>{props.pressure} hPa</p>
                      </div>
                      <div>
                        <WiBarometer className='logos-tamaño-card'/>
                        <p className='logos-valor-card'>{props.humidity}%</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detalle-card">
            <Link to={`/ciudad/${props.id}`} >
              <p >Detalle</p>
            </Link>
            </div>
          </div>
        </div>
    );
};
