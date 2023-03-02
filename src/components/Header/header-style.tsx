import styled, { keyframes } from 'styled-components';

export const SHeader = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #a12831;
`;

export const SLogo = styled.div`
  font-family: 'Phudu', cursive;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 6px;
  @media (min-width: 767px) {
    font-size: 32px;
    margin-left: 36px;
  }
  @media (min-width: 1024px) {
    font-size: 42px;
    margin-left: 36px;
  }
`;

export const SHeaderContent = styled.div`
  margin-right: 12px;
  a {
    text-decoration: none;
    color: #a12831;
  }
`;

export const SMenuBtn = styled.div`
  display: flex;
  z-index: 1;
  font-size: 24px;
  @media (min-width: 767px) {
    display: none;
  }
`;

export const SNavBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 22px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  position: fixed;
  top: 90px;
  left: ${(props: boolean) => {
    if (props.active) {
      return '0%';
    } else {
      return '-100%';
    }
  }};
  background-color: white;
  span:hover {
    color: #986c6a;
    cursor: pointer;
  }
  transition-timing-function: ease-in;
  transition: all 0.4s;

  @media (min-width: 768px) {
    gap: 12px;
    position: static;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
    gap: 22px;
  }
`;

// export const SNavBar = styled.div`
//   border: 1px solid;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   gap: 22px;
//   font-size: 18px;
//   font-weight: bold;
//   letter-spacing: 1px;
//   transition: all 0.4s;
//   @media (max-width: 767px) {
//     flex-direction: column;
//     position: fixed;
//     gap: 42px;
//     top: 90px;
//     left: ${(props: boolean) => {
//       if (props.active) {
//         return '0%';
//       } else {
//         return '-100%';
//       }
//     }};
//     background-color: white;
//     span:hover {
//       color: #986c6a;
//       cursor: pointer;
//     }
//   }
// `;

export const SCartBtn = styled.div`
  position: relative;
`;

export const SCartAmount = styled.div`
  position: absolute;
  font-size: 8px;
  top: -3px;
  left: 8px;
  background-color: white;
  padding: 1px;
  border-radisu: 50px;
`;

export const SBanner = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  letter-spacing: 1px;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Slab', serif;
  @media (min-width: 768px) {
    height: 60px;
    font-size: 18px;
    letter-spacing: 2px;
  }
`;
