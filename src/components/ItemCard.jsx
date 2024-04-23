import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { Link } from 'react-router-dom';

function ItemCard({ productData }) {
  const { id, image, price, title } = productData;

  return (
    <Card className='m-3'>
      <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
        <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
          <Card.Img variant="top" src={image} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </div>
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="success"><IoMdAdd /></Button>
        <span>0</span>
        <Button variant="danger"><IoMdRemove /></Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;