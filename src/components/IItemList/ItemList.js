import "../../components/IItemList/ItemList.css"
import { Item } from "../Item/Item"

export const ItemList = ({ productos, titulo }) => {
    return (
        <div className="contenedor">
            {/* <h1>{titulo}</h1> */}
         
             { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    )
}


//revisar carrito img