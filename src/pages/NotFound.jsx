import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center' style={{ height: '40vh' }}>
      <h1 className='mb-5'>There is nothing here...</h1>
      <Button variant="dark" onClick={() => navigate('/')}>See more products</Button>
    </div>
  );
}