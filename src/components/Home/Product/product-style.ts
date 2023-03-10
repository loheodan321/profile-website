import styled from 'styled-components';

export const SProduct = styled.div`
  width: 100%;
  height: 550px;
  overflow: hidden;
  overflow-x: scroll;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    height: 720px;
  }
`;

export const SItem = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 1px;
    width: 240px;
    height: 300px;
  }

  @media (min-width: 768px) {
    min-width: 50%;
  }

  @media (min-width: 1024px) {
    min-width: 25%;
  }
`;

export const SItemWrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  span {
    margin-top: 2px;
  }

  @media (min-width: 768px) {
    gap: 16px;

    span {
      margin-top: 4px;
    }
  }

  @media (min-width: 1024px) {
    span {
      margin-top: 4px;
    }
  }
`;

export const SItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    span {
      font-size: 14px;
    }
  }
`;

export const SItemLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const SItemQuantity = styled.div`
  display: flex;
  width: 80%;
  border: 1px solid;
  background-color: white;

  input {
    width: 100%;
    text-align: center;
    height: 30px;
    border: none;
    font-size: 14px;

    :focus {
      outline: none;
    }
  }

  button {
    font-size: 14px;
    font-weight: bold;
    width: 50px;
    color: black;
    border: none;
    background-color: white;
  }

  @media (min-width: 768px) {
    gap: 6px;

    button {
      font-size: 16px;
    }

    input {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    gap: 12px;
  }
`;

export const SItemButton = styled.div`
  border: 1px solid;
  margin-top: 12px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    width: 100%;
    height: 40px;
    border: none;
    color: black;
    background-color: rgb(242, 213, 206);
    transition: all 0.2s;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;
