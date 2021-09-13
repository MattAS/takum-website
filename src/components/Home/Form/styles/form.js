import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 100%;
`;

export const Input = styled.input`
  padding: 0 0.5em 0.5em 0;
  border: none;
  border-bottom: 2px solid #696969;
  font-size: min(3vw, 2rem);
  font-family: Inter;
  margin-left: 0;
  outline: none;
  max-width: 100%;
  @media (min-width: 50em) {
    max-width: 50%;
    padding: 0 0.5em 0 0;
    font-size: 1.5rem;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #6259a5;
  max-width: 100%;
  height: 5%;
  padding: min(3%, 3rem) min(4%, 5rem);
  color: white;
  justify-content: center;
  border: none;
  font-size: min(2.4vw, 1.1rem);
  border-radius: 8px;
  font-family: Inter;
  cursor: pointer;
  margin-top: 2em;

  @media (min-width: 50rem) {
    margin-left: 1em;
  }
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media (min-width: 50em) {
    flex-direction: row;
  }
`;
