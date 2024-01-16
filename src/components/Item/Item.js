import React from "react"
import { Link } from "react-router-dom"


export const Item = ({producto})=>{
    return (
        <div>
         <div className="item">
        <img src={producto.imagen} alt={producto.titulo} />
        <h2>{producto.titulo}</h2>
        <p>$ {producto.precio} </p>
        <p>{producto.descripcion} </p>
        <p>Categoria:{producto.categoria} </p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
       </div>
       </div>
    )
}