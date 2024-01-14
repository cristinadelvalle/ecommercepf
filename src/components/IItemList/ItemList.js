import { Item } from "../Item/Item"

export const ItemList = ({ productos, titulo }) => {
    return (
        <div>
            <h1>{titulo} </h1>
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        <Item  key={producto.id} producto={producto} />
                    )
                })
            }
        </div>
    )
}