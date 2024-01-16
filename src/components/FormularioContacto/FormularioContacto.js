import { useForm } from "react-hook-form"


export const Contacto = ()=>{
    const { register, handleSubmit } = useForm()
    const enviar = (data)=>{
        console.log(data);
    }


    return(
        <div>
            <form onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Nombre" {...register("nombre")} />
                <input type="email" placeholder="Email"{...register("email")}  /> 
                <button type="submit">Enviar</button>          
             </form>
        </div>
    )
}