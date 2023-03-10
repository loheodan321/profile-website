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

  useEffect(() => {
    if (initData) {
      console.log(initData);
    }
  }, [initData]);

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
        {/* <SItem>
          <img
            src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
            alt={`iditem-img`}
          />
          <SItemWrapper>
            <span>Item ID: 001</span>
            <SItemInfo>
              <SItemLabel>Product name here</SItemLabel>
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
        </SItem> */}
      </SProduct>
    </>
  );
};

export default Product;
