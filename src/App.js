import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from "./components/ItemList/NavBar"
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Cart from "./components/ItemList/Cart"
import CartProvider from "./contexts/CartContext";


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={
                <div style={{ backgroundColor: "red" }}>
                  {" "}
                  ERROR 404 NOT FOUND
                </div>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </>
  );
}


export default App; 

