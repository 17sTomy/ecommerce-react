import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import CheckoutProducts from "../components/CheckoutProducts";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout() {
  const { calculateTotal, clearCart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row" style={{ width: "100%" }}>
        <div className="d-flex flex-column" style={{ width: "100%" }}>
          <h2 className="mt-3 mb-4">Total: ${calculateTotal().toFixed(2)}</h2>
          {calculateTotal() > 0 ? (
            <Button onClick={clearCart}  className='mb-4 custom-button-clear-cart' type="submit">Clear Cart<MdDelete className="mb-1 mx-2" /></Button>
          ) : (
            <Link to={"/"}><Button className='mb-4 custom-button' type="submit">Shop Now<FaShoppingBag className="mb-1 mx-2" /></Button></Link>
          )}
          <CheckoutProducts />
        </div>
        <div className="d-flex flex-column mt-md-5 mx-md-5" style={{ width: "100%" }}>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};