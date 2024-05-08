import Categories from "../components/Categories";
import Search from "../components/Search";
import ItemList from "../components/ItemList";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

export default function ItemListContainer({ products }) {
  const { filteredProducts, setSearchInput } = useFilteredProducts(products);

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
            <ItemList products={filteredProducts} />
          </div>
        )}
      </div>
    </div>
  );
};
