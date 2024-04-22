import ItemDetailContainer from "./ItemDetailContainer";
import Categories from "./Categories";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

export default function ItemListContainer({ products }) {
  const { id } = useParams();

  const categories = ["men's clothing", "women's clothing", "electronics", "jewelery"];

  let filteredProducts = products;

  if (id !== undefined) {
    filteredProducts = products ? products.filter(product => product.category === categories[parseInt(id) - 1]) : [];
  };

  return (
    <div className="container">
      <Categories />
      <div className="row justify-content-center text-center">
        {filteredProducts && filteredProducts.map((prod, index) => (
          <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <ItemCard productData={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};