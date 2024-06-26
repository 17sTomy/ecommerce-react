import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer'
import NavbarBootstrap from './components/NavbarBootstrap'
import ItemDetailContainer from './pages/ItemDetailContainer';
import NotFound from './pages/NotFound';
import { useProducts } from './hooks/useProducts';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout';

function App() {
  const { products, isLoading } = useProducts();
  const memoizedProducts = useMemo(() => products, [products]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarBootstrap />
        <Routes>
          <Route path='/' element={<ItemListContainer products={memoizedProducts} isLoading={isLoading} />} />
          <Route path='/category/:id' element={<ItemListContainer products={memoizedProducts} isLoading={isLoading} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
