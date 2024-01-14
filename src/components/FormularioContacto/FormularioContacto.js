import { useState } from "react";

export const Contacto = ()=>{

        const[valores, setValores]=useState({
         nombre:"",
         email: ""
        })

         const handleSubmit = (e)=>{
            e.preventDefault()
            console.log("Enviado", valores);
         }

         const handleValores= (e)=>{
            setValores({...valores, [e.target.name]: e.target.value})
          }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={valores.nombre} onChange={handleValores} name="nombre"/>
                <input type="email" placeholder="Email" value={valores.email} onChange={handleValores} name="email"/> 
                <button type="submit">Enviar</button>          
             </form>
        </div>
    )
}