import Categories from '../components/Categories';
import ItemBlock from '../components/itemBlock/ItemBlock';
import Sort from '../components/Sort';
import ItemSkeleton from '../components/itemBlock/ItemSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';

import React from 'react';
import { SearchContext } from '../App';
import '../scss/App.scss';
import Pagination from '../components/pagination';
import axios from 'axios';

const Home = () => {
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const sortId = sort.sortProperty;
  /* console.table(categoryId); */
  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearchContext);
  const [isLoading, setIsLoading] = React.useState(true);
  /*   const [currentPage, setCurrentPage] = React.useState(1); */
  const [items, setItems] = React.useState([]);

  const onChangeCategory = (id) => {
    /*  console.log(id); */
    dispatch(setCategoryId(id));
  };

  //https://6402550d302b5d671c389c9f.mockapi.io/items
  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortId.replace('-', '');
    const order = sortId.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const search = searchValue ? `&search=${searchValue}` : ``;

    /* fetch(
      `https://6402550d302b5d671c389c9f.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      }); */
    axios
      .get(
        `https://6402550d302b5d671c389c9f.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
        {
        }
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortId, searchValue, currentPage]);
  const itemsAssets = items.map((obj) => <ItemBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, i) => <ItemSkeleton key={i} />);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      <div className="sort-conteiner">
        <Categories value={categoryId} onChangeCategory={(i) => onChangeCategory(i)} />
        <Sort />
      </div>
      <div className="items-title">All items</div>
      <div className="items">{isLoading ? skeletons : itemsAssets}</div>
      <Pagination onChangePage={onChangePage} currentPage={currentPage} />
    </>
  );
};
export default Home;
