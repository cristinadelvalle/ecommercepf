import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig/config"

export const Checkout = () => {
    const [pedidosId, setPedidos] = useState("")
    const { carrito, precioTotal, limpiarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm()
    const comprar = (data) => {
        const pedido = {
            ciente: data,
            carrito: carrito,
            total: precioTotal()

        }
        console.log(pedido);

        const pedidoRef = collection(db, "pedidos")
        addDoc(pedidoRef, pedido)
            .then((doc) => {
                setPedidos(doc.id);
                limpiarCarrito()
            })
    }
    if (pedidosId) {
        return (
            <div>
                <h3>Compra exitosa. Tu id de pedido es:
                    {pedidosId} </h3>

            </div>
            )

    }

    return (
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Nombre" {...register("nombre")} />
                <input type="email" placeholder="Email"{...register("email")} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}