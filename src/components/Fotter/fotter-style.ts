import styled from 'styled-components';

export const SFotter = styled.div`
  width: 95%;
  height: 234px;
  padding-bottom: 42px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`;

export const SFotterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 16px;

  span {
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    align-items: center;
    width: 30%;
  }
`;

export const SFotterIconList = styled.div`
  display: flex;
  gap: 6px;
  font-size: 26px;
`;

export const SFotterSubContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  input {
    height: 30px;
    padding-left: 22px;
    border-radius: 1px;
    border: 1px solid black;
  }

  button {
    width: 100%;
    height: 42px;
    font-size: 16px;
    letter-spacing: 1px;
    color: white;
    background-color: black;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input {
      width: 50%;
    }

    button {
      width: 40%;
      height: 34px;
      font-size: 12px;
    }
  }
`;
