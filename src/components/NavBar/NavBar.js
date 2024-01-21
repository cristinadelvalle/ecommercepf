import "../NavBar/NavBar.css";

import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";



export const NavBar = ()=>{
    return(
        <div className="navBar">
        <nav >
            <Link to="/"><h1>Ecommerce</h1></Link>
            <ul>
                <li><Link  to= "/">Tienda</Link></li>
                <li> <Link  to="/productos/men">Men</Link></li>
                <li> <Link  to="/productos/women">Women</Link> </li>
                <li> <Link to="/productos/electronics">Electronics</Link></li>
                <li> <Link to="/contacto">Contacto</Link></li>
                <CartWidget/>         
             </ul>
        </nav>
        </div>
    )
}