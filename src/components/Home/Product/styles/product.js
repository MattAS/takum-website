import styled from "styled-components/macro";

export const Container = styled.div`
  background: #7b6ecc;
  margin-top: 2%;
  padding: 0 5%;
  max-width: 100%;
`;

export const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 60em) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
`;

export const Header = styled.h1`
  font-size: min(8vw, 3.125em);
  color: white;
  font-family: Inter;
  font-weight: bold;
  text-align: center;
  @media (min-width: 60em) {
    text-align: left;
  }
`;

export const Body = styled.div`
  padding: 5% 0;
  font-family: Inter;
  font-weight: 500;
  flex-basis: 100%;
`;

export const Icon = styled.img`
  width: 8%;
  height: 8%;
  color: white;
  margin-right: 2%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-basis: 100%;
`;

export const Text = styled.p`
  color: white;
  font-size: min(4vw, 1.8em);
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
