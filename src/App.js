import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from "./components/ItemList/NavBar"
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CartContext from "./contexts/CartContext";
import Cart from "./components/ItemList/Cart"
import Cover from './components/ItemList/Cover/Cover';
import Footer from './components/ItemList/Footer/Footer';

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Cover />
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
          <Footer/>
        </BrowserRouter>
      </CartContext>
    </>
  );
}


export default App; 

