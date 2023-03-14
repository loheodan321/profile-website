import styled from 'styled-components';

export const SProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const SBackGround = styled.div`
  width: 100%;
  height: 360px;
  background: url(${(props: { url: string }) => props.url}});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 30%;

  @media (min-width: 768px) {
    height: 420px;
  }

  @media (min-width: 1024px) {
    background-position: center 20%;
  }
`;

export const SProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const SProductFilter = styled.div`
  border: 1px solid;
  position: relative;
  transition-timing-function: ease-in;
  transition: all 0.4s;
`;

export const SProductList = styled.div``;

export const SProductItem = styled.div`
  width: 200px;
  height: 50px;
  position: absolute;
  top: 0;
  left: ${(props: { active: boolean }) => {
    if (props.active) {
      return '0%';
    } else {
      return '-100%';
    }
  }};
  background-color: lightblue;
`;
