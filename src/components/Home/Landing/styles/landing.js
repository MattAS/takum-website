import styled from "styled-components/macro";

export const Container = styled.div`
  height: 70vh;
  padding: 2% 5%;

  @media only screen and (max-width: 768px) {
    height: 45vh;
  }

  @media only screen and (max-width: 480px) {
    height: 40vh;
  }
`;

export const Inner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 57%;
  display: flex;
  flex-grow: 1;
  margin-right: 2%;

  @media only screen and (max-width: 480px) {
    margin-top: 6%;
  }
`;

export const Header = styled.p`
  font-size: 3.125em;
  font-family: Inter;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Body = styled.div`
  width: 100%;
`;
