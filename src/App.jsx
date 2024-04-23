import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer'
import NavbarBootstrap from './components/NavbarBootstrap'
import ItemDetailContainer from './pages/ItemDetailContainer';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => setProducts(data))
  };

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
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
