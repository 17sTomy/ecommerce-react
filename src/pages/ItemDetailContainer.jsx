import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Loader from "../components/Loader";
import ItemDetail from "../components/ItemDetail";
import { useProduct } from "../hooks/useProduct";

function ItemDetailContainer() {
  const { product } = useProduct();
  const navigate = useNavigate();
  
  return (
    <div className="container mt-3 mb-4">
      <Button variant="dark" onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
      </Button>
      {product ? (
        <ItemDetail productData={product} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ItemDetailContainer;
