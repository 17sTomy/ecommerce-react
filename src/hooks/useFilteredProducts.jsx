import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useFilteredProducts = (initialProducts) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [searchInput, setSearchInput] = useState("");

  const { id } = useParams(); 

  const categories = ["men's clothing", "women's clothing", "electronics", "jewelery"];
  
  useEffect(() => {
    let newFilteredProducts = initialProducts;

    if (id !== undefined) {
      newFilteredProducts = newFilteredProducts.filter(product => product.category === categories[parseInt(id) - 1]);
    };

    if (searchInput.trim() !== "") {
      newFilteredProducts = newFilteredProducts.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase()));
    };

    setFilteredProducts(newFilteredProducts);
  }, [searchInput, id, initialProducts]);

  return { filteredProducts, setSearchInput };
};
