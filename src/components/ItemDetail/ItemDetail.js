import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"


export const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext)
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }


    return (
        <div>
            <div>
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h2>{item.titulo} </h2>
                    <p>Descripción:{item.descripcion} </p>
                    <p>Categoría:{item.categoria} </p>
                    <p>$ {item.precio} </p>
                    <ItemCount cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={()=>{agregarAlCarrito(item, cantidad)}} />
                </div>
            </div>
        </div>
    )
}