import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #7b6ecc;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Inner = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img``;

export const Body = styled.div`
  justify-content: space-between;
  width: 90%;
  display: grid;
  grid-template-columns: 15% 15% 70%;
  height: 75%;
`;

export const Text = styled.p`
  color: white;
  font-family: Inter;
  font-weight: ${({ weight }) => weight};
`;

export const TextContainer = styled.div`
  width: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  border-top: solid 3px white;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  height: 35%;
`;

export const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BigTextContainer = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => width};
`;
