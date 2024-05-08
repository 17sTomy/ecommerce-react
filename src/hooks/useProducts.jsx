import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => setProducts(data))
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};