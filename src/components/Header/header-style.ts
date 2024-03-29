import styled from 'styled-components';

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
  font-size: 24px;
  padding: 12px 0px;
  padding-left: 12px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SNavBar = styled.div`
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: white;
  z-index: 1;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 22px;

  position: fixed;
  top: 90px;

  transition-timing-function: ease-in;
  transition: all 0.4s;

  left: ${(props: { active: boolean }) => {
    if (props.active) {
      return '0%';
    } else {
      return '-100%';
    }
  }};

  span:hover {
    color: #986c6a;
    cursor: pointer;
  }

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

export const SFilterBy = styled.div`
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
  background-color: white;
  z-index: 1;
  transition-timing-function: ease-in;
  transition: all 0.4s;

  left: ${(props: { active: boolean }) => {
    if (props.active) {
      return '0%';
    } else {
      return '-100%';
    }
  }};

  span:hover {
    color: #986c6a;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    gap: 12px;
    position: absolute;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
    gap: 22px;
  }
`;
