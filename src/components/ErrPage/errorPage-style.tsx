import styled from 'styled-components';

export const SErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  //   background-color: white;

  h1 {
    font-size: 42px;
  }
  p {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 62px;
    }
    p {
      font-size: 22px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 82px;
    }
    p {
      font-size: 26px;
    }
  }
`;

export const SCloseNav = styled.div`
  width: 128px;
  height: 36px;
  font-size: 26px;
  background-color: white;
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    width: 150px;
    height: 45px;
  }
  @media (min-width: 1024px) {
    font-size: 34px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
