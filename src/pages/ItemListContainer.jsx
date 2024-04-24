import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Search from "../components/Search";

export default function ItemListContainer({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchInput, setSearchInput] = useState("");

  const { id } = useParams();
  
  const categories = ["men's clothing", "women's clothing", "electronics", "jewelery"];
  
  useEffect(() => {
    let newFilteredProducts = products;
    
    if (id !== undefined) {
      newFilteredProducts = products ? products.filter(product => product.category === categories[parseInt(id) - 1]) : [];
    };
    
    newFilteredProducts = searchInput.trim() !== "" 
      ? newFilteredProducts.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase())) 
      : newFilteredProducts;

    setFilteredProducts(newFilteredProducts);
  }, [searchInput, id, products])

  return (
    <div className="container">
      <Search setSearchInput={setSearchInput} />
      <Categories />
      <div className="row justify-content-center text-center">
        {filteredProducts.length === 0 ? (
          <div className="text-center">
            <h4 className="mt-4">No se encontraron productos...😭</h4>
          </div>
        ) : (
          <div className="row justify-content-center text-center">
            {filteredProducts.map((prod, index) => (
              <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <ItemCard productData={prod} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
