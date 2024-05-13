import { useEffect } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    storedCart ? setCart(JSON.parse(storedCart)) : null;
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemInCartIndex = cart.findIndex(product => product.id === item.id);
    
    if (itemInCartIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemInCartIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    };
    console.log(cart);
  };

  const removeOneFromCart = (item) => {
    const updatedCart = [...cart];
    const itemInCartIndex = cart.findIndex(product => product.id === item.id);

    if (itemInCartIndex !== -1) {
      if (updatedCart[itemInCartIndex].quantity > 1) {
        updatedCart[itemInCartIndex].quantity -= 1;
      } else {
        updatedCart.splice(itemInCartIndex, 1);
      };
      setCart(updatedCart);
    };
    console.log(cart);
  };

  const removeAllFromCart = (item) => {
    const updatedCart = cart.filter(product => product.id !== item.id);
    setCart(updatedCart);
  };

  const clearCart = () => setCart([]);

  const buyProducts = () => {};

  const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const data = {
    cart,
    itemsInCart,
    addToCart,
    removeOneFromCart,
    removeAllFromCart,
    clearCart,
    buyProducts,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
};

export { CartProvider };
export default CartContext;
