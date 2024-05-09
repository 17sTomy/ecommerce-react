import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchProduct = async () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      })
  };
  
  useEffect(() => {
    fetchProduct();
  }, []);

  return { product };
};