import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const Cart =  ()=>{

    const {carrito, precioTotal, limpiarCarrito}= useContext(CartContext)

    const handleLimpiarCarrito = ()=>{
    limpiarCarrito()
    }
    
    return(

        <div>
            <h1>Carrito</h1>
            {
                carrito.map((prod)=> (
                    <div className="cart" key={prod.id}>
                        <hr/>
                    <h2>{prod.titulo} </h2>
                    <p>Cantidad:{prod.cantidad} </p>
                    <p>Subtotal: ${prod.precio} </p>
                    <p>Total: ${prod.precio * prod.cantidad} </p>
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
               <div>
                 <h1>Total: ${precioTotal()}</h1>
                 <button onClick={handleLimpiarCarrito}>Limpiar carrito</button>
                 <Link to="/checkout"> Finalizar compra</Link>
                 </div> : <h2>Carrito vacio</h2>
            }

        </div>
    )
}