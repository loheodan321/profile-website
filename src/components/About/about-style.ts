import styled from 'styled-components';

export const SAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4ebe2;
  margin-bottom: 24px;
  padding-bottom: 24px;
`;

export const SBackGround = styled.div`
  width: 100%;
  height: 360px;
  background: url(${(props: { url: string }) => props.url}});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 45% 0%;

  @media (min-width: 768px) {
    height: 760px;
  }

  @media (min-width: 1024px) {
    background-position: 0% 0%;
  }
`;

export const SAboutContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label {
    color: #bd696f;
    font-size: 62px;
    align-self: flex-start;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    flex-direction: row;
    height: 500px;
    gap: 0px;
    align-items: flex-start;
    margin-top: 24px;

    label {
      flex: 1;
      font-size: 32px;
    }

    p {
      flex: 1;
      font-size: 14px;
    }
  }
`;
