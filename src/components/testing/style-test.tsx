import styled from 'styled-components';

export const SContact = styled.div`
   {
    max-width: 40rem;
    display: flex;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;
  }

  h1 + p {
    margin: 0;
  }

  h1 + p + p {
    white-space: break-spaces;
  }

  h1:focus {
    outline: none;
    color: hsl(224, 98%, 58%);
  }

  a[href*='twitter'] {
    display: flex;
    font-size: 1.5rem;
    color: #3992ff;
    text-decoration: none;
  }
  a[href*='twitter']:hover {
    text-decoration: underline;
  }

  img {
    width: 12rem;
    height: 12rem;
    background: #c8c8c8;
    margin-right: 2rem;
    border-radius: 1.5rem;
    object-fit: cover;
  }

  h1 ~ div {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  -form {
    display: flex;
    max-width: 40rem;
    flex-direction: column;
    gap: 1rem;
  }
  -form > p:first-child {
    margin: 0;
    padding: 0;
  }
  -form > p:first-child > :nth-child(2) {
    margin-right: 1rem;
  }
  -form > p:first-child,
  -form label {
    display: flex;
  }
  -form p:first-child span,
  -form label span {
    width: 8rem;
  }
  -form p:first-child input,
  -form label input,
  -form label textarea {
    flex-grow: 2;
  }

  -form-avatar {
    margin-right: 2rem;
  }

  -form-avatar img {
    width: 12rem;
    height: 12rem;
    background: hsla(0, 0%, 0%, 0.2);
    border-radius: 1rem;
  }

  -form-avatar input {
    box-sizing: border-box;
    width: 100%;
  }

  -form p:last-child {
    display: flex;
    gap: 0.5rem;
    margin: 0 0 0 8rem;
  }

  -form p:last-child button[type='button'] {
    color: inherit;
  }
`;
