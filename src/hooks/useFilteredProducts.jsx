import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCategories } from './useCategories';

export const useFilteredProducts = (initialProducts) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [searchInput, setSearchInput] = useState("");
  const { categories, isLoading } = useCategories();

  const { id } = useParams(); 
  
  useEffect(() => {
    let newFilteredProducts = initialProducts;

    if (!isLoading && id !== undefined && categories.length > 0) { 
      const category = categories.find(category => category.value == id);
      const categoryName = (category.name).toLowerCase();
      newFilteredProducts = newFilteredProducts.filter(product => product.category === categoryName);
    };

    if (searchInput.trim() !== "") {
      newFilteredProducts = newFilteredProducts.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase()));
    };

    setFilteredProducts(newFilteredProducts);
  }, [searchInput, id, initialProducts]);

  return { filteredProducts, setSearchInput };
};
