import CartButton from './CartButton';

export default function ItemDetail({ productData }) {
  const { description, image, price, title } = productData;

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-md-4 m-2">
        <img src={image} alt={title} className="img-fluid shadow" style={{ maxWidth: "100%", borderRadius: "10px" }} />
      </div>
      <div className="col-md-4">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4 className="font-weight-bold"><b>${price}</b></h4>
        <CartButton productData={productData} />
      </div>
    </div>
  );
};
