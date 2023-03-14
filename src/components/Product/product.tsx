import { useState, createContext } from 'react';
import {
  SProduct,
  SBackGround,
  SProductFilter,
  SProductWrapper,
  SProductList,
  SProductItem,
} from './product-style';

const url =
  'https://images.unsplash.com/photo-1595951472939-77e584cde8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80';

const Product = () => {
  const [filterState, setFilterState] = useState(false);

  return (
    <SProduct>
      <SBackGround url={url}></SBackGround>
      <SProductWrapper>
        <SProductFilter
          onClick={() => {
            setFilterState((prev) => !prev);
          }}
        >
          Filter by +
        </SProductFilter>
        <SProductList>products list</SProductList>
      </SProductWrapper>
    </SProduct>
  );
};

export default Product;
