import { useContext } from "react";
import Card from 'react-bootstrap/Card';
import CartContext from "../context/CartContext";
import CartButton from "../components/CartButton";
import { MdDelete } from "react-icons/md";
import "../styles/Checkout.css";

export default function CheckoutProducts() {
  const { cart, removeAllFromCart } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="checkout-product">
          <div className="d-flex align-items-center">
            <div style={{ marginRight: '10px' }}>
              <Card.Img className="shadow" variant="top" src={item.image} style={{ width: '70px', borderRadius: "10px", objectFit: "contain" }} />
            </div>
            <div>
              <p><b>{item.title}</b></p>
              <p><b>${item.price}</b> x{item.quantity}</p>
              <CartButton productData={item} />
            </div>
          </div>
          <MdDelete className="delete-icon" onClick={() => removeAllFromCart(item)} />
          <hr />
        </div>
      ))}
    </>
  );
};
