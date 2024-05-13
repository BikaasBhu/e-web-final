
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Home'
import AddProductForSell from './Components/AddProductForSell'
import Products from './Components/Products'
import Signup from './Components/Signup'
import Cart from './Components/Cart'
import ProductDetail from './Components/ProductDetail'
import Catogery from './Components/Catogery'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sellProduct' element={<AddProductForSell />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/catogery/:catogeryname' element={<Catogery />} />

        <Route path='/detail/:id' element={<ProductDetail />} />
      </Routes>
      {/* <Navbar />
      <Cart /> */}
    </>
  )
}

export default App
