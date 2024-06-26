import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

function ItemCard({ productData }) {
  const { id, image, price, title } = productData;

  return (
    <Card className='m-3 shadow overflow-hidden' style={{ border: 'none' }}>
      <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
        <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
          <Card.Img variant="top" src={image} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
        </div>
      </Link>
      <Card.Body>
        <Card.Title style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</Card.Title>
        <Card.Text><b>${price}</b></Card.Text>
        <CartButton productData={productData} />
      </Card.Body>
    </Card>
  );
};

export default ItemCard;