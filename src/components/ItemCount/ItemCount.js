

export const ItemCount = ({cantidad, handleAgregar, handleRestar, handleSumar})=>{

    return(
        <div>
            <div>
            <button className="restar" onClick={handleRestar}>-</button>
            <p>{cantidad} </p> 
            <button onClick={handleSumar}>+</button>
            </div>
            <button className="sumar" onClick={handleAgregar}>Agregar al carrito</button>

        </div>
    )
}