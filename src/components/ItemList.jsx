import ItemCard from "./ItemCard";

export default function ItemList({ products }) {
  return (
    <>
      {products.map((prod, index) => (
        <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <ItemCard productData={prod} />
        </div>
      ))}
    </>
  );
};