import styles from './Search.module.scss';
import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 350),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };
  /* console.log(inputRef); */

  return (
    <div className={styles.root}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/search-256.png"
        alt=""
        width={16}
      />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Search..."
      />
      {value && (
        <img
          className={styles.clear}
          onClick={onClickClear}
          src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-256.png"
          alt=""
          width={20}
        />
      )}
    </div>
  );
};

export default Search;
