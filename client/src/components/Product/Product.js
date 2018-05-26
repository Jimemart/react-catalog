import React from 'react';
import './Product.css'

const product = (props) => {
  const style = {
    backgroundColor: props.phone.color
  }
  return (
      <div className="description">
        <div className="title">
          <h1>{props.phone.name}</h1>
          <p>{props.phone.brand}</p>
        </div>
        <div className="title">
          <h2>{props.phone.price}</h2>
          <div>
            <ul>
              <li>Sistema operativo: {props.phone.details.os}</li>
              <li>Tamaño: {props.phone.details.size} pulgadas</li>
              <li>Almacenamiento interno: {props.phone.details.memory}</li>
              <li>Resolución cámara: {props.phone.details.camera}</li>
              <li>Memoria RAM: {props.phone.details.ram}</li>
              <li>Conectividad: {props.phone.details.conectivity}</li>
            </ul>
          </div>
          <div className="colors">
            <div><h3>Color:</h3></div>
            <div className="color" style={style}></div>
          </div>
          <div className="button">
            <div>
              <button type="button" name="button"> Añadir</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default product
