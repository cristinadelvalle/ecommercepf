import { Contacto } from "./components/FormularioContacto/FormularioContacto";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
 import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import { Checkout } from "./components/Checckout/Checkout";


function App() {

  return (
    <div> 
      <CartProvider>
      <BrowserRouter>
        <NavBar/>

        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/productos" element={<ItemListContainer/>} />
          <Route path="/productos/:categoria" element={<ItemListContainer/>} />
          <Route path="/contacto" element={<Contacto/>} /> 
          <Route path="/carrito" element={<Cart/>} /> 
          <Route path="/checkout" element={<Checkout/>} /> 


        </Routes>

       </BrowserRouter>
       </CartProvider>
    </div>
  );
}

export default App;
