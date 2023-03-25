import '../scss/components/Categories.scss';
import React from 'react';
function Categories({ value, onChangeCategory }) {
  const categories = ['All', 'PC', 'Phones', 'Devices', 'Laptops', 'Others'];
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
