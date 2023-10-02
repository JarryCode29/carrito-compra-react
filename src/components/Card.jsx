import { useState } from "react";
import "../styles/card.css"

export const Card = ({ imagen, titulo, descripcion, precio, handelAgregar, handleQuitar, handleAumetar, handleDisminuir }) => {
  const [added, setAdded] = useState(false);
  const clickAgregar = () =>{
    handelAgregar()
    setAdded(true)
  }
  const clickQuitar = () =>{
    handleQuitar()
    setAdded(false)
  }
  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>
      {added 
      
      ? <button 
          onClick={clickQuitar} 
          type="button" 
          className="boton-quitar"
          >
          Quital del Carrito
        </button>
       : 
          <button 
          onClick={clickAgregar} 
          type="button" 
          className="boton-agregar"
          >
          Agregar del Carrito
        </button>
      }
      </div>
    </div>
  );
};
