import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { TiShoppingCart } from "react-icons/ti";
import Swal from 'sweetalert2'
import { useMakeOrder } from '../hooks/useMakeOrder';
import CartContext from '../context/CartContext';
import "../styles/Checkout.css";
  
function CheckoutForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({});
  const { cart, calculateTotal, clearCart } = useContext(CartContext);
  const { makeOrder } = useMakeOrder();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmptyCartError = () => {
    Swal.fire({
      title: "Error!",
      text: "The cart is empty",
      icon: "error"
    });
  };

  const handleOrderSuccess = () => {
    const orderData = {
      ...formData,
      total: calculateTotal(),
      cart
    };
    
    makeOrder(orderData);
    clearCart();
    navigate("/");

    Swal.fire({
      title: "Order Made!",
      text: "You will get an email soon",
      icon: "success"
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);

    const form = event.currentTarget;
    if (!form.checkValidity()) return event.stopPropagation();

    (cart.length < 1) ? handleEmptyCartError() : handleOrderSuccess();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            className='custom-input'
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a First name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            className='custom-input'
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a Last name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email" 
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              className='custom-input'
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text"
            placeholder="City" 
            required 
            className='custom-input' 
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="State" 
            required 
            className='custom-input'
            name="state"
            value={formData.state}
            onChange={handleChange} 
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Zip Code" 
            required 
            className='custom-input' 
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          className='custom-check'
        />
      </Form.Group>
      <Button className='mb-5 custom-button' type="submit">Make Order <TiShoppingCart className='mb-1' size={22} /></Button>
    </Form>
  );
}

export default CheckoutForm;