import styled from 'styled-components';

export const SHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SBackGround = styled.div`
  width: 100%;
  height: 360px;
  background: url('https://images.unsplash.com/photo-1576016770956-debb63d92058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

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
      width: 40%;
      border-radius: 2px;
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
