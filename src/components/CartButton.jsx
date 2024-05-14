import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import CartContext from '../context/CartContext';
 
export default function CartButton({ productData }) {
  const { addToCart, removeOneFromCart, cart } = useContext(CartContext);

  const quantityInCart = cart.find(item => item.id === productData.id)?.quantity || 0;

  return (
    <>
      {quantityInCart > 0 ? (
        <>
          <Button onClick={() => addToCart(productData)} variant="success" size="sm" style={{ marginRight: '10px' }}><IoMdAdd style={{ marginBottom: '3.5px' }} /></Button>
          <span><b>{quantityInCart}</b></span>
          <Button onClick={() => removeOneFromCart(productData)} variant="danger" size="sm" style={{ marginLeft: '10px' }}><IoMdRemove style={{ marginBottom: '3.5px' }} /></Button>
        </>
      ) : (
        <Button variant="success" onClick={() => addToCart(productData)}>Add to Cart <TiShoppingCart /></Button>
      )}
    </>
  );
};