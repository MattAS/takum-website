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
  margin-left: ${({ margin }) => margin};
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #6259a5;
  height: 80%;
  width: 30%;
  color: white;
  justify-content: center;
  border: none;
  font-size: 1.25em;
  border-radius: 8px;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
