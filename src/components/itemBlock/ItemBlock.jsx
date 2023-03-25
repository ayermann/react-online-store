import '../../scss/components/ItemBlock.scss';
import React from 'react';
function ItemBlock({ title, price, info, category, imgSrc }) {
  const categoriesOfItems = ['All', 'PC', 'Phones', 'Devices', 'Laptops', 'Others'];
  return (
    <div className="item-block">
      <img className="item-block__image" src={imgSrc} alt="item" width={150} />
      <h4 className="item-block__title">{title}</h4>
      <div className="item__info">
        <div className="item-category">
          <strong>Category: </strong>
          {categoriesOfItems[category]}
        </div>
        {info}
      </div>
      <div className="item-block__bottom">
        <div className="item-block__price">{price} $</div>
        <div className="button button--outline button--add">
          <span>+ Add</span>
          <i>0</i>
        </div>
      </div>
    </div>
  );
}

export default ItemBlock;
