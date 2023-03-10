import styled from 'styled-components';

export const SApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding-bottom: 10000px;
`;

export const SShopNowBtn = styled.button`
  width: 128px;
  height: 36px;
  font-size: 12px;
  background-color: white;
  border: 1px solid black;
  transition: all 0.4s;
  a {
    text-decoration: none;
    color: black;
  }

  :hover {
    color: white;
    background-color: black;
    border: 1px solid black;

    a {
      color: white;
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
    width: 120px;
    height: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    width: 150px;
    height: 45px;
  }
`;
