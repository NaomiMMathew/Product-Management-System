import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
 import ProductList from './components/ProductList'
 
import Home from './components/Home'
import AboutUs from './components/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/productlist" element={<ProductList/>}/>

<Route path="/aboutus" element={<AboutUs/>}/>




</Routes>
</BrowserRouter>
    </>
  )
}

export default App
