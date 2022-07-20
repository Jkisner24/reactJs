import './App.css';
import Item from './components/ItemList/Item';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from "./components/ItemList/NavBar"
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index ="/" element={<ItemListContainer/>}/>
        <Route path="/category/:name" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route 
          path="*"
          element={
            <div style={{backgroundColor: "red"}}> Error 404 NOT FOUND </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </>
  );

}

export default App; 

