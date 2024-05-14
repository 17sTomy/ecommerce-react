import { useContext } from "react";
import Card from 'react-bootstrap/Card';
import CartContext from "../context/CartContext";
import CartButton from "../components/CartButton";

export default function CheckoutProducts() {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => (
        <>
          <div key={item.id} className="d-flex align-items-center">
            <div style={{ marginRight: '10px' }}>
              <Card.Img variant="top" src={item.image} style={{ objectFit: 'contain', width: '100px', height: '100px' }} />
            </div>
            <div>
              <p><b>{item.title}</b></p>
              <p><b>${item.price}</b> x{item.quantity}</p>
              <CartButton productData={item} />
            </div>
          </div>
          <hr />
        </>
      ))}
    </>
  );
};