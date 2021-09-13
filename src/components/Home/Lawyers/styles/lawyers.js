import styled from "styled-components/macro";

export const Container = styled.div`
  background: white;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  display: flex;
  padding-bottom: 3%;

  @media only screen and (max-width: 1366px) {
    height: 80vh;
  }

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    height: 45vh;
  }

  @media only screen and (max-width: 1024px) {
    height: 70vh;
  }

  @media only screen and (max-width: 768px) {
    height: 80vh;
  }

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    height: 100vh;
  }

  @media only screen and (max-width: 367px) {
    height: 90vh;
  }
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
  font-family: Inter;

  @media only screen and (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Text = styled.p`
  color: black;
  font-size: 2em;
  font-family: Inter;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 0.5%;
  margin-top: 4%;

  @media only screen and (max-width: 768px) {
    margin-top: 7%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 95%;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 60%;
    width: 90%;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 80%;
  }
`;
