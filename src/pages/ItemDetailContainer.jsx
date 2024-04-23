import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Loader from "../components/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  });

  const { description, image, price, title } = product || {};
  
  return (
    <div className="container mt-5">
      <Button variant="dark" onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
      </Button>
      {product ? (
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img src={image} alt={title} className="img-fluid" />
          </div>
          <div className="col-md-4">
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="font-weight-bold"><b>${price}</b></p>
            <Button variant="success">Add to Cart <TiShoppingCart /></Button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ItemDetailContainer;
