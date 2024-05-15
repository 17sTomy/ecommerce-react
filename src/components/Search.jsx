import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoSearch } from "react-icons/io5";
import "../styles/Search.css"

export default function Search({ setSearchInput }) {
  return (
    <div className='container mt-4 wrapper' style={{ width: "50%" }}>
      <InputGroup className="mb-2">
        <InputGroup.Text id="basic-addon1"><IoSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Search..."
          aria-describedby="basic-addon1"
          className='custom-input'
          onChange={(e)=> setSearchInput(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}