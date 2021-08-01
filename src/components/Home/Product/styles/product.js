import styled from "styled-components/macro";

export const Container = styled.div`
  background: #7b6ecc;
  height: 80vh;
  margin-top: 2%;
  padding: 0 5%;

  @media only screen and (max-width: 768px) {
    height: 38vh;
  }

  @media only screen and (max-width: 480px) {
    height: 25.5vh;
  }
`;

export const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: 80%;
  max-height: 100%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Header = styled.h1`
  font-size: 3.125em;
  color: white;
  font-family: Inter;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.8rem;
    margin: 3% 0;
    text-align: center;
  }
`;

export const Body = styled.div`
  padding: 5% 0;
  font-family: Inter;
  font-weight: 500;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Icon = styled.img`
  width: 8%;
  height: 8%;
  color: white;
  margin-right: 2%;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    width: 45%;
  }

  @media only screen and (max-width: 480px) {
    width: 50%;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 2em;

  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
