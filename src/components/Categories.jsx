import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useCategories } from '../hooks/useCategories';

function Categories() {
  const [radioValue, setRadioValue] = useState(null);
  const { categories, isLoading } = useCategories();

  return (
    <>
      <ButtonGroup className='container justify-content-center mb-2'>
        {isLoading ? null : (
          <Link to={`/`}>
            <ToggleButton
              className='mt-3 m-1'
              type="radio"
              style={{
                backgroundColor:"#8B69C7",
                border: "none"
              }}
            >
            All
            </ToggleButton>
          </Link>
        )}
        {categories.map((category) => (
          <Link key={category.value} to={`/category/${category.value}`}>
            <ToggleButton
              className='mt-3 m-1'
              type="radio"
              name="radio"
              value={category.value}
              checked={radioValue === category.value}
              onChange={() => setRadioValue(category.value)}
              style={{
                backgroundColor:"#8B69C7",
                border: "none"
              }}
            >
            {category.name}
            </ToggleButton>
          </Link>
        ))}
      </ButtonGroup>
    </>
  );
}

export default Categories;