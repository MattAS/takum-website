import styled from "styled-components/macro";

export const Container = styled.div`
  background: white;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  display: flex;
`;

export const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 3.125em;
  color: black;
`;

export const Text = styled.p`
  color: black;
  font-size: 2em;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 0.5%;
  margin-top: 4%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;
