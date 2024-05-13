import { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import '../styles/CartWidget.css'
import CartContext from '../context/CartContext';

export default function CartWidget() {
  const { itemsInCart } = useContext(CartContext);

  return (
    <div>
      <FaCartShopping className="cart-icon" />
      <span className="badge">{itemsInCart}</span>
    </div>
  );
};