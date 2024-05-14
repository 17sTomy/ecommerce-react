import { useContext } from "react";
import CartContext from "../context/CartContext";
import CheckoutProducts from "../components/CheckoutProducts";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout() {
  const { calculateTotal } = useContext(CartContext);

  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row" style={{ width: "100%" }}>
        <div className="d-flex flex-column" style={{ width: "100%" }}>
          <h2 className="mt-3 mb-4 mx-2">Cart - Total: ${calculateTotal().toFixed(2)}</h2>
          <CheckoutProducts />
        </div>
        <div className="d-flex flex-column mt-md-5 mx-md-5" style={{ width: "100%" }}>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};