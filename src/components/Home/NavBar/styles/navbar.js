import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 3% 5%;
  padding-right: 12%;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${direction => direction};
`;

export const Image = styled.img`
  width: 15%;
  height: 15%;

  @media only screen and (max-width: 768px) {
    width: 20%;
    height: auto;
  }

  @media only screen and (max-width: 480px) {
    width: 25%;
    height: auto;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  padding-left: 10%;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

export const Text = styled.a`
  font-size: 1.25em;
  color: #343434;
  font-family: Inter;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
