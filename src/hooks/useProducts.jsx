import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading };
};