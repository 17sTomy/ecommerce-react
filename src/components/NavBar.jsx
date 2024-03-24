import { SiBurgerking } from "react-icons/si";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <SiBurgerking />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};