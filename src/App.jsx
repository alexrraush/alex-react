import { BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const onAdd = cant => {
  console.log('cantidad seleccionada: ', cant)
}
  

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer  greeting='Bienvenidos a la Tienda'/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer /> } />
        <Route path='/categoria/:cid' element={<ItemListContainer /> } />
       
       
        {/*<Route path='*' element={<Navigate to='/' />} />*/}
        {/*<Route path='/detail/:pid' element={<ItemDetaliContainer /> } />*/}
        {/*<Route paht='/item' element={<ItemDetailContainer/>} */}
        {/*<ItemCounter initial={1} stock={5} onAdd={onAdd}/> */}
      {/*<Titulo Titulo = {tituloApp}  /> */}
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
