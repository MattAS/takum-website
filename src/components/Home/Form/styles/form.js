import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  width: ${({ width }) => width};
  padding: 3% 2%;
  border: none;
  border-bottom: 2px solid #696969;
  font-size: 1.5625em;
  font-family: Inter;
  margin-left: ${({ margin }) => margin};

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
    padding: 2% 1%;

    &:nth-child(2) {
      margin-left: 3%;
      flex-grow: 1;
    }
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #6259a5;
  height: 80%;
  width: 35%;
  color: white;
  justify-content: center;
  border: none;
  font-size: 1.25em;
  border-radius: 8px;
  font-family: Inter;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 4%;
    padding: 2% 0;
    width: 100%;
  }
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
