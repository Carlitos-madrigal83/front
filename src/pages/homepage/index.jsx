import React from 'react';
import "./styles.scss";
import { useNavigate } from "react-router-dom"


export default function Homepage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/map-random");
  }
  return (
    <div className='homepage'>
        <div className='header'>
        <div className='header-img'><img src='https://phantom-elmundo.unidadeditorial.es/ab4f3bea186623c0f2187dd96a3dec5e/resize/746/f/webp/assets/multimedia/imagenes/2022/03/09/16468231897426.jpg'/>Esto es header-img</div>
        <div className='header-text'>
            <h1 className='header-h1'>¿Quieres hacer un viaje al azar por el mundo? ¡¡Dejate sorprender!!</h1>
            <h3 className='header-h3'>¿Te consideras una persona aventurera? Si es asi, no lo dudes y haz click más abajo. Nosotros te sugerimos destinos, vuelos, precios... No tienes que hacer nada más, solo... Disfrutar </h3>
            <button className='button' onClick={ handleClick }>¿Te atreves? Click me!</button>
        </div>
        </div>
    </div>
  )
}
