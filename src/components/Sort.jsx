import '../scss/components/Sort.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: 'Alphabet (A - Z)', sortProperty: '-title' },
    { name: 'Alphabet (Z - A)', sortProperty: 'title' },
    { name: 'Price (low to hight)', sortProperty: '-price' },
    { name: 'Price (hight to low)', sortProperty: 'price' },
  ];
  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };
  return (
    <div className="sort">
      <div className="sort__label">
        <b>Sort by:</b>
        <span
          onClick={() => {
            setOpen(!open);
          }}
        >
          {sort.name}
        </span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
