import { useState, useEffect, useRef, useMemo } from 'react';
import {
  SProduct,
  SItem,
  SItemWrapper,
  SItemQuantity,
  SItemInfo,
  SItemLabel,
  SItemButton,
} from './product-style';
import { _axios } from '../../Repository/connection';
import { CItem } from '../../Models';
import { JsonConvert } from 'json2typescript';
import { useHttp } from '../../Repository/connection';
import { SContact } from '../../testing/style-test';

const Product = () => {
  const { get } = useHttp();

  const [initData, setInitData] = useState<CItem[]>([]);
  const listItem = useRef<any>(null);

  let scrollTo = useMemo(() => {
    return 0;
  }, []);

  const scrollHandler = (index: number) => {
    if (scrollTo < initData.length) {
      scrollTo++;
    }
    if (scrollTo > initData.length) {
      scrollTo = 0;
    }
    console.log(scrollTo);
    listItem.current.scrollIntoView(initData[index]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const respone = await get('/init.json');
        if (respone.status != 200) {
          throw new Error();
        } else {
          respone.data.map((item: unknown) => {
            let jsonConvert = new JsonConvert();
            let value = jsonConvert.deserializeObject(item, CItem);
            setInitData((prev: any) => [...prev, value]);
          });
        }
      } catch (error) {
        alert(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <SProduct>
        {initData?.map((item) => (
          <SItem key={item.id} ref={listItem}>
            <img src={`${item.imgSrc}`} alt={`${item.id}-img`} />
            <SItemWrapper>
              <span>Item ID: {item.id}</span>
              <SItemInfo>
                <SItemLabel>{item.name}</SItemLabel>
                <span>$15.00</span>
              </SItemInfo>
              <SItemQuantity>
                <button>-</button>
                <input type="text" placeholder="0" />
                <button>+</button>
              </SItemQuantity>
            </SItemWrapper>
            <SItemButton>
              <button>Add to cart</button>
            </SItemButton>
          </SItem>
        ))}
      </SProduct>
      <button
        onClick={() => {
          scrollHandler(scrollTo);
        }}
      >
        Scroll
      </button>
    </>
  );
};

export default Product;
