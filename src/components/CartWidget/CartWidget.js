import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CartWidget =()=>{
    const {productosEnElCarrito} =useContext(CartContext)
    return(
        <div>
        <Link to="/carrito">Carrito <span>{productosEnElCarrito()} </span>
       </Link>   
        </div>
    )
}