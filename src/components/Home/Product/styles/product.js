import styled from "styled-components/macro";

export const Container = styled.div`
  background: #7b6ecc;
  height: 80vh;
  width: 100vw;
  padding: 0 5%;
  margin-top: 2%;
`;

export const Inner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: 80%;
  max-height: 100%;
`;

export const Header = styled.h1`
  font-size: 3.125em;
  color: white;
`;

export const Body = styled.div`
  padding: 5% 0;
`;

export const Icon = styled.img`
  width: 8%;
  height: 8%;
  color: white;
  margin-right: 2%;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Text = styled.p`
  color: white;
  font-size: 2em;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
