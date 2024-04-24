import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Categories() {
  const [radioValue, setRadioValue] = useState(null);

  const radios = [
    { name: "Men's Clothing", value: "1" },
    { name: "Women's Clothing", value: "2" },
    { name: 'Electronics', value: '3' },
    { name: 'Jewelery', value: '4' },
  ];

  return (
    <>
      <ButtonGroup className='container justify-content-center mb-2'>
        {radios.map((radio, idx) => (
          <Link to={`/category/${(parseInt(idx) + 1).toString()}`}>
            <ToggleButton
              className='mt-3 m-1'
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              style={{
                backgroundColor:"#8B69C7",
                border: "none"
              }}
            >
            {radio.name}
            </ToggleButton>
          </Link>
        ))}
      </ButtonGroup>
    </>
  );
}

export default Categories;