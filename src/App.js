import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {

  return (
  
  <>
  <NavBar/>
  <ItemListContainer greeting={"Bienvenidos"}/>
  <ItemCount/>
  </>
  )

}

export default App; 

