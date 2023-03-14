import styled from 'styled-components';

export const SHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SBackGround = styled.div`
  width: 100%;
  height: 360px;
  background: url('https://images.unsplash.com/photo-1576016770956-debb63d92058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80');
  background-repeat: no-repeat;
  background-position: 40% center;
  background-attachment: fixed;
  background-size: cover;

  @media (min-width: 768px) {
    height: 760px;
  }
`;

export const SHomeIntroduce = styled.div`
  margin: 24px 12px;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  gap: 32px;
  align-items: center;
  img {
    display: none;
  }

  @media (min-width: 767px) {
    img {
      display: block;
      border-radius: 2px;
      max-width: 18%;
    }
  }
`;

export const SHomeContent = styled.div`
  label {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #bd696f;
  }

  div {
    margin-top: 12px;
    border-bottom: 2px solid black;
    width: 15%;
  }

  @media (min-width: 768px) {
    width: 50%;
    label {
      font-size: 18px;
    }
    div {
      width: 10%;
    }
    p {
      font-size: 10px;
    }
  }

  @media (min-width: 1024px) {
    label {
      font-size: 32px;
    }
    div {
      width: 5%;
    }
    p {
      font-size: 22px;
    }
  }
`;

export const SHomeProducts = styled.div`
  width: 90%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;

export const SHomeBanner = styled.div`
  margin-top: 42px;
  width: 90%;
  height: 1080px;
  display: grid;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1044px) {
    width: 1408px;
  }
`;

export const SBanner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  div {
    flex: 1;
    height: 540px;
    background-color: ${(props: { bannerNumber: number }) => {
      if (props.bannerNumber === 1) {
        return `#F4EBE2`;
      } else {
        return `#F2D5CE`;
      }
    }};
  }

  @media (min-width: 768px) {
    img {
      width: fit;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const SHomeBannerContent = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  algin-items: center;
  justify-content: center;
  gap: 4px;

  label {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: red;
    color: #bd696f;
  }

  span {
    font-family: 'Comfortaa', cursive;
  }

  @media (min-width: 768px) {
    padding: 12px 12px;

    label {
      font-size: 18px;
    }

    p {
      font-size: 10px;
    }
  }

  @media (min-width: 1024px) {
    padding: 0px 32px;

    label {
      font-size: 32px;
    }

    p {
      font-size: 22px;
    }
  }
`;

export const SHomeLogin = styled.div`
  width: 100%;
  height: 420px;
  color: white;

  background: url('https://images.unsplash.com/photo-1576495169018-bd2414046c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2004&q=80');
  background-attachment: fixed;
  background-position: 50% 45%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  span {
    font-size: 18spx;
  }

  label {
    font-size: 32px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export const SHomeLoginBtn = styled.button`
  width: 30%;
  height: 30px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: black;
  border-radius: 1px;
  border: 1px solid black;
  transition: all 0.2s;
  &:hover {
    color: white;
    background-color: black;
  }

  @media (min-width: 768px) {
    width: 20%;
    height: 38px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  @media (min-width: 1024px) {
    width: 10%;
    font-size: 18px;
    height: 44px;
  }
`;
