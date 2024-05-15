import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import CartContext from '../context/CartContext';
import '../styles/CartWidget.css';

export default function CartWidget() {
  const { itemsInCart } = useContext(CartContext);

  return (
    <Link to={"/checkout"}>
      <div>
        <FaCartShopping className="cart-icon" />
        <span className="badge">{itemsInCart}</span>
      </div>
    </Link>
  );
};