import { FaCartShopping } from "react-icons/fa6";
import '../styles/cartWidget.css'

export default function CartWidget() {
  return (
    <div>
      <FaCartShopping className="cart-icon" />
      <span className="badge">3</span>
    </div>
  );
};