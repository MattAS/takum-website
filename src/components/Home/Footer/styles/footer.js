import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #7b6ecc;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1366px) {
    height: 35vh;
  }

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    height: 25vh;
  }

  @media only screen and (max-width: 768px) {
    height: 35vh;
  }
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
  grid-template-columns: 20% 20% 60%;
  height: 75%;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    grid-template-columns: 30% 30% 40%;
  }
`;

export const Text = styled.a`
  color: white;
  font-family: Inter;
  font-weight: ${({ weight }) => weight};
  text-decoration: none;
  font-size: 1.1rem;
  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 185%;
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
  line-height: 200%;
`;

export const BigTextContainer = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
