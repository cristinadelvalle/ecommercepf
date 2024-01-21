import "../../components/ItemCount/ItemCount.css"

export const ItemCount = ({cantidad, handleAgregar, handleRestar, handleSumar})=>{

    return(
        <div className="cardItem">
            <div>
            <button className="btn-restar" onClick={handleRestar}>-</button>
            <p>{cantidad} </p> 
            <button className="btn-sumar" onClick={handleSumar}>+</button>
            </div>
            <button className="btn-agregarCarrito" onClick={handleAgregar}>Agregar al carrito</button>

        </div>
    )
}