import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from "./components/ItemList/NavBar"
import Item from './components/ItemList/Item';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CartContext from "./contexts/CartContext";
import Cart from "./components/ItemList/Cart"

function App() {
  return (
    <>
      <CartContext>
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
      </CartContext>
    </>
  );
}


export default App; 

