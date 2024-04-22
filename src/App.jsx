import { useEffect, useState, useMemo } from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'
import NavbarBootstrap from './components/NavbarBootstrap'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const memoizedProducts = useMemo(() => products, [products]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <BrowserRouter>
        <NavbarBootstrap />
        <Routes>
          <Route path='/' element={<ItemListContainer products={memoizedProducts} />} />
          <Route path='/category/:id' element={<ItemListContainer products={memoizedProducts} />} />
          <Route path='/item/:id' element={<ItemDetailContainer products={memoizedProducts} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
