import { useState, useEffect } from 'react';
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

const Product = () => {
  const [initData, setInitData] = useState<CItem[]>([]);
  const { get } = useHttp();

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
          <SItem key={item.id}>
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
    </>
  );
};

export default Product;
